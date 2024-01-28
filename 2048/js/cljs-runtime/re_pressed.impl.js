goog.provide('re_pressed.impl');
re_pressed.impl.ns_root = "re-pressed.core/";
re_pressed.impl.max_record = (25);
re_pressed.impl.modifier_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(91),null,(17),null,(16),null,(18),null], null), null);
re_pressed.impl.__GT_ns_keyword = (function re_pressed$impl$__GT_ns_keyword(event_type){
return (function() {
var re_pressed$impl$__GT_ns_keyword_$_ns_keyword = null;
var re_pressed$impl$__GT_ns_keyword_$_ns_keyword__0 = (function (){
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword.cljs$core$IFn$_invoke$arity$1(null);
});
var re_pressed$impl$__GT_ns_keyword_$_ns_keyword__1 = (function (suffix){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([re_pressed.impl.ns_root,cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_type),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));
});
re_pressed$impl$__GT_ns_keyword_$_ns_keyword = function(suffix){
switch(arguments.length){
case 0:
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword__0.call(this);
case 1:
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword__1.call(this,suffix);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_pressed$impl$__GT_ns_keyword_$_ns_keyword.cljs$core$IFn$_invoke$arity$0 = re_pressed$impl$__GT_ns_keyword_$_ns_keyword__0;
re_pressed$impl$__GT_ns_keyword_$_ns_keyword.cljs$core$IFn$_invoke$arity$1 = re_pressed$impl$__GT_ns_keyword_$_ns_keyword__1;
return re_pressed$impl$__GT_ns_keyword_$_ns_keyword;
})()
});
re_pressed.impl.is_key_QMARK_ = (function re_pressed$impl$is_key_QMARK_(recent_key,key_map){
return cljs.core.every_QMARK_((function (p__29803){
var vec__29804 = p__29803;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29804,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29804,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(recent_key,k),v);
}),key_map);
});
re_pressed.impl.register_subs = (function re_pressed$impl$register_subs(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(ns_keyword("-keys"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"keys","keys",1068423698)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(ns_keyword("-event-keys"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"event-keys","event-keys",-835966631)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(ns_keyword("-clear-keys"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539)], null));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(ns_keyword("-always-listen-keys"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050)], null));
})], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
return re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(ns_keyword("-prevent-default-keys"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"prevent-default-keys","prevent-default-keys",1744205310)], null));
})], 0));
} else {
return null;
}
});
re_pressed.impl.__GT_set_key_BANG_ = (function re_pressed$impl$__GT_set_key_BANG_(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
return (function re_pressed$impl$__GT_set_key_BANG__$_set_key_BANG_(p__29807,p__29808){
var map__29809 = p__29807;
var map__29809__$1 = (((((!((map__29809 == null))))?(((((map__29809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29809):map__29809);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29809__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29810 = p__29808;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29810,(0),null);
var key_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29810,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),(function (key_maps){
var keys = (cljs.core.truth_(key_map)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = key_maps;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),key_map):key_maps);

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take_last(re_pressed.impl.max_record,keys));
}))], null);
});
});
re_pressed.impl.__GT_clear_keys_BANG_ = (function re_pressed$impl$__GT_clear_keys_BANG_(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
return (function re_pressed$impl$__GT_clear_keys_BANG__$_clear_keys_BANG_(p__29814,p__29815){
var map__29816 = p__29814;
var map__29816__$1 = (((((!((map__29816 == null))))?(((((map__29816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29816):map__29816);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29816__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29817 = p__29815;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29817,(0),null);
var key_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29817,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword(),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),cljs.core.PersistentVector.EMPTY)], null);
});
});
re_pressed.impl.prevent_default_keys_BANG_ = (function re_pressed$impl$prevent_default_keys_BANG_(_,p__29821){
var vec__29822 = p__29821;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29822,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29822,(1),null);
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([re_pressed.impl.ns_root,"prevent-default"].join(''));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,e]);
});
re_pressed.impl.register_events = (function re_pressed$impl$register_events(event_type){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(ns_keyword("-set-key"),re_pressed.impl.__GT_set_key_BANG_(event_type));

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(ns_keyword("-clear-keys"),re_pressed.impl.__GT_clear_keys_BANG_(event_type));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(ns_keyword("-prevent-default-keys"),re_pressed.impl.prevent_default_keys_BANG_);
} else {
return null;
}
});
re_pressed.impl.register_effects = (function re_pressed$impl$register_effects(event_type){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
return re_frame.core.reg_fx(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([re_pressed.impl.ns_root,"prevent-default"].join('')),(function (e){
return e.preventDefault();
}));
} else {
return null;
}
});
re_frame.core.reg_fx(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([re_pressed.impl.ns_root,"keyboard-event"].join('')),(function (p__29830){
var map__29831 = p__29830;
var map__29831__$1 = (((((!((map__29831 == null))))?(((((map__29831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29831):map__29831);
var event_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29831__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var arguments$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29831__$1,new cljs.core.Keyword(null,"arguments","arguments",-1182834456));
re_pressed.impl.register_subs(event_type);

re_pressed.impl.register_events(event_type);

re_pressed.impl.register_effects(event_type);

var map__29833 = arguments$;
var map__29833__$1 = (((((!((map__29833 == null))))?(((((map__29833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29833):map__29833);
var clear_on_success_event_match = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29833__$1,new cljs.core.Keyword(null,"clear-on-success-event-match","clear-on-success-event-match",769810234));
return goog.events.listen(document,event_type,(function (e){
var ns_keyword = re_pressed.impl.__GT_ns_keyword(event_type);
var e_key = e.keyCode;
var modifier_key_QMARK_ = (re_pressed.impl.modifier_keys.cljs$core$IFn$_invoke$arity$1 ? re_pressed.impl.modifier_keys.cljs$core$IFn$_invoke$arity$1(e_key) : re_pressed.impl.modifier_keys.call(null,e_key));
var tag_name = e.target.tagName;
var entering_input_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["SELECT",null,"INPUT",null,"TEXTAREA",null], null), null),tag_name);
var hit_key = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"altKey","altKey",-670253656),e.altKey,new cljs.core.Keyword(null,"ctrlKey","ctrlKey",430760908),e.ctrlKey,new cljs.core.Keyword(null,"metaKey","metaKey",1006742180),e.metaKey,new cljs.core.Keyword(null,"shiftKey","shiftKey",1716666823),e.shiftKey,new cljs.core.Keyword(null,"keyCode","keyCode",1964303637),e.keyCode], null);
var always_listen_keys = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword("-always-listen-keys")], null)));
var always_listen_QMARK_ = cljs.core.some((function (p1__29825_SHARP_){
return re_pressed.impl.is_key_QMARK_(hit_key,p1__29825_SHARP_);
}),always_listen_keys);
if(cljs.core.truth_((function (){var or__4126__auto__ = ((cljs.core.not(modifier_key_QMARK_)) && ((!(entering_input_QMARK_))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return always_listen_QMARK_;
}
})())){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword("-set-key"),hit_key], null));

var recent_keys = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword("-keys")], null)));
var event_keys = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword("-event-keys")], null)));
var clear_keys = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword("-clear-keys")], null)));
var recent_key = cljs.core.last(recent_keys);
var is_key_sequence_QMARK_ = (function (key_maps){
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__29826_SHARP_,p2__29827_SHARP_){
return re_pressed.impl.is_key_QMARK_(p1__29826_SHARP_,p2__29827_SHARP_);
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse(recent_keys),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(re_pressed.impl.max_record,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.reverse(key_maps)));
});
var check_events = cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function re_pressed$impl$iter__29838(s__29839){
return (new cljs.core.LazySeq(null,(function (){
var s__29839__$1 = s__29839;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29839__$1);
if(temp__5735__auto__){
var s__29839__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29839__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__29839__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__29841 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__29840 = (0);
while(true){
if((i__29840 < size__4528__auto__)){
var vec__29842 = cljs.core._nth(c__4527__auto__,i__29840);
var seq__29843 = cljs.core.seq(vec__29842);
var first__29844 = cljs.core.first(seq__29843);
var seq__29843__$1 = cljs.core.next(seq__29843);
var trigger_event = first__29844;
var ks = seq__29843__$1;
cljs.core.chunk_append(b__29841,(function (){var triggered_QMARK_ = cljs.core.some(is_key_sequence_QMARK_,ks);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[trigger_event,triggered_QMARK_],null));
})());

var G__29890 = (i__29840 + (1));
i__29840 = G__29890;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29841),re_pressed$impl$iter__29838(cljs.core.chunk_rest(s__29839__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29841),null);
}
} else {
var vec__29845 = cljs.core.first(s__29839__$2);
var seq__29846 = cljs.core.seq(vec__29845);
var first__29847 = cljs.core.first(seq__29846);
var seq__29846__$1 = cljs.core.next(seq__29846);
var trigger_event = first__29847;
var ks = seq__29846__$1;
return cljs.core.cons((function (){var triggered_QMARK_ = cljs.core.some(is_key_sequence_QMARK_,ks);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[trigger_event,triggered_QMARK_],null));
})(),re_pressed$impl$iter__29838(cljs.core.rest(s__29839__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(event_keys);
})());
var vec__29835 = (function (){var G__29848 = check_events;
var G__29848__$1 = (((G__29848 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29828_SHARP_){
return cljs.core.second(p1__29828_SHARP_) === true;
}),G__29848));
if((G__29848__$1 == null)){
return null;
} else {
return cljs.core.first(G__29848__$1);
}
})();
var triggered_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29835,(0),null);
var event_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29835,(1),null);
var clear_QMARK_ = cljs.core.some(is_key_sequence_QMARK_,clear_keys);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",event_type)){
var prevent_default_keys_29891 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword("-prevent-default-keys")], null)));
var prevent_default_QMARK__29892 = cljs.core.some((function (p1__29829_SHARP_){
return re_pressed.impl.is_key_QMARK_(recent_key,p1__29829_SHARP_);
}),prevent_default_keys_29891);
if(cljs.core.truth_(prevent_default_QMARK__29892)){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword("-prevent-default-keys"),e], null));
} else {
}
} else {
}

if(cljs.core.truth_(clear_QMARK_)){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword("-clear-keys")], null));
} else {
if(cljs.core.truth_(event_QMARK_)){
if(cljs.core.truth_(clear_on_success_event_match)){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_keyword("-clear-keys")], null));
} else {
}

return re_frame.core.dispatch_sync(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(triggered_event,e,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([recent_keys], 0)));
} else {
return null;

}
}
} else {
return null;
}
}));
}));

//# sourceMappingURL=re_pressed.impl.js.map
