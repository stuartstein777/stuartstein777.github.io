goog.provide('rewrite_clj.node.quote');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.quote.QuoteNode = (function (tag,prefix,sym,children,__meta,__extmap,__hash){
this.tag = tag;
this.prefix = prefix;
this.sym = sym;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.quote.QuoteNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k21078,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__21089 = k21078;
var G__21089__$1 = (((G__21089 instanceof cljs.core.Keyword))?G__21089.fqn:null);
switch (G__21089__$1) {
case "tag":
return self__.tag;

break;
case "prefix":
return self__.prefix;

break;
case "sym":
return self__.sym;

break;
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21078,else__5346__auto__);

}
}));

(rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__21094){
var vec__21095 = p__21094;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21095,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21095,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#rewrite-clj.node.quote.QuoteNode{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21077){
var self__ = this;
var G__21077__$1 = this;
return (new cljs.core.RecordIter((0),G__21077__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new rewrite_clj.node.quote.QuoteNode(self__.tag,self__.prefix,self__.sym,self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1712251858 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21079,other21080){
var self__ = this;
var this21079__$1 = this;
return (((!((other21080 == null)))) && ((((this21079__$1.constructor === other21080.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21079__$1.tag,other21080.tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21079__$1.prefix,other21080.prefix)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21079__$1.sym,other21080.sym)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21079__$1.children,other21080.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21079__$1.__extmap,other21080.__extmap)))))))))))));
}));

(rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.tag;
}));

(rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.List(null,self__.sym,(new cljs.core.List(null,cljs.core.first(rewrite_clj.node.protocols.sexprs(self__.children)),null,(1),null)),(2),null));
}));

(rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.count(self__.prefix) + rewrite_clj.node.protocols.sum_lengths(self__.children));
}));

(rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.protocols.concat_strings(self__.children))].join('');
}));

(rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new rewrite_clj.node.quote.QuoteNode(self__.tag,self__.prefix,self__.sym,self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
rewrite_clj.node.protocols.assert_single_sexpr(children_SINGLEQUOTE_);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
}));

(rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k21078){
var self__ = this;
var this__5350__auto____$1 = this;
var G__21136 = k21078;
var G__21136__$1 = (((G__21136 instanceof cljs.core.Keyword))?G__21136.fqn:null);
switch (G__21136__$1) {
case "tag":
case "prefix":
case "sym":
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k21078);

}
}));

(rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__21077){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__21137 = cljs.core.keyword_identical_QMARK_;
var expr__21138 = k__5352__auto__;
if(cljs.core.truth_((pred__21137.cljs$core$IFn$_invoke$arity$2 ? pred__21137.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__21138) : pred__21137.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__21138)))){
return (new rewrite_clj.node.quote.QuoteNode(G__21077,self__.prefix,self__.sym,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21137.cljs$core$IFn$_invoke$arity$2 ? pred__21137.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__21138) : pred__21137.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__21138)))){
return (new rewrite_clj.node.quote.QuoteNode(self__.tag,G__21077,self__.sym,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21137.cljs$core$IFn$_invoke$arity$2 ? pred__21137.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__21138) : pred__21137.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__21138)))){
return (new rewrite_clj.node.quote.QuoteNode(self__.tag,self__.prefix,G__21077,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21137.cljs$core$IFn$_invoke$arity$2 ? pred__21137.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__21138) : pred__21137.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__21138)))){
return (new rewrite_clj.node.quote.QuoteNode(self__.tag,self__.prefix,self__.sym,G__21077,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.quote.QuoteNode(self__.tag,self__.prefix,self__.sym,self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__21077),null));
}
}
}
}
}));

(rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__21077){
var self__ = this;
var this__5342__auto____$1 = this;
return (new rewrite_clj.node.quote.QuoteNode(self__.tag,self__.prefix,self__.sym,self__.children,G__21077,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.quote.QuoteNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(rewrite_clj.node.quote.QuoteNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"sym","sym",195671222,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_clj.node.quote.QuoteNode.cljs$lang$type = true);

(rewrite_clj.node.quote.QuoteNode.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.quote/QuoteNode",null,(1),null));
}));

(rewrite_clj.node.quote.QuoteNode.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"rewrite-clj.node.quote/QuoteNode");
}));

/**
 * Positional factory function for rewrite-clj.node.quote/QuoteNode.
 */
rewrite_clj.node.quote.__GT_QuoteNode = (function rewrite_clj$node$quote$__GT_QuoteNode(tag,prefix,sym,children){
return (new rewrite_clj.node.quote.QuoteNode(tag,prefix,sym,children,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.quote/QuoteNode, taking a map of keywords to field values.
 */
rewrite_clj.node.quote.map__GT_QuoteNode = (function rewrite_clj$node$quote$map__GT_QuoteNode(G__21084){
var extmap__5385__auto__ = (function (){var G__21162 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21084,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"children","children",-940561982)], 0));
if(cljs.core.record_QMARK_(G__21084)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__21162);
} else {
return G__21162;
}
})();
return (new rewrite_clj.node.quote.QuoteNode(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__21084),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__21084),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__21084),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__21084),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

rewrite_clj.node.quote.__GT_node = (function rewrite_clj$node$quote$__GT_node(t,prefix,sym,children){
rewrite_clj.node.protocols.assert_single_sexpr(children);

return rewrite_clj.node.quote.__GT_QuoteNode(t,prefix,sym,children);
});
/**
 * Create node representing a quoted form.
 * Takes either a seq of nodes or a single one.
 */
rewrite_clj.node.quote.quote_node = (function rewrite_clj$node$quote$quote_node(children){
while(true){
if(cljs.core.sequential_QMARK_(children)){
return rewrite_clj.node.quote.__GT_node(new cljs.core.Keyword(null,"quote","quote",-262615245),"'",new cljs.core.Symbol(null,"quote","quote",1377916282,null),children);
} else {
var G__21253 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__21253;
continue;
}
break;
}
});
/**
 * Create node representing a syntax-quoted form.
 * Takes either a seq of nodes or a single one.
 */
rewrite_clj.node.quote.syntax_quote_node = (function rewrite_clj$node$quote$syntax_quote_node(children){
while(true){
if(cljs.core.sequential_QMARK_(children)){
return rewrite_clj.node.quote.__GT_node(new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),"`",new cljs.core.Symbol(null,"quote","quote",1377916282,null),children);
} else {
var G__21255 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__21255;
continue;
}
break;
}
});
/**
 * Create node representing an unquoted form. (`~...`)
 * Takes either a seq of nodes or a single one.
 */
rewrite_clj.node.quote.unquote_node = (function rewrite_clj$node$quote$unquote_node(children){
while(true){
if(cljs.core.sequential_QMARK_(children)){
return rewrite_clj.node.quote.__GT_node(new cljs.core.Keyword(null,"unquote","unquote",1649741032),"~",new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),children);
} else {
var G__21307 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__21307;
continue;
}
break;
}
});
/**
 * Create node representing an unquote-spliced form. (`~@...`)
 * Takes either a seq of nodes or a single one.
 */
rewrite_clj.node.quote.unquote_splicing_node = (function rewrite_clj$node$quote$unquote_splicing_node(children){
while(true){
if(cljs.core.sequential_QMARK_(children)){
return rewrite_clj.node.quote.__GT_node(new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),"~@",new cljs.core.Symbol(null,"unquote-splicing","unquote-splicing",-1359168213,null),children);
} else {
var G__21308 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null);
children = G__21308;
continue;
}
break;
}
});

//# sourceMappingURL=rewrite_clj.node.quote.js.map
