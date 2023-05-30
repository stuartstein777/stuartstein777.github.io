goog.provide('shadow.remote.runtime.obj_support');

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
shadow.remote.runtime.obj_support.Reference = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k28493,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__28508 = k28493;
var G__28508__$1 = (((G__28508 instanceof cljs.core.Keyword))?G__28508.fqn:null);
switch (G__28508__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28493,else__5346__auto__);

}
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__28516){
var vec__28517 = p__28516;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28517,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28517,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.remote.runtime.obj-support.Reference{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28492){
var self__ = this;
var G__28492__$1 = this;
return (new cljs.core.RecordIter((0),G__28492__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.remote.runtime.obj_support.Reference(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1775716890 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28494,other28495){
var self__ = this;
var this28494__$1 = this;
return (((!((other28495 == null)))) && ((((this28494__$1.constructor === other28495.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28494__$1.obj,other28495.obj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28494__$1.__extmap,other28495.__extmap)))))));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.remote.runtime.obj_support.Reference(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k28493){
var self__ = this;
var this__5350__auto____$1 = this;
var G__28553 = k28493;
var G__28553__$1 = (((G__28553 instanceof cljs.core.Keyword))?G__28553.fqn:null);
switch (G__28553__$1) {
case "obj":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28493);

}
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__28492){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__28556 = cljs.core.keyword_identical_QMARK_;
var expr__28557 = k__5352__auto__;
if(cljs.core.truth_((pred__28556.cljs$core$IFn$_invoke$arity$2 ? pred__28556.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"obj","obj",981763962),expr__28557) : pred__28556.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__28557)))){
return (new shadow.remote.runtime.obj_support.Reference(G__28492,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.remote.runtime.obj_support.Reference(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__28492),null));
}
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj,null))], null),self__.__extmap));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__28492){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.remote.runtime.obj_support.Reference(self__.obj,G__28492,self__.__extmap,self__.__hash));
}));

(shadow.remote.runtime.obj_support.Reference.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.remote.runtime.obj_support.Reference.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(shadow.remote.runtime.obj_support.Reference.cljs$lang$type = true);

(shadow.remote.runtime.obj_support.Reference.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.remote.runtime.obj-support/Reference",null,(1),null));
}));

(shadow.remote.runtime.obj_support.Reference.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.remote.runtime.obj-support/Reference");
}));

/**
 * Positional factory function for shadow.remote.runtime.obj-support/Reference.
 */
shadow.remote.runtime.obj_support.__GT_Reference = (function shadow$remote$runtime$obj_support$__GT_Reference(obj){
return (new shadow.remote.runtime.obj_support.Reference(obj,null,null,null));
});

/**
 * Factory function for shadow.remote.runtime.obj-support/Reference, taking a map of keywords to field values.
 */
shadow.remote.runtime.obj_support.map__GT_Reference = (function shadow$remote$runtime$obj_support$map__GT_Reference(G__28498){
var extmap__5385__auto__ = (function (){var G__28577 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28498,new cljs.core.Keyword(null,"obj","obj",981763962));
if(cljs.core.record_QMARK_(G__28498)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28577);
} else {
return G__28577;
}
})();
return (new shadow.remote.runtime.obj_support.Reference(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__28498),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.remote.runtime.obj_support.obj_ref = (function shadow$remote$runtime$obj_support$obj_ref(obj){
if((!((obj == null)))){
return (new shadow.remote.runtime.obj_support.Reference(obj,null,null,null));
} else {
return null;
}
});
shadow.remote.runtime.obj_support.obj_ref_QMARK_ = (function shadow$remote$runtime$obj_support$obj_ref_QMARK_(result){
return (result instanceof shadow.remote.runtime.obj_support.Reference);
});
shadow.remote.runtime.obj_support.now = (function shadow$remote$runtime$obj_support$now(){
return Date.now();
});
shadow.remote.runtime.obj_support.next_oid = (function shadow$remote$runtime$obj_support$next_oid(){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
});
shadow.remote.runtime.obj_support.register_STAR_ = (function shadow$remote$runtime$obj_support$register_STAR_(state,oid,obj,obj_info){
var ts = shadow.remote.runtime.obj_support.now();
var entry = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"obj","obj",981763962),obj,new cljs.core.Keyword(null,"data","data",-232669377),clojure.datafy.datafy(obj),new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),obj_info,new cljs.core.Keyword(null,"added-at","added-at",-352499434),ts,new cljs.core.Keyword(null,"access-at","access-at",-1487162729),ts,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),oid], null),entry);
});
shadow.remote.runtime.obj_support.obj_type_string = (function shadow$remote$runtime$obj_support$obj_type_string(obj){
if((obj == null)){
return "nil";
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0));
}
});
shadow.remote.runtime.obj_support.default_max_print_size = (((1) * (1024)) * (1024));
shadow.remote.runtime.obj_support.request_edn = (function shadow$remote$runtime$obj_support$request_edn(p__28609,p__28610){
var map__28612 = p__28609;
var map__28612__$1 = cljs.core.__destructure_map(map__28612);
var entry = map__28612__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28612__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28614 = p__28610;
var map__28614__$1 = cljs.core.__destructure_map(map__28614);
var msg = map__28614__$1;
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28614__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),shadow.remote.runtime.obj_support.default_max_print_size);
var lw = shadow.remote.runtime.writer.limit_writer(limit);
cljs.core.pr_writer(data,lw,cljs.core.pr_opts());

return shadow.remote.runtime.writer.get_string(lw);
});
shadow.remote.runtime.obj_support.request_pprint = (function shadow$remote$runtime$obj_support$request_pprint(p__28617,p__28618){
var map__28620 = p__28617;
var map__28620__$1 = cljs.core.__destructure_map(map__28620);
var entry = map__28620__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28620__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28621 = p__28618;
var map__28621__$1 = cljs.core.__destructure_map(map__28621);
var msg = map__28621__$1;
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28621__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),shadow.remote.runtime.obj_support.default_max_print_size);
var lw = shadow.remote.runtime.writer.limit_writer(limit);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(data,lw);

return shadow.remote.runtime.writer.get_string(lw);
});
shadow.remote.runtime.obj_support.request_edn_limit = (function shadow$remote$runtime$obj_support$request_edn_limit(p__28624,p__28625){
var map__28627 = p__28624;
var map__28627__$1 = cljs.core.__destructure_map(map__28627);
var entry = map__28627__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28627__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28628 = p__28625;
var map__28628__$1 = cljs.core.__destructure_map(map__28628);
var msg = map__28628__$1;
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28628__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
return shadow.remote.runtime.writer.pr_str_limit(data,limit);
});
shadow.remote.runtime.obj_support.request_str = (function shadow$remote$runtime$obj_support$request_str(p__28632,msg){
var map__28634 = p__28632;
var map__28634__$1 = cljs.core.__destructure_map(map__28634);
var entry = map__28634__$1;
var obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28634__$1,new cljs.core.Keyword(null,"obj","obj",981763962));
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj);
});
shadow.remote.runtime.obj_support.request_ex_str = (function shadow$remote$runtime$obj_support$request_ex_str(p__28635,msg){
var map__28636 = p__28635;
var map__28636__$1 = cljs.core.__destructure_map(map__28636);
var entry = map__28636__$1;
var ex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28636__$1,new cljs.core.Keyword(null,"obj","obj",981763962));
if((ex instanceof Error)){
return cljs.repl.error__GT_str(ex);
} else {
return ["Execution error:\n","  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(shadow.remote.runtime.writer.pr_str_limit(ex,(200)))),"\n","\n"].join('');
}
});
shadow.remote.runtime.obj_support.exception_QMARK_ = (function shadow$remote$runtime$obj_support$exception_QMARK_(x){
return true;
});
shadow.remote.runtime.obj_support.simple_value_QMARK_ = (function shadow$remote$runtime$obj_support$simple_value_QMARK_(val){
return (((val == null)) || (((cljs.core.boolean_QMARK_(val)) || (((typeof val === 'number') || ((((val instanceof cljs.core.Keyword)) || ((((((val instanceof cljs.core.Symbol)) && ((cljs.core.meta(val) == null)))) || (((((typeof val === 'string') && (((64) > cljs.core.count(val))))) || (((cljs.core.coll_QMARK_(val)) && (((cljs.core.empty_QMARK_(val)) && ((cljs.core.meta(val) == null)))))))))))))))));
});
shadow.remote.runtime.obj_support.rank_predicates = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,cljs.core.boolean_QMARK_,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.keyword_QMARK_,cljs.core.symbol_QMARK_,cljs.core.vector_QMARK_,cljs.core.map_QMARK_,cljs.core.list_QMARK_], null);
shadow.remote.runtime.obj_support.rank_val = (function shadow$remote$runtime$obj_support$rank_val(val){
return cljs.core.reduce_kv((function (res,idx,pred){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(val) : pred.call(null,val)))){
return cljs.core.reduced(idx);
} else {
return res;
}
}),(-1),shadow.remote.runtime.obj_support.rank_predicates);
});
shadow.remote.runtime.obj_support.smart_comp = (function shadow$remote$runtime$obj_support$smart_comp(a,b){
try{return cljs.core.compare(a,b);
}catch (e28670){if((e28670 instanceof Error)){
var e = e28670;
var ar = shadow.remote.runtime.obj_support.rank_val(a);
var br = shadow.remote.runtime.obj_support.rank_val(b);
return cljs.core.compare(ar,br);
} else {
throw e28670;

}
}});
shadow.remote.runtime.obj_support.attempt_to_sort = (function shadow$remote$runtime$obj_support$attempt_to_sort(coll){
return cljs.core.vec((function (){try{return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(shadow.remote.runtime.obj_support.smart_comp,coll);
}catch (e28678){var e = e28678;
return coll;
}})());
});
shadow.remote.runtime.obj_support.cache_view_order = (function shadow$remote$runtime$obj_support$cache_view_order(state_ref,p__28682,coll){
var map__28683 = p__28682;
var map__28683__$1 = cljs.core.__destructure_map(map__28683);
var oid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28683__$1,new cljs.core.Keyword(null,"oid","oid",-768692334));
var view_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28683__$1,new cljs.core.Keyword(null,"view-order","view-order",566761574));
var or__5045__auto__ = view_order;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var view_order__$1 = shadow.remote.runtime.obj_support.attempt_to_sort(coll);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),oid,new cljs.core.Keyword(null,"view-order","view-order",566761574)], null),view_order__$1);

return view_order__$1;
}
});
shadow.remote.runtime.obj_support.request_nav = (function shadow$remote$runtime$obj_support$request_nav(p__28688,p__28689,state_ref){
var map__28690 = p__28688;
var map__28690__$1 = cljs.core.__destructure_map(map__28690);
var entry = map__28690__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28690__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28691 = p__28689;
var map__28691__$1 = cljs.core.__destructure_map(map__28691);
var msg = map__28691__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28691__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
if(((cljs.core.vector_QMARK_(data)) || (cljs.core.list_QMARK_(data)))){
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,idx);
var nav = clojure.datafy.nav(data,idx,val);
return shadow.remote.runtime.obj_support.obj_ref(nav);
} else {
if(cljs.core.map_QMARK_(data)){
var view_order = shadow.remote.runtime.obj_support.cache_view_order(state_ref,entry,cljs.core.keys(data));
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(view_order,idx);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,key);
var nav = clojure.datafy.nav(data,key,val);
return shadow.remote.runtime.obj_support.obj_ref(nav);
} else {
if(cljs.core.set_QMARK_(data)){
var view_order = shadow.remote.runtime.obj_support.cache_view_order(state_ref,entry,data);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(view_order,idx);
var nav = clojure.datafy.nav(data,idx,val);
return shadow.remote.runtime.obj_support.obj_ref(nav);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("nav not supported?",entry);

}
}
}
});
shadow.remote.runtime.obj_support.request_fragment = (function shadow$remote$runtime$obj_support$request_fragment(p__28705,p__28706,state_ref){
var map__28707 = p__28705;
var map__28707__$1 = cljs.core.__destructure_map(map__28707);
var entry = map__28707__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28707__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28708 = p__28706;
var map__28708__$1 = cljs.core.__destructure_map(map__28708);
var msg = map__28708__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28708__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28708__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var val_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28708__$1,new cljs.core.Keyword(null,"val-limit","val-limit",1428666181),(100));
if(cljs.core.map_QMARK_(data)){
var map__28710 = msg;
var map__28710__$1 = cljs.core.__destructure_map(map__28710);
var key_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28710__$1,new cljs.core.Keyword(null,"key-limit","key-limit",259239169),(100));
var view_order = shadow.remote.runtime.obj_support.cache_view_order(state_ref,entry,cljs.core.keys(data));
var end = (function (){var x__5133__auto__ = cljs.core.count(view_order);
var y__5134__auto__ = (start + num);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var idxs = cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,end);
var fragment = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,idx){
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(view_order,idx);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,idx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (){try{return shadow.remote.runtime.writer.pr_str_limit(key,key_limit);
}catch (e28711){var e = e28711;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,"... print failed ..."], null);
}})(),new cljs.core.Keyword(null,"val","val",128701612),(function (){try{return shadow.remote.runtime.writer.pr_str_limit(val,val_limit);
}catch (e28713){var e = e28713;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,"... print failed ..."], null);
}})()], null));
}),cljs.core.PersistentArrayMap.EMPTY,idxs);
return fragment;
} else {
if(cljs.core.vector_QMARK_(data)){
var end = (function (){var x__5133__auto__ = cljs.core.count(data);
var y__5134__auto__ = (start + num);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var idxs = cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,end);
var fragment = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,idx){
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,idx);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,idx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),shadow.remote.runtime.writer.pr_str_limit(val,val_limit)], null));
}),cljs.core.PersistentArrayMap.EMPTY,idxs);
return fragment;
} else {
if(cljs.core.list_QMARK_(data)){
var end = (function (){var x__5133__auto__ = cljs.core.count(data);
var y__5134__auto__ = (start + num);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var idxs = cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,end);
var fragment = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,idx){
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,idx);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,idx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),shadow.remote.runtime.writer.pr_str_limit(val,val_limit)], null));
}),cljs.core.PersistentArrayMap.EMPTY,idxs);
return fragment;
} else {
if(cljs.core.set_QMARK_(data)){
var view_order = shadow.remote.runtime.obj_support.cache_view_order(state_ref,entry,data);
var end = (function (){var x__5133__auto__ = cljs.core.count(view_order);
var y__5134__auto__ = (start + num);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var idxs = cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,end);
var fragment = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,idx){
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(view_order,idx);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,idx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),shadow.remote.runtime.writer.pr_str_limit(val,val_limit)], null));
}),cljs.core.PersistentArrayMap.EMPTY,idxs);
return fragment;
} else {
return null;
}
}
}
}
});
shadow.remote.runtime.obj_support.get_data_type = (function shadow$remote$runtime$obj_support$get_data_type(summary,p__28715){
var map__28716 = p__28715;
var map__28716__$1 = cljs.core.__destructure_map(map__28716);
var entry = map__28716__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28716__$1,new cljs.core.Keyword(null,"data","data",-232669377));
try{if((data == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(summary,new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"nil","nil",99600501));
} else {
if(typeof data === 'string'){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(summary,new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data-count","data-count",1898198662),((data).length)], 0));
} else {
if(cljs.core.boolean_QMARK_(data)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(summary,new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
} else {
if(typeof data === 'number'){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(summary,new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"number","number",1570378438));
} else {
if((data instanceof cljs.core.Keyword)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(summary,new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"keyword","keyword",811389747));
} else {
if((data instanceof cljs.core.Symbol)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(summary,new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"symbol","symbol",-1038572696));
} else {
if(cljs.core.map_QMARK_(data)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(summary,new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data-count","data-count",1898198662),cljs.core.count(data)], 0));
} else {
if(cljs.core.vector_QMARK_(data)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(summary,new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"vec","vec",-657847931),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data-count","data-count",1898198662),cljs.core.count(data)], 0));
} else {
if(cljs.core.set_QMARK_(data)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(summary,new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"set","set",304602554),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data-count","data-count",1898198662),cljs.core.count(data)], 0));
} else {
if(cljs.core.list_QMARK_(data)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(summary,new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"list","list",765357683),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data-count","data-count",1898198662),cljs.core.count(data)], 0));
} else {
if(cljs.core.seq_QMARK_(data)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(summary,new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"seq","seq",-1817803783));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(summary,new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"unsupported","unsupported",-1045607016));

}
}
}
}
}
}
}
}
}
}
}
}catch (e28717){var e = e28717;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(summary,new cljs.core.Keyword(null,"data-type","data-type",-326421468),new cljs.core.Keyword(null,"unsupported","unsupported",-1045607016),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data-type-fail","data-type-fail",1917235450),true], 0));
}});
shadow.remote.runtime.obj_support.merge_source_info = (function shadow$remote$runtime$obj_support$merge_source_info(summary,p__28718){
var map__28719 = p__28718;
var map__28719__$1 = cljs.core.__destructure_map(map__28719);
var obj_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28719__$1,new cljs.core.Keyword(null,"obj-info","obj-info",-373842651));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([summary,cljs.core.select_keys(obj_info,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"label","label",1718410804)], null))], 0));
});
shadow.remote.runtime.obj_support.inspect_entry_BANG_ = (function shadow$remote$runtime$obj_support$inspect_entry_BANG_(p__28720,p__28721){
var map__28722 = p__28720;
var map__28722__$1 = cljs.core.__destructure_map(map__28722);
var this$ = map__28722__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28722__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__28723 = p__28721;
var map__28723__$1 = cljs.core.__destructure_map(map__28723);
var entry = map__28723__$1;
var obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28723__$1,new cljs.core.Keyword(null,"obj","obj",981763962));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28723__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var added_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28723__$1,new cljs.core.Keyword(null,"added-at","added-at",-352499434));
var $ = shadow.remote.runtime.obj_support.merge_source_info(shadow.remote.runtime.obj_support.get_data_type(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"added-at","added-at",-352499434),added_at,new cljs.core.Keyword(null,"datafied","datafied",2076148104),(!((data === obj))),new cljs.core.Keyword(null,"obj-type","obj-type",-1658555496),shadow.remote.runtime.obj_support.obj_type_string(obj),new cljs.core.Keyword(null,"supports","supports",1501242067),cljs.core.PersistentHashSet.EMPTY], null),entry),entry);
return cljs.core.reduce_kv((function (summary,handler_id,p__28727){
var map__28728 = p__28727;
var map__28728__$1 = cljs.core.__destructure_map(map__28728);
var handler_config = map__28728__$1;
var inspect_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28728__$1,new cljs.core.Keyword(null,"inspect-fn","inspect-fn",1796793813));
return (inspect_fn.cljs$core$IFn$_invoke$arity$2 ? inspect_fn.cljs$core$IFn$_invoke$arity$2(summary,entry) : inspect_fn.call(null,summary,entry));
}),$,new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)));
});
shadow.remote.runtime.obj_support.obj_describe_STAR_ = (function shadow$remote$runtime$obj_support$obj_describe_STAR_(p__28729,oid){
var map__28730 = p__28729;
var map__28730__$1 = cljs.core.__destructure_map(map__28730);
var this$ = map__28730__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28730__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var temp__5808__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),oid], null));
if((temp__5808__auto__ == null)){
return null;
} else {
var entry = temp__5808__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),oid,new cljs.core.Keyword(null,"access-at","access-at",-1487162729)], null),shadow.remote.runtime.obj_support.now());

return shadow.remote.runtime.obj_support.inspect_entry_BANG_(this$,entry);
}
});
shadow.remote.runtime.obj_support.obj_describe = (function shadow$remote$runtime$obj_support$obj_describe(p__28731,p__28732){
var map__28733 = p__28731;
var map__28733__$1 = cljs.core.__destructure_map(map__28733);
var this$ = map__28733__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28733__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__28734 = p__28732;
var map__28734__$1 = cljs.core.__destructure_map(map__28734);
var msg = map__28734__$1;
var oid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28734__$1,new cljs.core.Keyword(null,"oid","oid",-768692334));
var temp__5802__auto__ = shadow.remote.runtime.obj_support.obj_describe_STAR_(this$,oid);
if(cljs.core.truth_(temp__5802__auto__)){
var summary = temp__5802__auto__;
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-summary","obj-summary",-1372191064),new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),summary], null));
} else {
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-not-found","obj-not-found",1577257696),new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));
}
});
shadow.remote.runtime.obj_support.obj_request = (function shadow$remote$runtime$obj_support$obj_request(p__28751,p__28752){
var map__28756 = p__28751;
var map__28756__$1 = cljs.core.__destructure_map(map__28756);
var this$ = map__28756__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28756__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28756__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__28757 = p__28752;
var map__28757__$1 = cljs.core.__destructure_map(map__28757);
var msg = map__28757__$1;
var oid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28757__$1,new cljs.core.Keyword(null,"oid","oid",-768692334));
var request_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28757__$1,new cljs.core.Keyword(null,"request-op","request-op",1472997246));
if((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)),oid)))){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-not-found","obj-not-found",1577257696),new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),oid,new cljs.core.Keyword(null,"access-at","access-at",-1487162729)], null),shadow.remote.runtime.obj_support.now());

var entry = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),oid], null));
var request_fn = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state_ref),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),request_op,new cljs.core.Keyword(null,"request-fn","request-fn",-589284051)], null));
if(cljs.core.not(request_fn)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-request-not-supported","obj-request-not-supported",93907126),new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"request-op","request-op",1472997246),request_op], null));
} else {
try{var result = (request_fn.cljs$core$IFn$_invoke$arity$2 ? request_fn.cljs$core$IFn$_invoke$arity$2(entry,msg) : request_fn.call(null,entry,msg));
if((!(shadow.remote.runtime.obj_support.obj_ref_QMARK_(result)))){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-result","obj-result",-486300152),new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"result","result",1415092211),result], null));
} else {
var new_oid = (function (){var G__28817 = this$;
var G__28818 = new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(result);
var G__28819 = cljs.core.PersistentArrayMap.EMPTY;
return (shadow.remote.runtime.obj_support.register.cljs$core$IFn$_invoke$arity$3 ? shadow.remote.runtime.obj_support.register.cljs$core$IFn$_invoke$arity$3(G__28817,G__28818,G__28819) : shadow.remote.runtime.obj_support.register.call(null,G__28817,G__28818,G__28819));
})();
var reply_msg = (function (){var G__28828 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-result-ref","obj-result-ref",1537374891),new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"ref-oid","ref-oid",-526648644),new_oid], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"summary","summary",380847952).cljs$core$IFn$_invoke$arity$1(msg))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28828,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(this$,new_oid));
} else {
return G__28828;
}
})();
return shadow.remote.runtime.shared.reply(runtime,msg,reply_msg);
}
}catch (e28781){var e = e28781;
console.warn("action-request-action failed",new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(entry),e);

return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"obj-request-failed","obj-request-failed",-1782005406),new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"ex-oid","ex-oid",-650256737),(function (){var G__28788 = this$;
var G__28789 = e;
var G__28790 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null);
return (shadow.remote.runtime.obj_support.register.cljs$core$IFn$_invoke$arity$3 ? shadow.remote.runtime.obj_support.register.cljs$core$IFn$_invoke$arity$3(G__28788,G__28789,G__28790) : shadow.remote.runtime.obj_support.register.call(null,G__28788,G__28789,G__28790));
})()], null));
}}
}
});
shadow.remote.runtime.obj_support.obj_forget = (function shadow$remote$runtime$obj_support$obj_forget(p__28848,p__28849){
var map__28853 = p__28848;
var map__28853__$1 = cljs.core.__destructure_map(map__28853);
var svc = map__28853__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28853__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__28855 = p__28849;
var map__28855__$1 = cljs.core.__destructure_map(map__28855);
var msg = map__28855__$1;
var oid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28855__$1,new cljs.core.Keyword(null,"oid","oid",-768692334));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([oid], 0));
});
shadow.remote.runtime.obj_support.obj_forget_all = (function shadow$remote$runtime$obj_support$obj_forget_all(p__28884,msg){
var map__28886 = p__28884;
var map__28886__$1 = cljs.core.__destructure_map(map__28886);
var svc = map__28886__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28886__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.PersistentArrayMap.EMPTY);
});
shadow.remote.runtime.obj_support.basic_gc_BANG_ = (function shadow$remote$runtime$obj_support$basic_gc_BANG_(state){
var objs_to_drop = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((100),cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"access-at","access-at",-1487162729),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(state))))));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,oid){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.dissoc,oid);
}),state,objs_to_drop);
});
shadow.remote.runtime.obj_support.add_handler = (function shadow$remote$runtime$obj_support$add_handler(p__28891,handler_id,p__28892){
var map__28894 = p__28891;
var map__28894__$1 = cljs.core.__destructure_map(map__28894);
var this$ = map__28894__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28894__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__28896 = p__28892;
var map__28896__$1 = cljs.core.__destructure_map(map__28896);
var handler_config = map__28896__$1;
var inspect_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28896__$1,new cljs.core.Keyword(null,"inspect-fn","inspect-fn",1796793813));
var request_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28896__$1,new cljs.core.Keyword(null,"request-fn","request-fn",-589284051));
if(cljs.core.map_QMARK_(handler_config)){
} else {
throw (new Error("Assert failed: (map? handler-config)"));
}

if(cljs.core.fn_QMARK_(inspect_fn)){
} else {
throw (new Error("Assert failed: (fn? inspect-fn)"));
}

if(cljs.core.fn_QMARK_(request_fn)){
} else {
throw (new Error("Assert failed: (fn? request-fn)"));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handler_id], null),handler_config);

return this$;
});
shadow.remote.runtime.obj_support.start = (function shadow$remote$runtime$obj_support$start(runtime){
var state_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"id-seq-ref","id-seq-ref",-98357047),(0)], null));
var svc = shadow.remote.runtime.obj_support.add_handler(shadow.remote.runtime.obj_support.add_handler(shadow.remote.runtime.obj_support.add_handler(shadow.remote.runtime.obj_support.add_handler(shadow.remote.runtime.obj_support.add_handler(shadow.remote.runtime.obj_support.add_handler(shadow.remote.runtime.obj_support.add_handler(shadow.remote.runtime.obj_support.add_handler(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952),state_ref], null),new cljs.core.Keyword(null,"get-value","get-value",2108514284),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-fn","inspect-fn",1796793813),(function (summary,p__28916){
var map__28917 = p__28916;
var map__28917__$1 = cljs.core.__destructure_map(map__28917);
var entry = map__28917__$1;
var obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28917__$1,new cljs.core.Keyword(null,"obj","obj",981763962));
if((!(shadow.remote.runtime.obj_support.simple_value_QMARK_(obj)))){
return summary;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(summary,new cljs.core.Keyword(null,"supports","supports",1501242067),cljs.core.conj,new cljs.core.Keyword(null,"get-value","get-value",2108514284));
}
}),new cljs.core.Keyword(null,"request-fn","request-fn",-589284051),(function (p__28920,msg){
var map__28921 = p__28920;
var map__28921__$1 = cljs.core.__destructure_map(map__28921);
var obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28921__$1,new cljs.core.Keyword(null,"obj","obj",981763962));
return obj;
})], null)),new cljs.core.Keyword(null,"str","str",1089608819),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-fn","inspect-fn",1796793813),(function (summary,entry){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(summary,new cljs.core.Keyword(null,"supports","supports",1501242067),cljs.core.conj,new cljs.core.Keyword(null,"str","str",1089608819));
}),new cljs.core.Keyword(null,"request-fn","request-fn",-589284051),shadow.remote.runtime.obj_support.request_str], null)),new cljs.core.Keyword(null,"ex-str","ex-str",971148789),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-fn","inspect-fn",1796793813),(function (summary,p__28926){
var map__28928 = p__28926;
var map__28928__$1 = cljs.core.__destructure_map(map__28928);
var entry = map__28928__$1;
var obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28928__$1,new cljs.core.Keyword(null,"obj","obj",981763962));
if(shadow.remote.runtime.obj_support.exception_QMARK_(obj)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(summary,new cljs.core.Keyword(null,"supports","supports",1501242067),cljs.core.conj,new cljs.core.Keyword(null,"ex-str","ex-str",971148789));
} else {
return summary;
}
}),new cljs.core.Keyword(null,"request-fn","request-fn",-589284051),shadow.remote.runtime.obj_support.request_edn_limit], null)),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-fn","inspect-fn",1796793813),(function (summary,entry){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(summary,new cljs.core.Keyword(null,"supports","supports",1501242067),cljs.core.conj,new cljs.core.Keyword(null,"edn","edn",1317840885));
}),new cljs.core.Keyword(null,"request-fn","request-fn",-589284051),shadow.remote.runtime.obj_support.request_edn], null)),new cljs.core.Keyword(null,"edn-limit","edn-limit",1353115803),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-fn","inspect-fn",1796793813),(function (summary,entry){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(summary,new cljs.core.Keyword(null,"supports","supports",1501242067),cljs.core.conj,new cljs.core.Keyword(null,"edn-limit","edn-limit",1353115803));
}),new cljs.core.Keyword(null,"request-fn","request-fn",-589284051),shadow.remote.runtime.obj_support.request_edn_limit], null)),new cljs.core.Keyword(null,"pprint","pprint",1220198395),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-fn","inspect-fn",1796793813),(function (summary,p__28931){
var map__28932 = p__28931;
var map__28932__$1 = cljs.core.__destructure_map(map__28932);
var entry = map__28932__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28932__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(((cljs.core.coll_QMARK_(data)) || (cljs.core.seq_QMARK_(data)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(summary,new cljs.core.Keyword(null,"supports","supports",1501242067),cljs.core.conj,new cljs.core.Keyword(null,"pprint","pprint",1220198395));
} else {
return summary;
}
}),new cljs.core.Keyword(null,"request-fn","request-fn",-589284051),shadow.remote.runtime.obj_support.request_pprint], null)),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-fn","inspect-fn",1796793813),(function (summary,p__28936){
var map__28937 = p__28936;
var map__28937__$1 = cljs.core.__destructure_map(map__28937);
var entry = map__28937__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28937__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(((((cljs.core.map_QMARK_(data)) || (((cljs.core.vector_QMARK_(data)) || (((cljs.core.set_QMARK_(data)) || (cljs.core.list_QMARK_(data)))))))) && (cljs.core.seq(data)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(summary,new cljs.core.Keyword(null,"supports","supports",1501242067),cljs.core.conj,new cljs.core.Keyword(null,"nav","nav",719540477));
} else {
return summary;
}
}),new cljs.core.Keyword(null,"request-fn","request-fn",-589284051),(function (p1__28901_SHARP_,p2__28902_SHARP_){
return shadow.remote.runtime.obj_support.request_nav(p1__28901_SHARP_,p2__28902_SHARP_,state_ref);
})], null)),new cljs.core.Keyword(null,"fragment","fragment",826775688),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-fn","inspect-fn",1796793813),(function (summary,p__28941){
var map__28942 = p__28941;
var map__28942__$1 = cljs.core.__destructure_map(map__28942);
var entry = map__28942__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28942__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(((((cljs.core.map_QMARK_(data)) || (((cljs.core.vector_QMARK_(data)) || (((cljs.core.set_QMARK_(data)) || (cljs.core.list_QMARK_(data)))))))) && (cljs.core.seq(data)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(summary,new cljs.core.Keyword(null,"supports","supports",1501242067),cljs.core.conj,new cljs.core.Keyword(null,"fragment","fragment",826775688));
} else {
return summary;
}
}),new cljs.core.Keyword(null,"request-fn","request-fn",-589284051),(function (p1__28906_SHARP_,p2__28907_SHARP_){
return shadow.remote.runtime.obj_support.request_fragment(p1__28906_SHARP_,p2__28907_SHARP_,state_ref);
})], null));
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.obj-support","ext","shadow.remote.runtime.obj-support/ext",-1896569346),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"obj-describe","obj-describe",-34922904),(function (p1__28908_SHARP_){
return shadow.remote.runtime.obj_support.obj_describe(svc,p1__28908_SHARP_);
}),new cljs.core.Keyword(null,"obj-request","obj-request",-1709325811),(function (p1__28909_SHARP_){
return shadow.remote.runtime.obj_support.obj_request(svc,p1__28909_SHARP_);
}),new cljs.core.Keyword(null,"obj-forget","obj-forget",2003566115),(function (p1__28910_SHARP_){
return shadow.remote.runtime.obj_support.obj_forget(svc,p1__28910_SHARP_);
}),new cljs.core.Keyword(null,"obj-forget-all","obj-forget-all",1418682131),(function (p1__28911_SHARP_){
return shadow.remote.runtime.obj_support.obj_forget_all(svc,p1__28911_SHARP_);
})], null),new cljs.core.Keyword(null,"on-idle","on-idle",2044706602),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_ref,shadow.remote.runtime.obj_support.basic_gc_BANG_);
})], null));

return svc;
});
shadow.remote.runtime.obj_support.get_tap_history = (function shadow$remote$runtime$obj_support$get_tap_history(p__28951,num){
var map__28952 = p__28951;
var map__28952__$1 = cljs.core.__destructure_map(map__28952);
var svc = map__28952__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28952__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"added-at","added-at",-352499434),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28950_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__28950_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
});
shadow.remote.runtime.obj_support.register = (function shadow$remote$runtime$obj_support$register(p__28959,obj,obj_info){
var map__28961 = p__28959;
var map__28961__$1 = cljs.core.__destructure_map(map__28961);
var svc = map__28961__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28961__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var oid = shadow.remote.runtime.obj_support.next_oid();
if((!(((cljs.core.vector_QMARK_(obj)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("shadow.remote","wrap","shadow.remote/wrap",996267199),cljs.core.first(obj))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(obj),(3))))))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,shadow.remote.runtime.obj_support.register_STAR_,oid,obj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj_info], 0));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,shadow.remote.runtime.obj_support.register_STAR_,oid,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(obj,(1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj_info,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(obj,(2))], 0))], 0));
}

return oid;
});
shadow.remote.runtime.obj_support.get_ref = (function shadow$remote$runtime$obj_support$get_ref(p__28965,obj_id){
var map__28967 = p__28965;
var map__28967__$1 = cljs.core.__destructure_map(map__28967);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28967__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),obj_id], null));
});
shadow.remote.runtime.obj_support.stop = (function shadow$remote$runtime$obj_support$stop(p__28969){
var map__28971 = p__28969;
var map__28971__$1 = cljs.core.__destructure_map(map__28971);
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28971__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.obj-support","ext","shadow.remote.runtime.obj-support/ext",-1896569346));
});

//# sourceMappingURL=shadow.remote.runtime.obj_support.js.map
