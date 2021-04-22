goog.provide('exfn.app');
exfn.app.det = (function exfn$app$det(r,p1,p2){
return (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(r)) * (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p2) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(r))) - ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p2) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(r)) * (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(r))));
});
exfn.app.calculate_w = (function exfn$app$calculate_w(r,p__38440){
var vec__38441 = p__38440;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38441,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38441,(1),null);
if((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v1) <= new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(r))){
if((((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v2) > new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(r))) && ((exfn.app.det(r,v1,v2) > (0))))){
return (1);
} else {
return (0);
}
} else {
if((((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v2) <= new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(r))) && ((exfn.app.det(r,v1,v2) < (0))))){
return (-1);
} else {
return (0);
}
}
});
exfn.app.is_point_outside_QMARK_ = (function exfn$app$is_point_outside_QMARK_(point,points){
var closed_points = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(points,cljs.core.first(points));
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(exfn.app.calculate_w,point),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),closed_points))) === (0));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"current-action","current-action",423732020),new cljs.core.Keyword(null,"drawing-boundary","drawing-boundary",-2114539322),new cljs.core.Keyword(null,"point","point",1813198264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"should-fill","should-fill",1174181753),false,new cljs.core.Keyword(null,"location","location",1815599388),"Requires Calculation",new cljs.core.Keyword(null,"undo-stack","undo-stack",244619892),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"redo-stack","redo-stack",-2036358191),cljs.core.PersistentVector.EMPTY], null);
}));
exfn.app.clear_canvas = (function exfn$app$clear_canvas(canvas,ctx){
var w = canvas.width;
var h = canvas.height;
ctx.beginPath();

(ctx.fillStyle = "white");

ctx.rect((0),(0),w,h);

return ctx.fill();
});
exfn.app.draw_guides = (function exfn$app$draw_guides(ctx,points,x,y){
ctx.beginPath();

ctx.lineTo((0),y);

ctx.lineTo((500),y);

(ctx.lineWidth = 1.0);

(ctx.strokeStyle = "green");

return ctx.stroke();
});
exfn.app.draw_selected_point = (function exfn$app$draw_selected_point(ctx,x,y){
if((((!((x == null)))) && ((!((y == null)))))){
ctx.beginPath();

(ctx.strokeStyle = "black");

(ctx.fillStyle = "blue");

ctx.arc(x,y,(4),(0),((2) * Math.PI),(0));

ctx.stroke();

return ctx.fill();
} else {
return null;
}
});
exfn.app.draw_boundary = (function exfn$app$draw_boundary(ctx,points,should_fill){
(ctx.lineWidth = 2.0);

(ctx.strokeStyle = "black");

ctx.beginPath();

cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38444){
var map__38445 = p__38444;
var map__38445__$1 = (((((!((map__38445 == null))))?(((((map__38445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38445):map__38445);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38445__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38445__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
ctx.arc(x,y,(1),(0),((2) * Math.PI),(1));

return ctx.lineTo(x,y);
}),points));

ctx.stroke();

if(cljs.core.truth_(should_fill)){
(ctx.fillStyle = "yellow");

return ctx.fill();
} else {
return null;
}
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"draw-canvas","draw-canvas",-809645924),(function (p__38447){
var vec__38448 = p__38447;
var points = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38448,(0),null);
var map__38451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38448,(1),null);
var map__38451__$1 = (((((!((map__38451 == null))))?(((((map__38451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38451):map__38451);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38451__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38451__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var should_fill = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38448,(2),null);
var canvas = document.getElementById("point-canvas");
var ctx = canvas.getContext("2d");
ctx.scale((1),(1));

exfn.app.clear_canvas(canvas,ctx);

exfn.app.draw_boundary(ctx,points,should_fill);

return exfn.app.draw_selected_point(ctx,x,y);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-canvas","update-canvas",-1619718829),(function (p__38453,_){
var map__38454 = p__38453;
var map__38454__$1 = (((((!((map__38454 == null))))?(((((map__38454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38454):map__38454);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38454__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"draw-canvas","draw-canvas",-809645924),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"should-fill","should-fill",1174181753).cljs$core$IFn$_invoke$arity$1(db)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"point-click","point-click",1703552603),(function (p__38456,p__38457){
var map__38458 = p__38456;
var map__38458__$1 = (((((!((map__38458 == null))))?(((((map__38458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38458):map__38458);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38458__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__38459 = p__38457;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38459,(0),null);
var xy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38459,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawing-boundary","drawing-boundary",-2114539322),(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-action","current-action",423732020)) : db.call(null,new cljs.core.Keyword(null,"current-action","current-action",423732020))))){
var updated_points = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"points","points",-1486596883)) : db.call(null,new cljs.core.Keyword(null,"points","points",-1486596883))),xy);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"points","points",-1486596883),updated_points),new cljs.core.Keyword(null,"location","location",1815599388),((exfn.app.is_point_outside_QMARK_((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"point","point",1813198264)) : db.call(null,new cljs.core.Keyword(null,"point","point",1813198264))),updated_points))?"Outside":"Inside")),new cljs.core.Keyword(null,"redo-stack","redo-stack",-2036358191),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"undo-stack","undo-stack",244619892),cljs.core.conj,(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"points","points",-1486596883)) : db.call(null,new cljs.core.Keyword(null,"points","points",-1486596883)))),new cljs.core.Keyword(null,"draw-canvas","draw-canvas",-809645924),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_points,new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(db),(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"should-fill","should-fill",1174181753)) : db.call(null,new cljs.core.Keyword(null,"should-fill","should-fill",1174181753)))], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selecting-point","selecting-point",-1118332231),(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-action","current-action",423732020)) : db.call(null,new cljs.core.Keyword(null,"current-action","current-action",423732020))))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"point","point",1813198264),xy),new cljs.core.Keyword(null,"location","location",1815599388),((exfn.app.is_point_outside_QMARK_(xy,(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"points","points",-1486596883)) : db.call(null,new cljs.core.Keyword(null,"points","points",-1486596883)))))?"Outside":"Inside")),new cljs.core.Keyword(null,"draw-canvas","draw-canvas",-809645924),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(db),xy,(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"should-fill","should-fill",1174181753)) : db.call(null,new cljs.core.Keyword(null,"should-fill","should-fill",1174181753)))], null)], null);
} else {
return null;
}
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-boundary","reset-boundary",429140635),(function (p__38463,_){
var map__38464 = p__38463;
var map__38464__$1 = (((((!((map__38464 == null))))?(((((map__38464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38464):map__38464);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38464__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"draw-canvas","draw-canvas",-809645924),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"should-fill","should-fill",1174181753).cljs$core$IFn$_invoke$arity$1(db)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"location","location",1815599388),"Outside"),new cljs.core.Keyword(null,"undo-stack","undo-stack",244619892),cljs.core.conj,(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"points","points",-1486596883)) : db.call(null,new cljs.core.Keyword(null,"points","points",-1486596883)))),new cljs.core.Keyword(null,"current-action","current-action",423732020),new cljs.core.Keyword(null,"drawing-boundary","drawing-boundary",-2114539322))], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"calculate","calculate",-1224644403),(function (p__38466,_){
var map__38467 = p__38466;
var map__38467__$1 = (((((!((map__38467 == null))))?(((((map__38467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38467):map__38467);
var db = map__38467__$1;
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38467__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38467__$1,new cljs.core.Keyword(null,"point","point",1813198264));
if(exfn.app.is_point_outside_QMARK_(point,points)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"location","location",1815599388),"Outside");
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"location","location",1815599388),"Inside");
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle","toggle",1291842030),(function (p__38469,_){
var map__38470 = p__38469;
var map__38470__$1 = (((((!((map__38470 == null))))?(((((map__38470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38470):map__38470);
var db = map__38470__$1;
var current_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38470__$1,new cljs.core.Keyword(null,"current-action","current-action",423732020));
var toggle = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drawing-boundary","drawing-boundary",-2114539322),new cljs.core.Keyword(null,"selecting-point","selecting-point",-1118332231),new cljs.core.Keyword(null,"selecting-point","selecting-point",-1118332231),new cljs.core.Keyword(null,"drawing-boundary","drawing-boundary",-2114539322)], null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-action","current-action",423732020),(toggle.cljs$core$IFn$_invoke$arity$1 ? toggle.cljs$core$IFn$_invoke$arity$1(current_action) : toggle.call(null,current_action)));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-fill","toggle-fill",-430719852),(function (p__38472,_){
var map__38473 = p__38472;
var map__38473__$1 = (((((!((map__38473 == null))))?(((((map__38473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38473):map__38473);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38473__$1,new cljs.core.Keyword(null,"db","db",993250759));
var should_fill_QMARK_ = cljs.core.not(new cljs.core.Keyword(null,"should-fill","should-fill",1174181753).cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"should-fill","should-fill",1174181753),should_fill_QMARK_),new cljs.core.Keyword(null,"draw-canvas","draw-canvas",-809645924),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(db),should_fill_QMARK_], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"undo","undo",-1818036302),(function (p__38475,_){
var map__38476 = p__38475;
var map__38476__$1 = (((((!((map__38476 == null))))?(((((map__38476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38476):map__38476);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38476__$1,new cljs.core.Keyword(null,"db","db",993250759));
if(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"undo-stack","undo-stack",244619892).cljs$core$IFn$_invoke$arity$1(db))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
} else {
var last_dropped = cljs.core.vec(cljs.core.butlast((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"points","points",-1486596883)) : db.call(null,new cljs.core.Keyword(null,"points","points",-1486596883)))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"points","points",-1486596883),last_dropped),new cljs.core.Keyword(null,"location","location",1815599388),((exfn.app.is_point_outside_QMARK_((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"point","point",1813198264)) : db.call(null,new cljs.core.Keyword(null,"point","point",1813198264))),last_dropped))?"Outside":"Inside")),new cljs.core.Keyword(null,"undo-stack","undo-stack",244619892),cljs.core.pop),new cljs.core.Keyword(null,"redo-stack","redo-stack",-2036358191),cljs.core.conj,(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"points","points",-1486596883)) : db.call(null,new cljs.core.Keyword(null,"points","points",-1486596883)))),new cljs.core.Keyword(null,"draw-canvas","draw-canvas",-809645924),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_dropped,new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"should-fill","should-fill",1174181753).cljs$core$IFn$_invoke$arity$1(db)], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"redo","redo",501190664),(function (p__38478,_){
var map__38479 = p__38478;
var map__38479__$1 = (((((!((map__38479 == null))))?(((((map__38479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38479):map__38479);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38479__$1,new cljs.core.Keyword(null,"db","db",993250759));
if(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"redo-stack","redo-stack",-2036358191).cljs$core$IFn$_invoke$arity$1(db))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
} else {
var new_points = cljs.core.peek(new cljs.core.Keyword(null,"redo-stack","redo-stack",-2036358191).cljs$core$IFn$_invoke$arity$1(db));
var new_undo = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(db);
var new_redo = cljs.core.pop(new cljs.core.Keyword(null,"redo-stack","redo-stack",-2036358191).cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"points","points",-1486596883),new_points),new cljs.core.Keyword(null,"location","location",1815599388),((exfn.app.is_point_outside_QMARK_((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"point","point",1813198264)) : db.call(null,new cljs.core.Keyword(null,"point","point",1813198264))),new_points))?"Outside":"Inside")),new cljs.core.Keyword(null,"redo-stack","redo-stack",-2036358191),new_redo),new cljs.core.Keyword(null,"undo-stack","undo-stack",244619892),new_undo),new cljs.core.Keyword(null,"draw-canvas","draw-canvas",-809645924),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_points,new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"should-fill","should-fill",1174181753).cljs$core$IFn$_invoke$arity$1(db)], null)], null);
}
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"boundary-button-label","boundary-button-label",-1044442624),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"boundary-button-label","boundary-button-label",-1044442624).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-action","current-action",423732020),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"current-action","current-action",423732020).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"location","location",1815599388),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"toggle-label","toggle-label",-1454925513),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__38481){
var map__38482 = p__38481;
var map__38482__$1 = (((((!((map__38482 == null))))?(((((map__38482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38482):map__38482);
var current_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38482__$1,new cljs.core.Keyword(null,"current-action","current-action",423732020));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_action,new cljs.core.Keyword(null,"drawing-boundary","drawing-boundary",-2114539322))){
return "Select Point";
} else {
return "Draw Boundary";
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"point-count","point-count",-234732819),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__38484){
var map__38485 = p__38484;
var map__38485__$1 = (((((!((map__38485 == null))))?(((((map__38485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38485):map__38485);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38485__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
return cljs.core.count(points);
})], 0));
exfn.app.point_canvas = (function exfn$app$point_canvas(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#point-canvas.canvas","canvas#point-canvas.canvas",-1152109391),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point-click","point-click",1703552603),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),e.nativeEvent.offsetX,new cljs.core.Keyword(null,"y","y",-1757859776),e.nativeEvent.offsetY], null)], null));
}),new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"height","height",1025178622),(500)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.current-action","div.current-action",-765149335),(function (){var current_action = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-action","current-action",423732020)], null)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_action,new cljs.core.Keyword(null,"drawing-boundary","drawing-boundary",-2114539322))){
return ["Drawing boundary. Points: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point-count","point-count",-234732819)], null))))].join('');
} else {
return "Selecting Point";
}
})()], null)], null);
});
exfn.app.buttons = (function exfn$app$buttons(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),cljs.core.not(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-action","current-action",423732020)], null))))], null));
})], null),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-label","toggle-label",-1454925513)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-danger","button.btn.btn-danger",533883282),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-boundary","reset-boundary",429140635)], null));
})], null),"Reset boundary"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-fill","toggle-fill",-430719852)], null));
})], null),"Toggle fill"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"undo","undo",-1818036302)], null));
})], null),"Undo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redo","redo",501190664)], null));
})], null),"Redo"], null)], null);
});
exfn.app.location = (function exfn$app$location(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content.result","div.content.result",735469712),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388)], null)))], null);
});
exfn.app.app = (function exfn$app$app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.point_canvas], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.location], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.buttons], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"When calculating the point the algorithm will automatically close the polygon (i.e. make the last point = the first point), which is why it may\n        make it look like its inside while you are drawing."], null)], null);
});
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-canvas","update-canvas",-1619718829)], null));
exfn.app.start = (function exfn$app$start(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.app], null),document.getElementById("app"));
});
exfn.app.init = (function exfn$app$init(){
return exfn.app.start();
});
goog.exportSymbol('exfn.app.init', exfn.app.init);
if((typeof exfn !== 'undefined') && (typeof exfn.app !== 'undefined') && (typeof exfn.app.initialize !== 'undefined')){
} else {
exfn.app.initialize = re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));
}

//# sourceMappingURL=exfn.app.js.map
