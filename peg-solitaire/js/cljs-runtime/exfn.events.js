goog.provide('exfn.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),exfn.logic.generate_board(),new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443),null,new cljs.core.Keyword(null,"remaining-pegs","remaining-pegs",-1694115001),(32),new cljs.core.Keyword(null,"valid-targets","valid-targets",519496219),cljs.core.PersistentVector.EMPTY], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"select-cell","select-cell",-1682016320),(function (db,p__32791){
var vec__32792 = p__32791;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32792,(0),null);
var cell_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32792,(1),null);
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db);
if(exfn.logic.has_marble_QMARK_(board,cell_id)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443)) : db.call(null,new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443))),cell_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443)),new cljs.core.Keyword(null,"targets","targets",2014963406),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443),cell_id),new cljs.core.Keyword(null,"targets","targets",2014963406),cljs.core.set(exfn.logic.get_potential_jumps(board,cell_id)));
}
} else {
return db;
}
}));
exfn.events.translate_direction = (function exfn$events$translate_direction(direction){
var G__32795 = direction;
var G__32795__$1 = (((G__32795 instanceof cljs.core.Keyword))?G__32795.fqn:null);
switch (G__32795__$1) {
case "north":
return (0);

break;
case "east":
return (1);

break;
case "west":
return (2);

break;
case "south":
return (3);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32795__$1)].join('')));

}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jump","jump",-971319427),(function (db,p__32797){
var vec__32798 = p__32797;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32798,(0),null);
var target_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32798,(1),null);
var selected_cell = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443)) : db.call(null,new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443)));
var direction = exfn.events.translate_direction(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32796_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_cell,new cljs.core.Keyword(null,"cell","cell",764245084).cljs$core$IFn$_invoke$arity$1(p1__32796_SHARP_));
}),new cljs.core.Keyword(null,"targets","targets",2014963406).cljs$core$IFn$_invoke$arity$1(db)))));
var new_board = exfn.logic.jump(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db),selected_cell,target_cell,direction);
var remaining_pegs = exfn.logic.pegs_remaining(new_board);
var remaining_jumps = exfn.logic.remaining_jumps(new_board);
var game_over_QMARK_ = (((remaining_pegs > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(remaining_jumps),(0))));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"board","board",-1907017633),new_board),new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443),null),new cljs.core.Keyword(null,"remaining-pegs","remaining-pegs",-1694115001),remaining_pegs),new cljs.core.Keyword(null,"targets","targets",2014963406),cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword(null,"remaining-jumps","remaining-jumps",631581786),remaining_jumps),new cljs.core.Keyword(null,"game-over?","game-over?",432859304),game_over_QMARK_),new cljs.core.Keyword(null,"game-win?","game-win?",-1137534134),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(remaining_pegs,(1)));
}));

//# sourceMappingURL=exfn.events.js.map
