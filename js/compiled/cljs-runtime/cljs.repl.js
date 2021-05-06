goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__53860){
var map__53861 = p__53860;
var map__53861__$1 = (((((!((map__53861 == null))))?(((((map__53861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53861):map__53861);
var m = map__53861__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53861__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53861__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__53865_54202 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53866_54203 = null;
var count__53867_54204 = (0);
var i__53868_54205 = (0);
while(true){
if((i__53868_54205 < count__53867_54204)){
var f_54208 = chunk__53866_54203.cljs$core$IIndexed$_nth$arity$2(null,i__53868_54205);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54208], 0));


var G__54209 = seq__53865_54202;
var G__54210 = chunk__53866_54203;
var G__54211 = count__53867_54204;
var G__54212 = (i__53868_54205 + (1));
seq__53865_54202 = G__54209;
chunk__53866_54203 = G__54210;
count__53867_54204 = G__54211;
i__53868_54205 = G__54212;
continue;
} else {
var temp__5735__auto___54213 = cljs.core.seq(seq__53865_54202);
if(temp__5735__auto___54213){
var seq__53865_54214__$1 = temp__5735__auto___54213;
if(cljs.core.chunked_seq_QMARK_(seq__53865_54214__$1)){
var c__4556__auto___54215 = cljs.core.chunk_first(seq__53865_54214__$1);
var G__54216 = cljs.core.chunk_rest(seq__53865_54214__$1);
var G__54217 = c__4556__auto___54215;
var G__54218 = cljs.core.count(c__4556__auto___54215);
var G__54219 = (0);
seq__53865_54202 = G__54216;
chunk__53866_54203 = G__54217;
count__53867_54204 = G__54218;
i__53868_54205 = G__54219;
continue;
} else {
var f_54225 = cljs.core.first(seq__53865_54214__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54225], 0));


var G__54226 = cljs.core.next(seq__53865_54214__$1);
var G__54227 = null;
var G__54228 = (0);
var G__54229 = (0);
seq__53865_54202 = G__54226;
chunk__53866_54203 = G__54227;
count__53867_54204 = G__54228;
i__53868_54205 = G__54229;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_54230 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_54230], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_54230)))?cljs.core.second(arglists_54230):arglists_54230)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__53881_54237 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53882_54238 = null;
var count__53883_54239 = (0);
var i__53884_54240 = (0);
while(true){
if((i__53884_54240 < count__53883_54239)){
var vec__53898_54243 = chunk__53882_54238.cljs$core$IIndexed$_nth$arity$2(null,i__53884_54240);
var name_54244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53898_54243,(0),null);
var map__53901_54246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53898_54243,(1),null);
var map__53901_54247__$1 = (((((!((map__53901_54246 == null))))?(((((map__53901_54246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53901_54246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53901_54246):map__53901_54246);
var doc_54248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53901_54247__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53901_54247__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54244], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54249], 0));

if(cljs.core.truth_(doc_54248)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54248], 0));
} else {
}


var G__54251 = seq__53881_54237;
var G__54252 = chunk__53882_54238;
var G__54253 = count__53883_54239;
var G__54254 = (i__53884_54240 + (1));
seq__53881_54237 = G__54251;
chunk__53882_54238 = G__54252;
count__53883_54239 = G__54253;
i__53884_54240 = G__54254;
continue;
} else {
var temp__5735__auto___54256 = cljs.core.seq(seq__53881_54237);
if(temp__5735__auto___54256){
var seq__53881_54260__$1 = temp__5735__auto___54256;
if(cljs.core.chunked_seq_QMARK_(seq__53881_54260__$1)){
var c__4556__auto___54261 = cljs.core.chunk_first(seq__53881_54260__$1);
var G__54262 = cljs.core.chunk_rest(seq__53881_54260__$1);
var G__54263 = c__4556__auto___54261;
var G__54264 = cljs.core.count(c__4556__auto___54261);
var G__54265 = (0);
seq__53881_54237 = G__54262;
chunk__53882_54238 = G__54263;
count__53883_54239 = G__54264;
i__53884_54240 = G__54265;
continue;
} else {
var vec__53911_54266 = cljs.core.first(seq__53881_54260__$1);
var name_54267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53911_54266,(0),null);
var map__53914_54268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53911_54266,(1),null);
var map__53914_54269__$1 = (((((!((map__53914_54268 == null))))?(((((map__53914_54268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53914_54268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53914_54268):map__53914_54268);
var doc_54270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53914_54269__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53914_54269__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54267], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54271], 0));

if(cljs.core.truth_(doc_54270)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54270], 0));
} else {
}


var G__54277 = cljs.core.next(seq__53881_54260__$1);
var G__54278 = null;
var G__54279 = (0);
var G__54280 = (0);
seq__53881_54237 = G__54277;
chunk__53882_54238 = G__54278;
count__53883_54239 = G__54279;
i__53884_54240 = G__54280;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__53917 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__53918 = null;
var count__53919 = (0);
var i__53920 = (0);
while(true){
if((i__53920 < count__53919)){
var role = chunk__53918.cljs$core$IIndexed$_nth$arity$2(null,i__53920);
var temp__5735__auto___54283__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___54283__$1)){
var spec_54284 = temp__5735__auto___54283__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54284)], 0));
} else {
}


var G__54285 = seq__53917;
var G__54286 = chunk__53918;
var G__54287 = count__53919;
var G__54288 = (i__53920 + (1));
seq__53917 = G__54285;
chunk__53918 = G__54286;
count__53919 = G__54287;
i__53920 = G__54288;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__53917);
if(temp__5735__auto____$1){
var seq__53917__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__53917__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53917__$1);
var G__54290 = cljs.core.chunk_rest(seq__53917__$1);
var G__54291 = c__4556__auto__;
var G__54292 = cljs.core.count(c__4556__auto__);
var G__54293 = (0);
seq__53917 = G__54290;
chunk__53918 = G__54291;
count__53919 = G__54292;
i__53920 = G__54293;
continue;
} else {
var role = cljs.core.first(seq__53917__$1);
var temp__5735__auto___54294__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___54294__$2)){
var spec_54295 = temp__5735__auto___54294__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54295)], 0));
} else {
}


var G__54297 = cljs.core.next(seq__53917__$1);
var G__54298 = null;
var G__54299 = (0);
var G__54300 = (0);
seq__53917 = G__54297;
chunk__53918 = G__54298;
count__53919 = G__54299;
i__53920 = G__54300;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__54306 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__54307 = cljs.core.ex_cause(t);
via = G__54306;
t = G__54307;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__53964 = datafied_throwable;
var map__53964__$1 = (((((!((map__53964 == null))))?(((((map__53964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53964):map__53964);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53964__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53964__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53964__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__53965 = cljs.core.last(via);
var map__53965__$1 = (((((!((map__53965 == null))))?(((((map__53965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53965):map__53965);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53965__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53965__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53965__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__53966 = data;
var map__53966__$1 = (((((!((map__53966 == null))))?(((((map__53966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53966):map__53966);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53966__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53966__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53966__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__53967 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__53967__$1 = (((((!((map__53967 == null))))?(((((map__53967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53967):map__53967);
var top_data = map__53967__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53967__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__53977 = phase;
var G__53977__$1 = (((G__53977 instanceof cljs.core.Keyword))?G__53977.fqn:null);
switch (G__53977__$1) {
case "read-source":
var map__53978 = data;
var map__53978__$1 = (((((!((map__53978 == null))))?(((((map__53978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53978):map__53978);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53978__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53978__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__53981 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__53981__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53981,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53981);
var G__53981__$2 = (cljs.core.truth_((function (){var fexpr__53982 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53982.cljs$core$IFn$_invoke$arity$1 ? fexpr__53982.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53982.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53981__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53981__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53981__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53981__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__53983 = top_data;
var G__53983__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53983,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53983);
var G__53983__$2 = (cljs.core.truth_((function (){var fexpr__53984 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53984.cljs$core$IFn$_invoke$arity$1 ? fexpr__53984.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53984.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53983__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53983__$1);
var G__53983__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53983__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53983__$2);
var G__53983__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53983__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53983__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53983__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53983__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__53985 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53985,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53985,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53985,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53985,(3),null);
var G__53988 = top_data;
var G__53988__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53988,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__53988);
var G__53988__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53988__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__53988__$1);
var G__53988__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53988__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__53988__$2);
var G__53988__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53988__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53988__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53988__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53988__$4;
}

break;
case "execution":
var vec__54008 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54008,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54008,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54008,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54008,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__53962_SHARP_){
var or__4126__auto__ = (p1__53962_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__54012 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54012.cljs$core$IFn$_invoke$arity$1 ? fexpr__54012.cljs$core$IFn$_invoke$arity$1(p1__53962_SHARP_) : fexpr__54012.call(null,p1__53962_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__54014 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__54014__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54014,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__54014);
var G__54014__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54014__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__54014__$1);
var G__54014__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54014__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__54014__$2);
var G__54014__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54014__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__54014__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54014__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__54014__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53977__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__54058){
var map__54063 = p__54058;
var map__54063__$1 = (((((!((map__54063 == null))))?(((((map__54063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54063):map__54063);
var triage_data = map__54063__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54063__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54063__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54063__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54063__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54063__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54063__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54063__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54063__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__54112 = phase;
var G__54112__$1 = (((G__54112 instanceof cljs.core.Keyword))?G__54112.fqn:null);
switch (G__54112__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__54113 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__54114 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54115 = loc;
var G__54116 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54118_54366 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54119_54367 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54120_54368 = true;
var _STAR_print_fn_STAR__temp_val__54121_54369 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54120_54368);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54121_54369);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54036_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54036_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54119_54367);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54118_54366);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54113,G__54114,G__54115,G__54116) : format.call(null,G__54113,G__54114,G__54115,G__54116));

break;
case "macroexpansion":
var G__54132 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__54133 = cause_type;
var G__54134 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54135 = loc;
var G__54136 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54132,G__54133,G__54134,G__54135,G__54136) : format.call(null,G__54132,G__54133,G__54134,G__54135,G__54136));

break;
case "compile-syntax-check":
var G__54141 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__54142 = cause_type;
var G__54143 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54144 = loc;
var G__54145 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54141,G__54142,G__54143,G__54144,G__54145) : format.call(null,G__54141,G__54142,G__54143,G__54144,G__54145));

break;
case "compilation":
var G__54148 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__54149 = cause_type;
var G__54150 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54151 = loc;
var G__54152 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54148,G__54149,G__54150,G__54151,G__54152) : format.call(null,G__54148,G__54149,G__54150,G__54151,G__54152));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__54162 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__54163 = symbol;
var G__54164 = loc;
var G__54165 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54166_54391 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54167_54392 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54168_54393 = true;
var _STAR_print_fn_STAR__temp_val__54169_54394 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54168_54393);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54169_54394);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54046_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54046_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54167_54392);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54166_54391);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54162,G__54163,G__54164,G__54165) : format.call(null,G__54162,G__54163,G__54164,G__54165));
} else {
var G__54179 = "Execution error%s at %s(%s).\n%s\n";
var G__54180 = cause_type;
var G__54181 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54182 = loc;
var G__54183 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54179,G__54180,G__54181,G__54182,G__54183) : format.call(null,G__54179,G__54180,G__54181,G__54182,G__54183));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54112__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
