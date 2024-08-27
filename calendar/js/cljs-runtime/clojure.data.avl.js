goog.provide('clojure.data.avl');
goog.require('cljs.core');

/**
* @constructor
*/
clojure.data.avl.AVLNode = (function (edit,key,val,left,right,height,rank){
this.edit = edit;
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.height = height;
this.rank = rank;
});
(clojure.data.avl.AVLNode.prototype.setHeight = (function (h){
var self__ = this;
var this$ = this;
(self__.height = h);

return this$;
}));

(clojure.data.avl.AVLNode.prototype.setKey = (function (k){
var self__ = this;
var this$ = this;
(self__.key = k);

return this$;
}));

(clojure.data.avl.AVLNode.prototype.getRank = (function (){
var self__ = this;
var this$ = this;
return self__.rank;
}));

(clojure.data.avl.AVLNode.prototype.setLeft = (function (l){
var self__ = this;
var this$ = this;
(self__.left = l);

return this$;
}));

(clojure.data.avl.AVLNode.prototype.getKey = (function (){
var self__ = this;
var this$ = this;
return self__.key;
}));

(clojure.data.avl.AVLNode.prototype.setVal = (function (v){
var self__ = this;
var this$ = this;
(self__.val = v);

return this$;
}));

(clojure.data.avl.AVLNode.prototype.getVal = (function (){
var self__ = this;
var this$ = this;
return self__.val;
}));

(clojure.data.avl.AVLNode.prototype.setRight = (function (r){
var self__ = this;
var this$ = this;
(self__.right = r);

return this$;
}));

(clojure.data.avl.AVLNode.prototype.getHeight = (function (){
var self__ = this;
var this$ = this;
return self__.height;
}));

(clojure.data.avl.AVLNode.prototype.getRight = (function (){
var self__ = this;
var this$ = this;
return self__.right;
}));

(clojure.data.avl.AVLNode.prototype.setRank = (function (r){
var self__ = this;
var this$ = this;
(self__.rank = r);

return this$;
}));

(clojure.data.avl.AVLNode.prototype.getLeft = (function (){
var self__ = this;
var this$ = this;
return self__.left;
}));

(clojure.data.avl.AVLNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"edit","edit",-1302639,null),cljs.core.with_meta(new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"rank","rank",-66196975,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(clojure.data.avl.AVLNode.cljs$lang$type = true);

(clojure.data.avl.AVLNode.cljs$lang$ctorStr = "clojure.data.avl/AVLNode");

(clojure.data.avl.AVLNode.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"clojure.data.avl/AVLNode");
}));

/**
 * Positional factory function for clojure.data.avl/AVLNode.
 */
clojure.data.avl.__GT_AVLNode = (function clojure$data$avl$__GT_AVLNode(edit,key,val,left,right,height,rank){
return (new clojure.data.avl.AVLNode(edit,key,val,left,right,height,rank));
});

clojure.data.avl.height = (function clojure$data$avl$height(node){
if((node == null)){
return (0);
} else {
return node.height;
}
});
clojure.data.avl.ensure_editable = (function clojure$data$avl$ensure_editable(var_args){
var G__29428 = arguments.length;
switch (G__29428) {
case 1:
return clojure.data.avl.ensure_editable.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.data.avl.ensure_editable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.data.avl.ensure_editable.cljs$core$IFn$_invoke$arity$1 = (function (edit){
if(cljs.core.not(edit)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Transient used after persistent! call",cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
}));

(clojure.data.avl.ensure_editable.cljs$core$IFn$_invoke$arity$2 = (function (edit,node){
if((edit === node.edit)){
return node;
} else {
return (new clojure.data.avl.AVLNode(edit,node.getKey(),node.getVal(),node.getLeft(),node.getRight(),node.getHeight(),node.getRank()));
}
}));

(clojure.data.avl.ensure_editable.cljs$lang$maxFixedArity = 2);

clojure.data.avl.rotate_left = (function clojure$data$avl$rotate_left(node){
var l = node.getLeft();
var r = node.getRight();
var rl = r.getLeft();
var rr = r.getRight();
var lh = clojure.data.avl.height(l);
var rlh = clojure.data.avl.height(rl);
var rrh = clojure.data.avl.height(rr);
var rnk = node.getRank();
var rnkr = r.getRank();
return (new clojure.data.avl.AVLNode(null,r.getKey(),r.getVal(),(new clojure.data.avl.AVLNode(null,node.getKey(),node.getVal(),l,rl,((function (){var x__4214__auto__ = lh;
var y__4215__auto__ = rlh;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() + (1)),rnk)),rr,(function (){var x__4214__auto__ = (function (){var x__4214__auto__ = (lh + (2));
var y__4215__auto__ = (rlh + (2));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var y__4215__auto__ = (rrh + (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})(),((rnk + rnkr) + (1))));
});
clojure.data.avl.rotate_left_BANG_ = (function clojure$data$avl$rotate_left_BANG_(edit,node){
var node__$1 = clojure.data.avl.ensure_editable.cljs$core$IFn$_invoke$arity$2(edit,node);
var l = node__$1.getLeft();
var r = clojure.data.avl.ensure_editable.cljs$core$IFn$_invoke$arity$2(edit,node__$1.getRight());
var rl = r.getLeft();
var rr = r.getRight();
var lh = clojure.data.avl.height(l);
var rlh = clojure.data.avl.height(rl);
var rrh = clojure.data.avl.height(rr);
var rnk = node__$1.getRank();
var rnkr = r.getRank();
r.setLeft(node__$1);

r.setHeight((function (){var x__4214__auto__ = (function (){var x__4214__auto__ = (lh + (2));
var y__4215__auto__ = (rlh + (2));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var y__4215__auto__ = (rrh + (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})());

r.setRank(((rnk + rnkr) + (1)));

node__$1.setRight(rl);

node__$1.setHeight(((function (){var x__4214__auto__ = lh;
var y__4215__auto__ = rlh;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() + (1)));

return r;
});
clojure.data.avl.rotate_right = (function clojure$data$avl$rotate_right(node){
var r = node.getRight();
var l = node.getLeft();
var lr = l.getRight();
var ll = l.getLeft();
var rh = clojure.data.avl.height(r);
var lrh = clojure.data.avl.height(lr);
var llh = clojure.data.avl.height(ll);
var rnk = node.getRank();
var rnkl = l.getRank();
return (new clojure.data.avl.AVLNode(null,l.getKey(),l.getVal(),ll,(new clojure.data.avl.AVLNode(null,node.getKey(),node.getVal(),lr,r,((function (){var x__4214__auto__ = rh;
var y__4215__auto__ = lrh;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() + (1)),((rnk - rnkl) - (1)))),(function (){var x__4214__auto__ = (function (){var x__4214__auto__ = (rh + (2));
var y__4215__auto__ = (lrh + (2));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var y__4215__auto__ = (llh + (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})(),rnkl));
});
clojure.data.avl.rotate_right_BANG_ = (function clojure$data$avl$rotate_right_BANG_(edit,node){
var node__$1 = clojure.data.avl.ensure_editable.cljs$core$IFn$_invoke$arity$2(edit,node);
var r = node__$1.getRight();
var l = clojure.data.avl.ensure_editable.cljs$core$IFn$_invoke$arity$2(edit,node__$1.getLeft());
var lr = l.getRight();
var ll = l.getLeft();
var rh = clojure.data.avl.height(r);
var lrh = clojure.data.avl.height(lr);
var llh = clojure.data.avl.height(ll);
var rnk = node__$1.getRank();
var rnkl = l.getRank();
l.setRight(node__$1);

l.setHeight((function (){var x__4214__auto__ = (function (){var x__4214__auto__ = (rh + (2));
var y__4215__auto__ = (lrh + (2));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var y__4215__auto__ = (llh + (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})());

node__$1.setLeft(lr);

node__$1.setHeight(((function (){var x__4214__auto__ = rh;
var y__4215__auto__ = lrh;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() + (1)));

node__$1.setRank(((rnk - rnkl) - (1)));

return l;
});
clojure.data.avl.lookup = (function clojure$data$avl$lookup(comp,node,k){
while(true){
if((node == null)){
return null;
} else {
var c = (function (){var G__29429 = k;
var G__29430 = node.getKey();
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__29429,G__29430) : comp.call(null,G__29429,G__29430));
})();
if((c === (0))){
return node;
} else {
if((c < (0))){
var G__29584 = comp;
var G__29585 = node.getLeft();
var G__29586 = k;
comp = G__29584;
node = G__29585;
k = G__29586;
continue;
} else {
var G__29587 = comp;
var G__29588 = node.getRight();
var G__29589 = k;
comp = G__29587;
node = G__29588;
k = G__29589;
continue;

}
}
}
break;
}
});
clojure.data.avl.lookup_nearest = (function clojure$data$avl$lookup_nearest(comp,node,test,k){
var below_QMARK_ = (((cljs.core._LT_ === test)) || ((cljs.core._LT__EQ_ === test)));
var equal_QMARK_ = (((cljs.core._LT__EQ_ === test)) || ((cljs.core._GT__EQ_ === test)));
var back_QMARK_ = ((below_QMARK_)?cljs.core.neg_QMARK_:cljs.core.pos_QMARK_);
var backward = ((below_QMARK_)?(function (p1__29431_SHARP_){
return p1__29431_SHARP_.getLeft();
}):(function (p1__29432_SHARP_){
return p1__29432_SHARP_.getRight();
}));
var forward = ((below_QMARK_)?(function (p1__29433_SHARP_){
return p1__29433_SHARP_.getRight();
}):(function (p1__29434_SHARP_){
return p1__29434_SHARP_.getLeft();
}));
var prev = null;
var node__$1 = node;
while(true){
if((node__$1 == null)){
return prev;
} else {
var c = (function (){var G__29437 = k;
var G__29438 = node__$1.getKey();
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__29437,G__29438) : comp.call(null,G__29437,G__29438));
})();
if((c === (0))){
if(equal_QMARK_){
return node__$1;
} else {
var G__29590 = prev;
var G__29591 = backward(node__$1);
prev = G__29590;
node__$1 = G__29591;
continue;
}
} else {
if(cljs.core.truth_((back_QMARK_.cljs$core$IFn$_invoke$arity$1 ? back_QMARK_.cljs$core$IFn$_invoke$arity$1(c) : back_QMARK_.call(null,c)))){
var G__29592 = prev;
var G__29593 = backward(node__$1);
prev = G__29592;
node__$1 = G__29593;
continue;
} else {
var G__29594 = node__$1;
var G__29595 = forward(node__$1);
prev = G__29594;
node__$1 = G__29595;
continue;

}
}
}
break;
}
});
clojure.data.avl.select = (function clojure$data$avl$select(node,rank){
while(true){
if((node == null)){
return null;
} else {
var node_rank = node.getRank();
if((node_rank === rank)){
return node;
} else {
if((node_rank < rank)){
var G__29596 = node.getRight();
var G__29597 = ((rank - node_rank) - (1));
node = G__29596;
rank = G__29597;
continue;
} else {
var G__29598 = node.getLeft();
var G__29599 = rank;
node = G__29598;
rank = G__29599;
continue;

}
}
}
break;
}
});
clojure.data.avl.rank = (function clojure$data$avl$rank(comp,node,k){
while(true){
if((node == null)){
return (-1);
} else {
var c = (function (){var G__29439 = k;
var G__29440 = node.getKey();
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__29439,G__29440) : comp.call(null,G__29439,G__29440));
})();
if((c === (0))){
return node.getRank();
} else {
if((c < (0))){
var G__29600 = comp;
var G__29601 = node.getLeft();
var G__29602 = k;
comp = G__29600;
node = G__29601;
k = G__29602;
continue;
} else {
var r = (function (){var G__29441 = comp;
var G__29442 = node.getRight();
var G__29443 = k;
return (clojure.data.avl.rank.cljs$core$IFn$_invoke$arity$3 ? clojure.data.avl.rank.cljs$core$IFn$_invoke$arity$3(G__29441,G__29442,G__29443) : clojure.data.avl.rank.call(null,G__29441,G__29442,G__29443));
})();
if(((-1) === r)){
return (-1);
} else {
return ((node.getRank() + r) + (1));
}

}
}
}
break;
}
});
clojure.data.avl.maybe_rebalance = (function clojure$data$avl$maybe_rebalance(node){
var l = node.getLeft();
var r = node.getRight();
var lh = clojure.data.avl.height(l);
var rh = clojure.data.avl.height(r);
var b = (lh - rh);
if((b < (-1))){
var rl = r.getLeft();
var rr = r.getRight();
var rlh = clojure.data.avl.height(rl);
var rrh = clojure.data.avl.height(rr);
if(((rlh - rrh) === (1))){
var new_right = clojure.data.avl.rotate_right(r);
return clojure.data.avl.rotate_left((new clojure.data.avl.AVLNode(null,node.getKey(),node.getVal(),node.getLeft(),new_right,((function (){var x__4214__auto__ = lh;
var y__4215__auto__ = clojure.data.avl.height(new_right);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() + (1)),node.getRank())));
} else {
return clojure.data.avl.rotate_left(node);
}
} else {
if((b > (1))){
var ll = l.getLeft();
var lr = l.getRight();
var llh = clojure.data.avl.height(ll);
var lrh = clojure.data.avl.height(lr);
if(((lrh - llh) === (1))){
var new_left = clojure.data.avl.rotate_left(l);
return clojure.data.avl.rotate_right((new clojure.data.avl.AVLNode(null,node.getKey(),node.getVal(),new_left,node.getRight(),((function (){var x__4214__auto__ = rh;
var y__4215__auto__ = clojure.data.avl.height(new_left);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() + (1)),node.getRank())));
} else {
return clojure.data.avl.rotate_right(node);
}
} else {
return node;

}
}
});
clojure.data.avl.maybe_rebalance_BANG_ = (function clojure$data$avl$maybe_rebalance_BANG_(edit,node){
var l = node.getLeft();
var r = node.getRight();
var lh = clojure.data.avl.height(l);
var rh = clojure.data.avl.height(r);
var b = (lh - rh);
if((b < (-1))){
var node__$1 = clojure.data.avl.ensure_editable.cljs$core$IFn$_invoke$arity$2(edit,node);
var rl = r.getLeft();
var rr = r.getRight();
var rlh = clojure.data.avl.height(rl);
var rrh = clojure.data.avl.height(rr);
if(((rlh - rrh) === (1))){
var new_right = clojure.data.avl.rotate_right_BANG_(edit,r);
node__$1.setRight(new_right);

node__$1.setHeight(((function (){var x__4214__auto__ = lh;
var y__4215__auto__ = clojure.data.avl.height(new_right);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() + (1)));

return clojure.data.avl.rotate_left_BANG_(edit,node__$1);
} else {
return clojure.data.avl.rotate_left_BANG_(edit,node__$1);
}
} else {
if((b > (1))){
var node__$1 = clojure.data.avl.ensure_editable.cljs$core$IFn$_invoke$arity$2(edit,node);
var ll = l.getLeft();
var lr = l.getRight();
var llh = clojure.data.avl.height(ll);
var lrh = clojure.data.avl.height(lr);
if(((lrh - llh) === (1))){
var new_left = clojure.data.avl.rotate_left_BANG_(edit,l);
node__$1.setLeft(new_left);

node__$1.setHeight(((function (){var x__4214__auto__ = rh;
var y__4215__auto__ = clojure.data.avl.height(new_left);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() + (1)));

return clojure.data.avl.rotate_right_BANG_(edit,node__$1);
} else {
return clojure.data.avl.rotate_right_BANG_(edit,node__$1);
}
} else {
return node;

}
}
});
clojure.data.avl.insert = (function clojure$data$avl$insert(comp,node,k,v,found_QMARK_){
if((node == null)){
return (new clojure.data.avl.AVLNode(null,k,v,null,null,(1),(0)));
} else {
var nk = node.getKey();
var c = (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(k,nk) : comp.call(null,k,nk));
if((c === (0))){
(found_QMARK_.val = true);

return (new clojure.data.avl.AVLNode(null,k,v,node.getLeft(),node.getRight(),node.getHeight(),node.getRank()));
} else {
if((c < (0))){
var new_child = (function (){var G__29444 = comp;
var G__29445 = node.getLeft();
var G__29446 = k;
var G__29447 = v;
var G__29448 = found_QMARK_;
return (clojure.data.avl.insert.cljs$core$IFn$_invoke$arity$5 ? clojure.data.avl.insert.cljs$core$IFn$_invoke$arity$5(G__29444,G__29445,G__29446,G__29447,G__29448) : clojure.data.avl.insert.call(null,G__29444,G__29445,G__29446,G__29447,G__29448));
})();
return clojure.data.avl.maybe_rebalance((new clojure.data.avl.AVLNode(null,nk,node.getVal(),new_child,node.getRight(),((function (){var x__4214__auto__ = new_child.getHeight();
var y__4215__auto__ = clojure.data.avl.height(node.getRight());
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() + (1)),(cljs.core.truth_(found_QMARK_.val)?node.getRank():(node.getRank() + (1))))));
} else {
var new_child = (function (){var G__29449 = comp;
var G__29450 = node.getRight();
var G__29451 = k;
var G__29452 = v;
var G__29453 = found_QMARK_;
return (clojure.data.avl.insert.cljs$core$IFn$_invoke$arity$5 ? clojure.data.avl.insert.cljs$core$IFn$_invoke$arity$5(G__29449,G__29450,G__29451,G__29452,G__29453) : clojure.data.avl.insert.call(null,G__29449,G__29450,G__29451,G__29452,G__29453));
})();
return clojure.data.avl.maybe_rebalance((new clojure.data.avl.AVLNode(null,nk,node.getVal(),node.getLeft(),new_child,((function (){var x__4214__auto__ = new_child.getHeight();
var y__4215__auto__ = clojure.data.avl.height(node.getLeft());
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() + (1)),node.getRank())));

}
}
}
});
clojure.data.avl.insert_BANG_ = (function clojure$data$avl$insert_BANG_(edit,comp,node,k,v,found_QMARK_){
if((node == null)){
return (new clojure.data.avl.AVLNode(edit,k,v,null,null,(1),(0)));
} else {
var node__$1 = clojure.data.avl.ensure_editable.cljs$core$IFn$_invoke$arity$2(edit,node);
var nk = node__$1.getKey();
var c = (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(k,nk) : comp.call(null,k,nk));
if((c === (0))){
(found_QMARK_.val = true);

node__$1.setKey(k);

node__$1.setVal(v);

return node__$1;
} else {
if((c < (0))){
var new_child = (function (){var G__29454 = edit;
var G__29455 = comp;
var G__29456 = node__$1.getLeft();
var G__29457 = k;
var G__29458 = v;
var G__29459 = found_QMARK_;
return (clojure.data.avl.insert_BANG_.cljs$core$IFn$_invoke$arity$6 ? clojure.data.avl.insert_BANG_.cljs$core$IFn$_invoke$arity$6(G__29454,G__29455,G__29456,G__29457,G__29458,G__29459) : clojure.data.avl.insert_BANG_.call(null,G__29454,G__29455,G__29456,G__29457,G__29458,G__29459));
})();
node__$1.setLeft(new_child);

node__$1.setHeight(((function (){var x__4214__auto__ = new_child.getHeight();
var y__4215__auto__ = clojure.data.avl.height(node__$1.getRight());
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() + (1)));

if(cljs.core.not(found_QMARK_.val)){
node__$1.setRank((node__$1.getRank() + (1)));
} else {
}

return clojure.data.avl.maybe_rebalance_BANG_(edit,node__$1);
} else {
var new_child = (function (){var G__29460 = edit;
var G__29461 = comp;
var G__29462 = node__$1.getRight();
var G__29463 = k;
var G__29464 = v;
var G__29465 = found_QMARK_;
return (clojure.data.avl.insert_BANG_.cljs$core$IFn$_invoke$arity$6 ? clojure.data.avl.insert_BANG_.cljs$core$IFn$_invoke$arity$6(G__29460,G__29461,G__29462,G__29463,G__29464,G__29465) : clojure.data.avl.insert_BANG_.call(null,G__29460,G__29461,G__29462,G__29463,G__29464,G__29465));
})();
node__$1.setRight(new_child);

node__$1.setHeight(((function (){var x__4214__auto__ = new_child.getHeight();
var y__4215__auto__ = clojure.data.avl.height(node__$1.getLeft());
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() + (1)));

return clojure.data.avl.maybe_rebalance_BANG_(edit,node__$1);

}
}
}
});
clojure.data.avl.get_rightmost = (function clojure$data$avl$get_rightmost(node){
while(true){
var temp__5733__auto__ = node.getRight();
if(cljs.core.truth_(temp__5733__auto__)){
var r = temp__5733__auto__;
var G__29603 = r;
node = G__29603;
continue;
} else {
return node;
}
break;
}
});
clojure.data.avl.get_leftmost = (function clojure$data$avl$get_leftmost(node){
while(true){
var temp__5733__auto__ = node.getLeft();
if(cljs.core.truth_(temp__5733__auto__)){
var l = temp__5733__auto__;
var G__29604 = l;
node = G__29604;
continue;
} else {
return node;
}
break;
}
});
clojure.data.avl.delete_rightmost = (function clojure$data$avl$delete_rightmost(node){
var temp__5733__auto__ = node.getRight();
if(cljs.core.truth_(temp__5733__auto__)){
var r = temp__5733__auto__;
var l = node.getLeft();
var new_right = (clojure.data.avl.delete_rightmost.cljs$core$IFn$_invoke$arity$1 ? clojure.data.avl.delete_rightmost.cljs$core$IFn$_invoke$arity$1(r) : clojure.data.avl.delete_rightmost.call(null,r));
return clojure.data.avl.maybe_rebalance((new clojure.data.avl.AVLNode(null,node.getKey(),node.getVal(),l,new_right,((function (){var x__4214__auto__ = clojure.data.avl.height(l);
var y__4215__auto__ = clojure.data.avl.height(new_right);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() + (1)),node.getRank())));
} else {
return node.getLeft();
}
});
clojure.data.avl.delete_rightmost_BANG_ = (function clojure$data$avl$delete_rightmost_BANG_(edit,node){
if((!((node == null)))){
var node__$1 = clojure.data.avl.ensure_editable.cljs$core$IFn$_invoke$arity$2(edit,node);
var r = node__$1.getRight();
if((r == null)){
var temp__5733__auto__ = node__$1.getLeft();
if(cljs.core.truth_(temp__5733__auto__)){
var l = temp__5733__auto__;
return clojure.data.avl.ensure_editable.cljs$core$IFn$_invoke$arity$2(edit,l);
} else {
return null;
}
} else {
if((r.getRight() == null)){
node__$1.setRight(r.getLeft());

node__$1.setHeight(((function (){var x__4214__auto__ = clojure.data.avl.height(node__$1.getLeft());
var y__4215__auto__ = clojure.data.avl.height(r.getLeft());
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() + (1)));

return clojure.data.avl.maybe_rebalance_BANG_(edit,node__$1);
} else {
var new_right = (clojure.data.avl.delete_rightmost_BANG_.cljs$core$IFn$_invoke$arity$2 ? clojure.data.avl.delete_rightmost_BANG_.cljs$core$IFn$_invoke$arity$2(edit,r) : clojure.data.avl.delete_rightmost_BANG_.call(null,edit,r));
node__$1.setRight(new_right);

node__$1.setHeight(((function (){var x__4214__auto__ = clojure.data.avl.height(node__$1.getLeft());
var y__4215__auto__ = clojure.data.avl.height(new_right);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() + (1)));

return clojure.data.avl.maybe_rebalance_BANG_(edit,node__$1);

}
}
} else {
return null;
}
});
clojure.data.avl.delete$ = (function clojure$data$avl$delete(comp,node,k,found_QMARK_){
if((node == null)){
return null;
} else {
var nk = node.getKey();
var c = (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(k,nk) : comp.call(null,k,nk));
if((c === (0))){
var l = node.getLeft();
var r = node.getRight();
(found_QMARK_.val = true);

if(cljs.core.truth_((function (){var and__4115__auto__ = l;
if(cljs.core.truth_(and__4115__auto__)){
return r;
} else {
return and__4115__auto__;
}
})())){
var p = clojure.data.avl.get_rightmost(l);
var l_SINGLEQUOTE_ = clojure.data.avl.delete_rightmost(l);
return clojure.data.avl.maybe_rebalance((new clojure.data.avl.AVLNode(null,p.getKey(),p.getVal(),l_SINGLEQUOTE_,r,((function (){var x__4214__auto__ = clojure.data.avl.height(l_SINGLEQUOTE_);
var y__4215__auto__ = clojure.data.avl.height(r);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() + (1)),(node.getRank() - (1)))));
} else {
var or__4126__auto__ = l;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return r;
}
}
} else {
if((c < (0))){
var new_child = (function (){var G__29466 = comp;
var G__29467 = node.getLeft();
var G__29468 = k;
var G__29469 = found_QMARK_;
return (clojure.data.avl.delete$.cljs$core$IFn$_invoke$arity$4 ? clojure.data.avl.delete$.cljs$core$IFn$_invoke$arity$4(G__29466,G__29467,G__29468,G__29469) : clojure.data.avl.delete$.call(null,G__29466,G__29467,G__29468,G__29469));
})();
if((new_child === node.getLeft())){
return node;
} else {
return clojure.data.avl.maybe_rebalance((new clojure.data.avl.AVLNode(null,nk,node.getVal(),new_child,node.getRight(),((function (){var x__4214__auto__ = clojure.data.avl.height(new_child);
var y__4215__auto__ = clojure.data.avl.height(node.getRight());
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() + (1)),(cljs.core.truth_(found_QMARK_.val)?(node.getRank() - (1)):node.getRank()))));
}
} else {
var new_child = (function (){var G__29470 = comp;
var G__29471 = node.getRight();
var G__29472 = k;
var G__29473 = found_QMARK_;
return (clojure.data.avl.delete$.cljs$core$IFn$_invoke$arity$4 ? clojure.data.avl.delete$.cljs$core$IFn$_invoke$arity$4(G__29470,G__29471,G__29472,G__29473) : clojure.data.avl.delete$.call(null,G__29470,G__29471,G__29472,G__29473));
})();
if((new_child === node.getRight())){
return node;
} else {
return clojure.data.avl.maybe_rebalance((new clojure.data.avl.AVLNode(null,nk,node.getVal(),node.getLeft(),new_child,((function (){var x__4214__auto__ = clojure.data.avl.height(new_child);
var y__4215__auto__ = clojure.data.avl.height(node.getLeft());
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() + (1)),node.getRank())));
}

}
}
}
});
clojure.data.avl.delete_BANG_ = (function clojure$data$avl$delete_BANG_(edit,comp,node,k,found_QMARK_){
if((node == null)){
return null;
} else {
var nk = node.getKey();
var c = (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(k,nk) : comp.call(null,k,nk));
if((c === (0))){
var l = node.getLeft();
var r = node.getRight();
(found_QMARK_.val = true);

if(cljs.core.truth_((function (){var and__4115__auto__ = l;
if(cljs.core.truth_(and__4115__auto__)){
return r;
} else {
return and__4115__auto__;
}
})())){
var node__$1 = clojure.data.avl.ensure_editable.cljs$core$IFn$_invoke$arity$2(edit,node);
var p = clojure.data.avl.get_rightmost(l);
var l_SINGLEQUOTE_ = clojure.data.avl.delete_rightmost_BANG_(edit,l);
node__$1.setKey(p.getKey());

node__$1.setVal(p.getVal());

node__$1.setLeft(l_SINGLEQUOTE_);

node__$1.setHeight(((function (){var x__4214__auto__ = clojure.data.avl.height(l_SINGLEQUOTE_);
var y__4215__auto__ = clojure.data.avl.height(r);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() + (1)));

node__$1.setRank((node__$1.getRank() - (1)));

return clojure.data.avl.maybe_rebalance_BANG_(edit,node__$1);
} else {
if(cljs.core.truth_(l)){
return l;
} else {
if(cljs.core.truth_(r)){
return r;
} else {
return null;

}
}
}
} else {
if((c < (0))){
var new_child = (function (){var G__29474 = edit;
var G__29475 = comp;
var G__29476 = node.getLeft();
var G__29477 = k;
var G__29478 = found_QMARK_;
return (clojure.data.avl.delete_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.data.avl.delete_BANG_.cljs$core$IFn$_invoke$arity$5(G__29474,G__29475,G__29476,G__29477,G__29478) : clojure.data.avl.delete_BANG_.call(null,G__29474,G__29475,G__29476,G__29477,G__29478));
})();
if(cljs.core.truth_(found_QMARK_.val)){
var node__$1 = clojure.data.avl.ensure_editable.cljs$core$IFn$_invoke$arity$2(edit,node);
node__$1.setLeft(new_child);

node__$1.setHeight(((function (){var x__4214__auto__ = clojure.data.avl.height(new_child);
var y__4215__auto__ = clojure.data.avl.height(node__$1.getRight());
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() + (1)));

node__$1.setRank((node__$1.getRank() - (1)));

return clojure.data.avl.maybe_rebalance_BANG_(edit,node__$1);
} else {
return node;
}
} else {
var new_child = (function (){var G__29479 = edit;
var G__29480 = comp;
var G__29481 = node.getRight();
var G__29482 = k;
var G__29483 = found_QMARK_;
return (clojure.data.avl.delete_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.data.avl.delete_BANG_.cljs$core$IFn$_invoke$arity$5(G__29479,G__29480,G__29481,G__29482,G__29483) : clojure.data.avl.delete_BANG_.call(null,G__29479,G__29480,G__29481,G__29482,G__29483));
})();
if(cljs.core.truth_(found_QMARK_.val)){
var node__$1 = clojure.data.avl.ensure_editable.cljs$core$IFn$_invoke$arity$2(edit,node);
node__$1.setRight(new_child);

node__$1.setHeight(((function (){var x__4214__auto__ = clojure.data.avl.height(new_child);
var y__4215__auto__ = clojure.data.avl.height(node__$1.getLeft());
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() + (1)));

return clojure.data.avl.maybe_rebalance_BANG_(edit,node__$1);
} else {
return node;
}

}
}
}
});
clojure.data.avl.join = (function clojure$data$avl$join(comp,left_count,left,right){
if((left == null)){
return right;
} else {
if((right == null)){
return left;
} else {
var lh = left.getHeight();
var rh = right.getHeight();
if((lh === rh)){
var left_min = clojure.data.avl.get_rightmost(left);
var new_left = clojure.data.avl.delete$(comp,left,left_min.getKey(),(new cljs.core.Box(false)));
return (new clojure.data.avl.AVLNode(null,left_min.getKey(),left_min.getVal(),new_left,right,(rh + (1)),(left_count - (1))));
} else {
if((lh < rh)){
var step = (function clojure$data$avl$join_$_step(current,lvl){
if((lvl === (0))){
return (clojure.data.avl.join.cljs$core$IFn$_invoke$arity$4 ? clojure.data.avl.join.cljs$core$IFn$_invoke$arity$4(comp,left_count,left,current) : clojure.data.avl.join.call(null,comp,left_count,left,current));
} else {
if((current.getLeft() == null)){
return (new clojure.data.avl.AVLNode(null,current.getKey(),current.getVal(),left,current.getRight(),(2),left_count));
} else {
var new_child = clojure$data$avl$join_$_step(current.getLeft(),(lvl - (1)));
var current_r = current.getRight();
return clojure.data.avl.maybe_rebalance((new clojure.data.avl.AVLNode(null,current.getKey(),current.getVal(),new_child,current_r,((function (){var x__4214__auto__ = new_child.getHeight();
var y__4215__auto__ = (cljs.core.truth_(current_r)?current_r.getHeight():(0));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() + (1)),(left_count + current.getRank()))));

}
}
});
return step(right,(rh - lh));
} else {
var step = (function clojure$data$avl$join_$_step(current,cnt,lvl){
if((lvl === (0))){
return (clojure.data.avl.join.cljs$core$IFn$_invoke$arity$4 ? clojure.data.avl.join.cljs$core$IFn$_invoke$arity$4(comp,cnt,current,right) : clojure.data.avl.join.call(null,comp,cnt,current,right));
} else {
if((current.getRight() == null)){
return (new clojure.data.avl.AVLNode(null,current.getKey(),current.getVal(),current.getLeft(),right,(2),current.getRank()));
} else {
var new_child = clojure$data$avl$join_$_step(current.getRight(),((cnt - current.getRank()) - (1)),(lvl - (1)));
var current_l = current.getLeft();
return clojure.data.avl.maybe_rebalance((new clojure.data.avl.AVLNode(null,current.getKey(),current.getVal(),current_l,new_child,((function (){var x__4214__auto__ = new_child.getHeight();
var y__4215__auto__ = (cljs.core.truth_(current_l)?current_l.getHeight():(0));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() + (1)),current.getRank())));

}
}
});
return step(left,left_count,(lh - rh));

}
}

}
}
});
clojure.data.avl.split = (function clojure$data$avl$split(comp,node,k){
var step = (function clojure$data$avl$split_$_step(node__$1){
if((node__$1 == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null);
} else {
var c = (function (){var G__29492 = k;
var G__29493 = node__$1.getKey();
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__29492,G__29493) : comp.call(null,G__29492,G__29493));
})();
if((c === (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [node__$1.getLeft(),(new cljs.core.MapEntry(node__$1.getKey(),node__$1.getVal(),null)),node__$1.getRight()], null);
} else {
if((c < (0))){
var vec__29494 = clojure$data$avl$split_$_step(node__$1.getLeft());
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29494,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29494,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29494,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,e,clojure.data.avl.join(comp,(node__$1.getRank() - (cljs.core.truth_(e)?(clojure.data.avl.rank(comp,node__$1.getLeft(),cljs.core.key(e)) + (1)):(cljs.core.truth_(r)?clojure.data.avl.rank(comp,node__$1.getLeft(),clojure.data.avl.get_leftmost(r).getKey()):node__$1.getRank()
))),r,clojure.data.avl.insert(comp,node__$1.getRight(),node__$1.getKey(),node__$1.getVal(),(new cljs.core.Box(false))))], null);
} else {
var vec__29497 = clojure$data$avl$split_$_step(node__$1.getRight());
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29497,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29497,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29497,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.data.avl.join(comp,(node__$1.getRank() + (1)),clojure.data.avl.insert(comp,node__$1.getLeft(),node__$1.getKey(),node__$1.getVal(),(new cljs.core.Box(false))),l),e,r], null);

}
}
}
});
return step(node);
});
clojure.data.avl.range = (function clojure$data$avl$range(comp,node,low,high){
var vec__29500 = clojure.data.avl.split(comp,node,low);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29500,(0),null);
var low_e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29500,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29500,(2),null);
var vec__29503 = clojure.data.avl.split(comp,r,high);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29503,(0),null);
var high_e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29503,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29503,(2),null);
var G__29506 = l;
var G__29506__$1 = (cljs.core.truth_(low_e)?(function (){var node__$1 = G__29506;
return clojure.data.avl.insert(comp,node__$1,cljs.core.key(low_e),cljs.core.val(low_e),(new cljs.core.Box(false)));
})():G__29506);
if(cljs.core.truth_(high_e)){
var node__$1 = G__29506__$1;
return clojure.data.avl.insert(comp,node__$1,cljs.core.key(high_e),cljs.core.val(high_e),(new cljs.core.Box(false)));
} else {
return G__29506__$1;
}
});
clojure.data.avl.seq_push = (function clojure$data$avl$seq_push(node,stack,ascending_QMARK_){
var node__$1 = node;
var stack__$1 = stack;
while(true){
if((node__$1 == null)){
return stack__$1;
} else {
var G__29605 = (cljs.core.truth_(ascending_QMARK_)?node__$1.left:node__$1.right);
var G__29606 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack__$1,node__$1);
node__$1 = G__29605;
stack__$1 = G__29606;
continue;
}
break;
}
});
clojure.data.avl.create_seq = (function clojure$data$avl$create_seq(node,ascending_QMARK_,cnt){
var G__29507 = null;
var G__29508 = clojure.data.avl.seq_push(node,null,ascending_QMARK_);
var G__29509 = ascending_QMARK_;
var G__29510 = cnt;
var G__29511 = null;
return (clojure.data.avl.__GT_AVLMapSeq.cljs$core$IFn$_invoke$arity$5 ? clojure.data.avl.__GT_AVLMapSeq.cljs$core$IFn$_invoke$arity$5(G__29507,G__29508,G__29509,G__29510,G__29511) : clojure.data.avl.__GT_AVLMapSeq.call(null,G__29507,G__29508,G__29509,G__29510,G__29511));
});
clojure.data.avl.avl_map_kv_reduce = (function clojure$data$avl$avl_map_kv_reduce(node,f,init){
while(true){
var init__$1 = (((node.getLeft() == null))?init:(function (){var G__29512 = node.getLeft();
var G__29513 = f;
var G__29514 = init;
return (clojure.data.avl.avl_map_kv_reduce.cljs$core$IFn$_invoke$arity$3 ? clojure.data.avl.avl_map_kv_reduce.cljs$core$IFn$_invoke$arity$3(G__29512,G__29513,G__29514) : clojure.data.avl.avl_map_kv_reduce.call(null,G__29512,G__29513,G__29514));
})());
if(cljs.core.reduced_QMARK_(init__$1)){
return init__$1;
} else {
var init__$2 = (function (){var G__29515 = init__$1;
var G__29516 = node.getKey();
var G__29517 = node.getVal();
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__29515,G__29516,G__29517) : f.call(null,G__29515,G__29516,G__29517));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
return init__$2;
} else {
if((node.getRight() == null)){
return init__$2;
} else {
var G__29607 = node.getRight();
var G__29608 = f;
var G__29609 = init__$2;
node = G__29607;
f = G__29608;
init = G__29609;
continue;
}
}
}
break;
}
});
clojure.data.avl.avl_map_reduce = (function clojure$data$avl$avl_map_reduce(node,f,init){
while(true){
var init__$1 = (((node.getLeft() == null))?init:(function (){var G__29518 = node.getLeft();
var G__29519 = f;
var G__29520 = init;
return (clojure.data.avl.avl_map_reduce.cljs$core$IFn$_invoke$arity$3 ? clojure.data.avl.avl_map_reduce.cljs$core$IFn$_invoke$arity$3(G__29518,G__29519,G__29520) : clojure.data.avl.avl_map_reduce.call(null,G__29518,G__29519,G__29520));
})());
if(cljs.core.reduced_QMARK_(init__$1)){
return init__$1;
} else {
var init__$2 = (function (){var G__29521 = init__$1;
var G__29522 = (new cljs.core.MapEntry(node.getKey(),node.getVal(),null));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29521,G__29522) : f.call(null,G__29521,G__29522));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
return init__$2;
} else {
if((node.getRight() == null)){
return init__$2;
} else {
var G__29610 = node.getRight();
var G__29611 = f;
var G__29612 = init__$2;
node = G__29610;
f = G__29611;
init = G__29612;
continue;
}
}
}
break;
}
});
clojure.data.avl.avl_map_reduce_skip = (function clojure$data$avl$avl_map_reduce_skip(node,f,init,skip_node){
while(true){
var init__$1 = (((node.getLeft() == null))?init:(function (){var G__29523 = node.getLeft();
var G__29524 = f;
var G__29525 = init;
var G__29526 = skip_node;
return (clojure.data.avl.avl_map_reduce_skip.cljs$core$IFn$_invoke$arity$4 ? clojure.data.avl.avl_map_reduce_skip.cljs$core$IFn$_invoke$arity$4(G__29523,G__29524,G__29525,G__29526) : clojure.data.avl.avl_map_reduce_skip.call(null,G__29523,G__29524,G__29525,G__29526));
})());
if(cljs.core.reduced_QMARK_(init__$1)){
return init__$1;
} else {
if((skip_node === node)){
if((node.getRight() == null)){
return init__$1;
} else {
return clojure.data.avl.avl_map_reduce(node.getRight(),f,init__$1);
}
} else {
var init__$2 = (function (){var G__29527 = init__$1;
var G__29528 = (new cljs.core.MapEntry(node.getKey(),node.getVal(),null));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29527,G__29528) : f.call(null,G__29527,G__29528));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
return init__$2;
} else {
if((node.getRight() == null)){
return init__$2;
} else {
var G__29613 = node.getRight();
var G__29614 = f;
var G__29615 = init__$2;
var G__29616 = skip_node;
node = G__29613;
f = G__29614;
init = G__29615;
skip_node = G__29616;
continue;
}
}
}
}
break;
}
});
clojure.data.avl.avl_set_reduce = (function clojure$data$avl$avl_set_reduce(node,f,init){
while(true){
var init__$1 = (((node.getLeft() == null))?init:(function (){var G__29529 = node.getLeft();
var G__29530 = f;
var G__29531 = init;
return (clojure.data.avl.avl_set_reduce.cljs$core$IFn$_invoke$arity$3 ? clojure.data.avl.avl_set_reduce.cljs$core$IFn$_invoke$arity$3(G__29529,G__29530,G__29531) : clojure.data.avl.avl_set_reduce.call(null,G__29529,G__29530,G__29531));
})());
if(cljs.core.reduced_QMARK_(init__$1)){
return init__$1;
} else {
var init__$2 = (function (){var G__29532 = init__$1;
var G__29533 = node.getKey();
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29532,G__29533) : f.call(null,G__29532,G__29533));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
return init__$2;
} else {
if((node.getRight() == null)){
return init__$2;
} else {
var G__29617 = node.getRight();
var G__29618 = f;
var G__29619 = init__$2;
node = G__29617;
f = G__29618;
init = G__29619;
continue;
}
}
}
break;
}
});
clojure.data.avl.avl_set_reduce_skip = (function clojure$data$avl$avl_set_reduce_skip(node,f,init,skip_node){
var init__$1 = (((node.getLeft() == null))?init:(function (){var G__29534 = node.getLeft();
var G__29535 = f;
var G__29536 = init;
var G__29537 = skip_node;
return (clojure.data.avl.avl_set_reduce_skip.cljs$core$IFn$_invoke$arity$4 ? clojure.data.avl.avl_set_reduce_skip.cljs$core$IFn$_invoke$arity$4(G__29534,G__29535,G__29536,G__29537) : clojure.data.avl.avl_set_reduce_skip.call(null,G__29534,G__29535,G__29536,G__29537));
})());
if(cljs.core.reduced_QMARK_(init__$1)){
return init__$1;
} else {
if((skip_node === node)){
if((node.getRight() == null)){
return init__$1;
} else {
return clojure.data.avl.avl_set_reduce(node.getRight(),f,init__$1);
}
} else {
var init__$2 = (function (){var G__29538 = init__$1;
var G__29539 = node.getKey();
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29538,G__29539) : f.call(null,G__29538,G__29539));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
return init__$2;
} else {
if((node.getRight() == null)){
return init__$2;
} else {
return clojure.data.avl.avl_set_reduce(node.getRight(),f,init__$2);
}
}
}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
clojure.data.avl.AVLMapSeq = (function (_meta,stack,ascending_QMARK_,cnt,_hash){
this._meta = _meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(clojure.data.avl.AVLMapSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_(this$);
}));

(clojure.data.avl.AVLMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__._meta;
}));

(clojure.data.avl.AVLMapSeq.prototype.cljs$core$INext$_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._seq(this$__$1.cljs$core$ISeq$_rest$arity$1(null));
}));

(clojure.data.avl.AVLMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt < (0))){
return (cljs.core._count(this$__$1.cljs$core$INext$_next$arity$1(null)) + (1));
} else {
return self__.cnt;
}
}));

(clojure.data.avl.AVLMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__4238__auto__ = self__._hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = cljs.core.hash_coll(this$__$1);
(self__._hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(clojure.data.avl.AVLMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return cljs.core.equiv_sequential(this$__$1,that);
}));

(clojure.data.avl.AVLMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
}));

(clojure.data.avl.AVLMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,this$__$1);
}));

(clojure.data.avl.AVLMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,this$__$1);
}));

(clojure.data.avl.AVLMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var node = cljs.core.peek(self__.stack);
return (new cljs.core.MapEntry(node.key,node.val,null));
}));

(clojure.data.avl.AVLMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var node = cljs.core.first(self__.stack);
var next_stack = clojure.data.avl.seq_push((cljs.core.truth_(self__.ascending_QMARK_)?node.right:node.left),cljs.core.next(self__.stack),self__.ascending_QMARK_);
if((next_stack == null)){
return cljs.core.List.EMPTY;
} else {
return (new clojure.data.avl.AVLMapSeq(null,next_stack,self__.ascending_QMARK_,(self__.cnt - (1)),null));
}
}));

(clojure.data.avl.AVLMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(clojure.data.avl.AVLMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta){
var self__ = this;
var this$__$1 = this;
return (new clojure.data.avl.AVLMapSeq(meta,self__.stack,self__.ascending_QMARK_,self__.cnt,self__._hash));
}));

(clojure.data.avl.AVLMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(x,this$__$1);
}));

(clojure.data.avl.AVLMapSeq.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null),new cljs.core.Symbol(null,"stack","stack",847125597,null),new cljs.core.Symbol(null,"ascending?","ascending?",-1938452653,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(clojure.data.avl.AVLMapSeq.cljs$lang$type = true);

(clojure.data.avl.AVLMapSeq.cljs$lang$ctorStr = "clojure.data.avl/AVLMapSeq");

(clojure.data.avl.AVLMapSeq.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"clojure.data.avl/AVLMapSeq");
}));

/**
 * Positional factory function for clojure.data.avl/AVLMapSeq.
 */
clojure.data.avl.__GT_AVLMapSeq = (function clojure$data$avl$__GT_AVLMapSeq(_meta,stack,ascending_QMARK_,cnt,_hash){
return (new clojure.data.avl.AVLMapSeq(_meta,stack,ascending_QMARK_,cnt,_hash));
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEditableCollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISorted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
clojure.data.avl.AVLMap = (function (comp,tree,cnt,_meta,_hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this._meta = _meta;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 419301151;
this.cljs$lang$protocol_mask$partition1$ = 4;
});
(clojure.data.avl.AVLMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_(this$);
}));

(clojure.data.avl.AVLMap.prototype.getTree = (function (){
var self__ = this;
var this$ = this;
return self__.tree;
}));

(clojure.data.avl.AVLMap.prototype.nearest = (function (test,k){
var self__ = this;
var this$ = this;
var temp__5733__auto__ = clojure.data.avl.lookup_nearest(self__.comp,self__.tree,test,k);
if(cljs.core.truth_(temp__5733__auto__)){
var node = temp__5733__auto__;
return (new cljs.core.MapEntry(node.getKey(),node.getVal(),null));
} else {
return null;
}
}));

(clojure.data.avl.AVLMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null,k,null);
}));

(clojure.data.avl.AVLMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var n = clojure.data.avl.lookup(self__.comp,self__.tree,k);
if((!((n == null)))){
return n.val;
} else {
return not_found;
}
}));

(clojure.data.avl.AVLMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this$,f,init){
var self__ = this;
var this$__$1 = this;
if((self__.tree == null)){
return init;
} else {
var init__$1 = clojure.data.avl.avl_map_kv_reduce(self__.tree,f,init);
if(cljs.core.reduced_QMARK_(init__$1)){
return cljs.core.deref(init__$1);
} else {
return init__$1;
}
}
}));

(clojure.data.avl.AVLMap.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
var temp__5733__auto__ = clojure.data.avl.select(self__.tree,i);
if(cljs.core.truth_(temp__5733__auto__)){
var n = temp__5733__auto__;
return (new cljs.core.MapEntry(n.getKey(),n.getVal(),null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("nth index out of bounds in AVL tree",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(clojure.data.avl.AVLMap.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
var temp__5733__auto__ = clojure.data.avl.select(self__.tree,i);
if(cljs.core.truth_(temp__5733__auto__)){
var n = temp__5733__auto__;
return (new cljs.core.MapEntry(n.getKey(),n.getVal(),null));
} else {
return not_found;
}
}));

(clojure.data.avl.AVLMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__._meta;
}));

(clojure.data.avl.AVLMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.cnt;
}));

(clojure.data.avl.AVLMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt > (0))){
return clojure.data.avl.create_seq(self__.tree,false,self__.cnt);
} else {
return null;
}
}));

(clojure.data.avl.AVLMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__4238__auto__ = self__._hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = cljs.core.hash_unordered_coll(this$__$1);
(self__._hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(clojure.data.avl.AVLMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return cljs.core.equiv_map(this$__$1,that);
}));

(clojure.data.avl.AVLMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__29541 = ({});
var G__29542 = self__.comp;
var G__29543 = self__.tree;
var G__29544 = self__.cnt;
return (clojure.data.avl.__GT_AVLTransientMap.cljs$core$IFn$_invoke$arity$4 ? clojure.data.avl.__GT_AVLTransientMap.cljs$core$IFn$_invoke$arity$4(G__29541,G__29542,G__29543,G__29544) : clojure.data.avl.__GT_AVLTransientMap.call(null,G__29541,G__29542,G__29543,G__29544));
}));

(clojure.data.avl.AVLMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new clojure.data.avl.AVLMap(self__.comp,null,(0),self__._meta,(0)));
}));

(clojure.data.avl.AVLMap.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var G__29547 = self__.cnt;
switch (G__29547) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
return (new cljs.core.MapEntry(self__.tree.getKey(),self__.tree.getVal(),null));

break;
default:
var n0 = clojure.data.avl.select(self__.tree,(0));
var init = clojure.data.avl.avl_map_reduce_skip(self__.tree,f,(new cljs.core.MapEntry(n0.getKey(),n0.getVal(),null)),n0);
if(cljs.core.reduced_QMARK_(init)){
return init.cljs$core$IDeref$_deref$arity$1(null);
} else {
return init;
}

}
}));

(clojure.data.avl.AVLMap.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,init){
var self__ = this;
var this$__$1 = this;
if((self__.tree == null)){
return init;
} else {
var init__$1 = clojure.data.avl.avl_map_reduce(self__.tree,f,init);
if(cljs.core.reduced_QMARK_(init__$1)){
return init__$1.cljs$core$IDeref$_deref$arity$1(null);
} else {
return init__$1;
}
}
}));

(clojure.data.avl.AVLMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
var found_QMARK_ = (new cljs.core.Box(false));
var new_tree = clojure.data.avl.delete$(self__.comp,self__.tree,k,found_QMARK_);
if(cljs.core.truth_(found_QMARK_.val)){
return (new clojure.data.avl.AVLMap(self__.comp,new_tree,(self__.cnt - (1)),self__._meta,null));
} else {
return this$__$1;
}
}));

(clojure.data.avl.AVLMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,k,v){
var self__ = this;
var this$__$1 = this;
var found_QMARK_ = (new cljs.core.Box(false));
var new_tree = clojure.data.avl.insert(self__.comp,self__.tree,k,v,found_QMARK_);
return (new clojure.data.avl.AVLMap(self__.comp,new_tree,(cljs.core.truth_(found_QMARK_.val)?self__.cnt:(self__.cnt + (1))),self__._meta,null));
}));

(clojure.data.avl.AVLMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return (!((clojure.data.avl.lookup(self__.comp,self__.tree,k) == null)));
}));

(clojure.data.avl.AVLMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt > (0))){
return clojure.data.avl.create_seq(self__.tree,true,self__.cnt);
} else {
return null;
}
}));

(clojure.data.avl.AVLMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta){
var self__ = this;
var this$__$1 = this;
return (new clojure.data.avl.AVLMap(self__.comp,self__.tree,self__.cnt,meta,self__._hash));
}));

(clojure.data.avl.AVLMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core._nth(entry,(0)),cljs.core._nth(entry,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this$__$1,entry);
}
}));

(clojure.data.avl.AVLMap.prototype.call = (function (unused__9352__auto__){
var self__ = this;
var self__ = this;
var G__29548 = (arguments.length - (1));
switch (G__29548) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(clojure.data.avl.AVLMap.prototype.apply = (function (self__,args29540){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args29540)));
}));

(clojure.data.avl.AVLMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
}));

(clojure.data.avl.AVLMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
}));

(clojure.data.avl.AVLMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
if((self__.cnt > (0))){
return clojure.data.avl.create_seq(self__.tree,ascending_QMARK_,self__.cnt);
} else {
return null;
}
}));

(clojure.data.avl.AVLMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
if((self__.cnt > (0))){
var stack = null;
var t = self__.tree;
while(true){
if((!((t == null)))){
var c = (function (){var G__29551 = k;
var G__29552 = t.key;
return (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(G__29551,G__29552) : self__.comp.call(null,G__29551,G__29552));
})();
if((c === (0))){
return (new clojure.data.avl.AVLMapSeq(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t),ascending_QMARK_,(-1),null));
} else {
if(cljs.core.truth_(ascending_QMARK_)){
if((c < (0))){
var G__29622 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__29623 = t.left;
stack = G__29622;
t = G__29623;
continue;
} else {
var G__29624 = stack;
var G__29625 = t.right;
stack = G__29624;
t = G__29625;
continue;
}
} else {
if((c > (0))){
var G__29626 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__29627 = t.right;
stack = G__29626;
t = G__29627;
continue;
} else {
var G__29628 = stack;
var G__29629 = t.left;
stack = G__29628;
t = G__29629;
continue;
}

}
}
} else {
if((!((stack == null)))){
return (new clojure.data.avl.AVLMapSeq(null,stack,ascending_QMARK_,(-1),null));
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(clojure.data.avl.AVLMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
return cljs.core.key(entry);
}));

(clojure.data.avl.AVLMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.comp;
}));

(clojure.data.avl.AVLMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(clojure.data.avl.AVLMap.cljs$lang$type = true);

(clojure.data.avl.AVLMap.cljs$lang$ctorStr = "clojure.data.avl/AVLMap");

(clojure.data.avl.AVLMap.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"clojure.data.avl/AVLMap");
}));

/**
 * Positional factory function for clojure.data.avl/AVLMap.
 */
clojure.data.avl.__GT_AVLMap = (function clojure$data$avl$__GT_AVLMap(comp,tree,cnt,_meta,_hash){
return (new clojure.data.avl.AVLMap(comp,tree,cnt,_meta,_hash));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ITransientMap}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ITransientCollection}
 * @implements {cljs.core.ITransientAssociative}
 * @implements {cljs.core.ILookup}
*/
clojure.data.avl.AVLTransientMap = (function (edit,comp,tree,cnt){
this.edit = edit;
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 56;
});
(clojure.data.avl.AVLTransientMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.cnt;
}));

(clojure.data.avl.AVLTransientMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null,k,null);
}));

(clojure.data.avl.AVLTransientMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var n = clojure.data.avl.lookup(self__.comp,self__.tree,k);
if((!((n == null)))){
return n.getVal();
} else {
return not_found;
}
}));

(clojure.data.avl.AVLTransientMap.prototype.call = (function (unused__9352__auto__){
var self__ = this;
var self__ = this;
var G__29554 = (arguments.length - (1));
switch (G__29554) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(clojure.data.avl.AVLTransientMap.prototype.apply = (function (self__,args29553){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args29553)));
}));

(clojure.data.avl.AVLTransientMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
}));

(clojure.data.avl.AVLTransientMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
}));

(clojure.data.avl.AVLTransientMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,this$__$1,entry);
}
}));

(clojure.data.avl.AVLTransientMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
clojure.data.avl.ensure_editable.cljs$core$IFn$_invoke$arity$1(self__.edit);

(self__.edit = null);

return (new clojure.data.avl.AVLMap(self__.comp,self__.tree,self__.cnt,null,null));
}));

(clojure.data.avl.AVLTransientMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (this$,k,v){
var self__ = this;
var this$__$1 = this;
clojure.data.avl.ensure_editable.cljs$core$IFn$_invoke$arity$1(self__.edit);

var found_QMARK_ = (new cljs.core.Box(false));
var new_tree = clojure.data.avl.insert_BANG_(self__.edit,self__.comp,self__.tree,k,v,found_QMARK_);
(self__.tree = new_tree);

if(cljs.core.not(found_QMARK_.val)){
(self__.cnt = (self__.cnt + (1)));
} else {
}

return this$__$1;
}));

(clojure.data.avl.AVLTransientMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
clojure.data.avl.ensure_editable.cljs$core$IFn$_invoke$arity$1(self__.edit);

var found_QMARK_ = (new cljs.core.Box(false));
var new_tree = clojure.data.avl.delete_BANG_(self__.edit,self__.comp,self__.tree,k,found_QMARK_);
if(cljs.core.truth_(found_QMARK_.val)){
(self__.tree = new_tree);

(self__.cnt = (self__.cnt - (1)));
} else {
}

return this$__$1;
}));

(clojure.data.avl.AVLTransientMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"edit","edit",-1302639,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"comp","comp",-1462482139,null),cljs.core.with_meta(new cljs.core.Symbol(null,"tree","tree",1444219499,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(clojure.data.avl.AVLTransientMap.cljs$lang$type = true);

(clojure.data.avl.AVLTransientMap.cljs$lang$ctorStr = "clojure.data.avl/AVLTransientMap");

(clojure.data.avl.AVLTransientMap.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"clojure.data.avl/AVLTransientMap");
}));

/**
 * Positional factory function for clojure.data.avl/AVLTransientMap.
 */
clojure.data.avl.__GT_AVLTransientMap = (function clojure$data$avl$__GT_AVLTransientMap(edit,comp,tree,cnt){
return (new clojure.data.avl.AVLTransientMap(edit,comp,tree,cnt));
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEditableCollection}
 * @implements {cljs.core.ISet}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISorted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
clojure.data.avl.AVLSet = (function (_meta,avl_map,_hash){
this._meta = _meta;
this.avl_map = avl_map;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 418255135;
this.cljs$lang$protocol_mask$partition1$ = 4;
});
(clojure.data.avl.AVLSet.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_(this$);
}));

(clojure.data.avl.AVLSet.prototype.getTree = (function (){
var self__ = this;
var this$ = this;
return self__.avl_map.tree;
}));

(clojure.data.avl.AVLSet.prototype.nearest = (function (test,k){
var self__ = this;
var this$ = this;
var temp__5733__auto__ = clojure.data.avl.lookup_nearest(self__.avl_map.comp,self__.avl_map.getTree(),test,k);
if(cljs.core.truth_(temp__5733__auto__)){
var node = temp__5733__auto__;
return node.getKey();
} else {
return null;
}
}));

(clojure.data.avl.AVLSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null,v,null);
}));

(clojure.data.avl.AVLSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,v,not_found){
var self__ = this;
var this$__$1 = this;
var n = clojure.data.avl.lookup(self__.avl_map.comp,self__.avl_map.tree,v);
if((!((n == null)))){
return n.key;
} else {
return not_found;
}
}));

(clojure.data.avl.AVLSet.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
var temp__5733__auto__ = clojure.data.avl.select(self__.avl_map.tree,i);
if(cljs.core.truth_(temp__5733__auto__)){
var n = temp__5733__auto__;
return n.getVal();
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("nth index out of bounds in AVL tree",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(clojure.data.avl.AVLSet.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
var temp__5733__auto__ = clojure.data.avl.select(self__.avl_map.tree,i);
if(cljs.core.truth_(temp__5733__auto__)){
var n = temp__5733__auto__;
return n.getVal();
} else {
return not_found;
}
}));

(clojure.data.avl.AVLSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__._meta;
}));

(clojure.data.avl.AVLSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._count(self__.avl_map);
}));

(clojure.data.avl.AVLSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.rseq(self__.avl_map));
}));

(clojure.data.avl.AVLSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__4238__auto__ = self__._hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = cljs.core.hash_unordered_coll(this$__$1);
(self__._hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(clojure.data.avl.AVLSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return ((cljs.core.set_QMARK_(that)) && ((cljs.core.count(this$__$1) === cljs.core.count(that))) && (cljs.core.every_QMARK_((function (p1__29555_SHARP_){
return cljs.core.contains_QMARK_(this$__$1,p1__29555_SHARP_);
}),that)));
}));

(clojure.data.avl.AVLSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__29557 = cljs.core._as_transient(self__.avl_map);
return (clojure.data.avl.__GT_AVLTransientSet.cljs$core$IFn$_invoke$arity$1 ? clojure.data.avl.__GT_AVLTransientSet.cljs$core$IFn$_invoke$arity$1(G__29557) : clojure.data.avl.__GT_AVLTransientSet.call(null,G__29557));
}));

(clojure.data.avl.AVLSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new clojure.data.avl.AVLSet(self__._meta,cljs.core.empty(self__.avl_map),(0)));
}));

(clojure.data.avl.AVLSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
return (new clojure.data.avl.AVLSet(self__._meta,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.avl_map,v),null));
}));

(clojure.data.avl.AVLSet.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var G__29558 = cljs.core._count(self__.avl_map);
switch (G__29558) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
return self__.avl_map.getTree().getKey();

break;
default:
var tree = self__.avl_map.getTree();
var n0 = clojure.data.avl.select(tree,(0));
var init = clojure.data.avl.avl_set_reduce_skip(tree,f,n0.getKey(),n0);
if(cljs.core.reduced_QMARK_(init)){
return init.cljs$core$IDeref$_deref$arity$1(null);
} else {
return init;
}

}
}));

(clojure.data.avl.AVLSet.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,init){
var self__ = this;
var this$__$1 = this;
var tree = self__.avl_map.getTree();
if((tree == null)){
return init;
} else {
var init__$1 = clojure.data.avl.avl_set_reduce(tree,f,init);
if(cljs.core.reduced_QMARK_(init__$1)){
return init__$1.cljs$core$IDeref$_deref$arity$1(null);
} else {
return init__$1;
}
}
}));

(clojure.data.avl.AVLSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.keys(self__.avl_map);
}));

(clojure.data.avl.AVLSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta){
var self__ = this;
var this$__$1 = this;
return (new clojure.data.avl.AVLSet(meta,self__.avl_map,self__._hash));
}));

(clojure.data.avl.AVLSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return (new clojure.data.avl.AVLSet(self__._meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.avl_map,x,x),null));
}));

(clojure.data.avl.AVLSet.prototype.call = (function (unused__9352__auto__){
var self__ = this;
var self__ = this;
var G__29559 = (arguments.length - (1));
switch (G__29559) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(clojure.data.avl.AVLSet.prototype.apply = (function (self__,args29556){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args29556)));
}));

(clojure.data.avl.AVLSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
}));

(clojure.data.avl.AVLSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
}));

(clojure.data.avl.AVLSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
return cljs.core.keys(cljs.core._sorted_seq(self__.avl_map,ascending_QMARK_));
}));

(clojure.data.avl.AVLSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
return cljs.core.keys(cljs.core._sorted_seq_from(self__.avl_map,k,ascending_QMARK_));
}));

(clojure.data.avl.AVLSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
return entry;
}));

(clojure.data.avl.AVLSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._comparator(self__.avl_map);
}));

(clojure.data.avl.AVLSet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null),new cljs.core.Symbol(null,"avl-map","avl-map",1856103343,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(clojure.data.avl.AVLSet.cljs$lang$type = true);

(clojure.data.avl.AVLSet.cljs$lang$ctorStr = "clojure.data.avl/AVLSet");

(clojure.data.avl.AVLSet.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"clojure.data.avl/AVLSet");
}));

/**
 * Positional factory function for clojure.data.avl/AVLSet.
 */
clojure.data.avl.__GT_AVLSet = (function clojure$data$avl$__GT_AVLSet(_meta,avl_map,_hash){
return (new clojure.data.avl.AVLSet(_meta,avl_map,_hash));
});


/**
* @constructor
 * @implements {cljs.core.ITransientSet}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ITransientCollection}
 * @implements {cljs.core.ILookup}
*/
clojure.data.avl.AVLTransientSet = (function (transient_avl_map){
this.transient_avl_map = transient_avl_map;
this.cljs$lang$protocol_mask$partition1$ = 136;
this.cljs$lang$protocol_mask$partition0$ = 259;
});
(clojure.data.avl.AVLTransientSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
(self__.transient_avl_map = cljs.core._assoc_BANG_(self__.transient_avl_map,k,k));

return this$__$1;
}));

(clojure.data.avl.AVLTransientSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.transient_avl_map.edit == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("persistent! used twice",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (new clojure.data.avl.AVLSet(null,cljs.core._persistent_BANG_(self__.transient_avl_map),null));
}
}));

(clojure.data.avl.AVLTransientSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
(self__.transient_avl_map = cljs.core._dissoc_BANG_(self__.transient_avl_map,k));

return this$__$1;
}));

(clojure.data.avl.AVLTransientSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._count(self__.transient_avl_map);
}));

(clojure.data.avl.AVLTransientSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null,k,null);
}));

(clojure.data.avl.AVLTransientSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
if((cljs.core._lookup(self__.transient_avl_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)){
return not_found;
} else {
return k;
}
}));

(clojure.data.avl.AVLTransientSet.prototype.call = (function (unused__9352__auto__){
var self__ = this;
var self__ = this;
var G__29561 = (arguments.length - (1));
switch (G__29561) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(clojure.data.avl.AVLTransientSet.prototype.apply = (function (self__,args29560){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args29560)));
}));

(clojure.data.avl.AVLTransientSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup(self__.transient_avl_map,k);
}));

(clojure.data.avl.AVLTransientSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup(self__.transient_avl_map,k,not_found);
}));

(clojure.data.avl.AVLTransientSet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"transient-avl-map","transient-avl-map",1489301191,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(clojure.data.avl.AVLTransientSet.cljs$lang$type = true);

(clojure.data.avl.AVLTransientSet.cljs$lang$ctorStr = "clojure.data.avl/AVLTransientSet");

(clojure.data.avl.AVLTransientSet.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"clojure.data.avl/AVLTransientSet");
}));

/**
 * Positional factory function for clojure.data.avl/AVLTransientSet.
 */
clojure.data.avl.__GT_AVLTransientSet = (function clojure$data$avl$__GT_AVLTransientSet(transient_avl_map){
return (new clojure.data.avl.AVLTransientSet(transient_avl_map));
});

clojure.data.avl.empty_map = (new clojure.data.avl.AVLMap(cljs.core.compare,null,(0),null,(0)));
clojure.data.avl.empty_set = (new clojure.data.avl.AVLSet(null,clojure.data.avl.empty_map,(0)));
(clojure.data.avl.AVLMapSeq.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.data.avl.AVLMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,this$__$1);
}));

(clojure.data.avl.AVLMap.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.data.avl.AVLMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
var pr_pair = (function clojure$data$avl$pr_pair(keyval){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer(writer,pr_pair,"{",", ","}",opts,this$__$1);
}));

(clojure.data.avl.AVLSet.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.data.avl.AVLSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,this$__$1);
}));
/**
 * keyval => key val
 *   Returns a new AVL map with supplied mappings.
 */
clojure.data.avl.sorted_map = (function clojure$data$avl$sorted_map(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29634 = arguments.length;
var i__4737__auto___29635 = (0);
while(true){
if((i__4737__auto___29635 < len__4736__auto___29634)){
args__4742__auto__.push((arguments[i__4737__auto___29635]));

var G__29636 = (i__4737__auto___29635 + (1));
i__4737__auto___29635 = G__29636;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return clojure.data.avl.sorted_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(clojure.data.avl.sorted_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = cljs.core.transient$(clojure.data.avl.empty_map);
while(true){
if(in$){
var temp__5733__auto__ = cljs.core.next(in$);
if(temp__5733__auto__){
var nin = temp__5733__auto__;
var G__29637 = cljs.core.next(nin);
var G__29638 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.first(nin));
in$ = G__29637;
out = G__29638;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["sorted-map: no value supplied for key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(in$))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}
}));

(clojure.data.avl.sorted_map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(clojure.data.avl.sorted_map.cljs$lang$applyTo = (function (seq29562){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29562));
}));

/**
 * keyval => key val
 *   Returns a new sorted map with supplied mappings, using the supplied
 *   comparator.
 */
clojure.data.avl.sorted_map_by = (function clojure$data$avl$sorted_map_by(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29639 = arguments.length;
var i__4737__auto___29640 = (0);
while(true){
if((i__4737__auto___29640 < len__4736__auto___29639)){
args__4742__auto__.push((arguments[i__4737__auto___29640]));

var G__29641 = (i__4737__auto___29640 + (1));
i__4737__auto___29640 = G__29641;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return clojure.data.avl.sorted_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(clojure.data.avl.sorted_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = (new clojure.data.avl.AVLTransientMap(({}),cljs.core.fn__GT_comparator(comparator),null,(0)));
while(true){
if(in$){
var temp__5733__auto__ = cljs.core.next(in$);
if(temp__5733__auto__){
var nin = temp__5733__auto__;
var G__29642 = cljs.core.next(nin);
var G__29643 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.first(nin));
in$ = G__29642;
out = G__29643;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["sorted-map-by: no value supplied for key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(in$))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}
}));

(clojure.data.avl.sorted_map_by.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.data.avl.sorted_map_by.cljs$lang$applyTo = (function (seq29563){
var G__29564 = cljs.core.first(seq29563);
var seq29563__$1 = cljs.core.next(seq29563);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29564,seq29563__$1);
}));

/**
 * Returns a new sorted set with supplied keys.
 */
clojure.data.avl.sorted_set = (function clojure$data$avl$sorted_set(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29644 = arguments.length;
var i__4737__auto___29645 = (0);
while(true){
if((i__4737__auto___29645 < len__4736__auto___29644)){
args__4742__auto__.push((arguments[i__4737__auto___29645]));

var G__29646 = (i__4737__auto___29645 + (1));
i__4737__auto___29645 = G__29646;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return clojure.data.avl.sorted_set.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(clojure.data.avl.sorted_set.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,cljs.core.transient$(clojure.data.avl.empty_set),keys));
}));

(clojure.data.avl.sorted_set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(clojure.data.avl.sorted_set.cljs$lang$applyTo = (function (seq29569){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29569));
}));

/**
 * Returns a new sorted set with supplied keys, using the supplied comparator.
 */
clojure.data.avl.sorted_set_by = (function clojure$data$avl$sorted_set_by(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29647 = arguments.length;
var i__4737__auto___29648 = (0);
while(true){
if((i__4737__auto___29648 < len__4736__auto___29647)){
args__4742__auto__.push((arguments[i__4737__auto___29648]));

var G__29649 = (i__4737__auto___29648 + (1));
i__4737__auto___29648 = G__29649;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return clojure.data.avl.sorted_set_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(clojure.data.avl.sorted_set_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keys){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,(new clojure.data.avl.AVLTransientSet(cljs.core._as_transient(clojure.data.avl.sorted_map_by(cljs.core.fn__GT_comparator(comparator))))),keys));
}));

(clojure.data.avl.sorted_set_by.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.data.avl.sorted_set_by.cljs$lang$applyTo = (function (seq29570){
var G__29571 = cljs.core.first(seq29570);
var seq29570__$1 = cljs.core.next(seq29570);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29571,seq29570__$1);
}));

/**
 * Returns the rank of x in coll or -1 if not present.
 */
clojure.data.avl.rank_of = (function clojure$data$avl$rank_of(coll,x){
return clojure.data.avl.rank(cljs.core._comparator(coll),coll.getTree(),x);
});
/**
 * (alpha)
 * 
 *   Equivalent to, but more efficient than, (first (subseq* coll test x)),
 *   where subseq* is clojure.core/subseq for test in #{>, >=} and
 *   clojure.core/rsubseq for test in #{<, <=}.
 */
clojure.data.avl.nearest = (function clojure$data$avl$nearest(coll,test,x){
return coll.nearest(test,x);
});
/**
 * (alpha)
 * 
 *   Returns [left e? right], where left and right are collections of
 *   the same type as coll and containing, respectively, the keys below
 *   and above k in the ordering determined by coll's comparator, while
 *   e? is the entry at key k for maps, the stored copy of the key k for
 *   sets, nil if coll does not contain k.
 */
clojure.data.avl.split_key = (function clojure$data$avl$split_key(k,coll){
var comp = cljs.core._comparator(coll);
var vec__29572 = clojure.data.avl.split(comp,coll.getTree(),k);
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29572,(0),null);
var e_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29572,(1),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29572,(2),null);
var keyfn = ((cljs.core.map_QMARK_(coll))?cljs.core.key:cljs.core.identity);
var wrap = ((cljs.core.map_QMARK_(coll))?(function clojure$data$avl$split_key_$_wrap_map(tree,cnt){
return (new clojure.data.avl.AVLMap(comp,tree,cnt,null,(-1)));
}):(function clojure$data$avl$split_key_$_wrap_set(tree,cnt){
return (new clojure.data.avl.AVLSet(null,(new clojure.data.avl.AVLMap(comp,tree,cnt,null,(-1))),(-1)));
}));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wrap(left,(cljs.core.truth_((function (){var or__4126__auto__ = e_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return right;
}
})())?clojure.data.avl.rank_of(coll,(function (){var G__29575 = clojure.data.avl.nearest(coll,cljs.core._GT__EQ_,k);
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__29575) : keyfn.call(null,G__29575));
})()):cljs.core.count(coll))),(cljs.core.truth_((function (){var and__4115__auto__ = e_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.set_QMARK_(coll);
} else {
return and__4115__auto__;
}
})())?cljs.core.key(e_QMARK_):e_QMARK_),wrap(right,(cljs.core.truth_(right)?(cljs.core.count(coll) - clojure.data.avl.rank_of(coll,(function (){var G__29576 = clojure.data.avl.nearest(coll,cljs.core._GT_,k);
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__29576) : keyfn.call(null,G__29576));
})())):(0)))], null);
});
/**
 * (alpha)
 * 
 *   Equivalent to, but more efficient than,
 *   [(into (empty coll) (take n coll))
 * (into (empty coll) (drop n coll))].
 */
clojure.data.avl.split_at = (function clojure$data$avl$split_at(n,coll){
if((n >= cljs.core.count(coll))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll,cljs.core.empty(coll)], null);
} else {
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,n);
var k__$1 = ((cljs.core.map_QMARK_(coll))?cljs.core.key(k):k);
var vec__29577 = clojure.data.avl.split_key(k__$1,coll);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29577,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29577,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29577,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,e)], null);
}
});
/**
 * (alpha)
 * 
 *   Returns an AVL collection comprising the entries of coll between
 *   start and end (in the sense determined by coll's comparator) in
 *   logarithmic time. Whether the endpoints are themselves included in
 *   the returned collection depends on the provided tests; start-test
 *   must be either > or >=, end-test must be either < or <=.
 * 
 *   When passed a single test and limit, subrange infers the other end
 *   of the range from the test: > / >= mean to include items up to the
 *   end of coll, < / <= mean to include items taken from the beginning
 *   of coll.
 * 
 *   (subrange coll >= start <= end) is equivalent to, but more efficient
 *   than, (into (empty coll) (subseq coll >= start <= end).
 */
clojure.data.avl.subrange = (function clojure$data$avl$subrange(var_args){
var G__29581 = arguments.length;
switch (G__29581) {
case 3:
return clojure.data.avl.subrange.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return clojure.data.avl.subrange.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.data.avl.subrange.cljs$core$IFn$_invoke$arity$3 = (function (coll,test,limit){
if((cljs.core.count(coll) === (0))){
return coll;
} else {
var comp = cljs.core._comparator(coll);
if(cljs.core.truth_((function (){var fexpr__29582 = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core._GT_,cljs.core._GT__EQ_]);
return (fexpr__29582.cljs$core$IFn$_invoke$arity$1 ? fexpr__29582.cljs$core$IFn$_invoke$arity$1(test) : fexpr__29582.call(null,test));
})())){
var n = clojure.data.avl.select(coll.getTree(),(cljs.core.count(coll) - (1)));
var k = n.getKey();
if(((comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(limit,k) : comp.call(null,limit,k)) > (0))){
return cljs.core.empty(coll);
} else {
return clojure.data.avl.subrange.cljs$core$IFn$_invoke$arity$5(coll,test,limit,cljs.core._LT__EQ_,k);
}
} else {
var n = clojure.data.avl.select(coll.getTree(),(0));
var k = n.getKey();
if(((comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(limit,k) : comp.call(null,limit,k)) < (0))){
return cljs.core.empty(coll);
} else {
return clojure.data.avl.subrange.cljs$core$IFn$_invoke$arity$5(coll,cljs.core._GT__EQ_,k,test,limit);
}
}
}
}));

(clojure.data.avl.subrange.cljs$core$IFn$_invoke$arity$5 = (function (coll,start_test,start,end_test,end){
if((cljs.core.count(coll) === (0))){
return coll;
} else {
var comp = cljs.core._comparator(coll);
if(((comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(start,end) : comp.call(null,start,end)) > (0))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("start greater than end in subrange",cljs.core.PersistentArrayMap.EMPTY);
} else {
var input_tree = coll.getTree();
var l = clojure.data.avl.lookup_nearest(comp,input_tree,start_test,start);
var h = clojure.data.avl.lookup_nearest(comp,input_tree,end_test,end);
if(cljs.core.truth_((function (){var and__4115__auto__ = l;
if(cljs.core.truth_(and__4115__auto__)){
return h;
} else {
return and__4115__auto__;
}
})())){
var lk = l.getKey();
var hk = h.getKey();
if(((comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(hk,lk) : comp.call(null,hk,lk)) < (0))){
return cljs.core.empty(coll);
} else {
var tree = clojure.data.avl.range(comp,coll.getTree(),lk,hk);
var cnt = ((clojure.data.avl.rank_of(coll,hk) - clojure.data.avl.rank_of(coll,lk)) + (1));
var m = (new clojure.data.avl.AVLMap(comp,tree,cnt,null,(-1)));
if(cljs.core.map_QMARK_(coll)){
return m;
} else {
return (new clojure.data.avl.AVLSet(null,m,(-1)));
}
}
} else {
return cljs.core.empty(coll);
}
}
}
}));

(clojure.data.avl.subrange.cljs$lang$maxFixedArity = 5);


//# sourceMappingURL=clojure.data.avl.js.map
