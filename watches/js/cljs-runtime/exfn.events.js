goog.provide('exfn.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('exfn.interpreter');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"running?","running?",-257884763),false,new cljs.core.Keyword(null,"source","source",-433931539),exfn.interpreter.hello_world], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-source","update-source",-132063591),(function (db,p__32623){
var vec__32624 = p__32623;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32624,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32624,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"source","source",-433931539),source);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-input","update-input",-884820204),(function (db,p__32627){
var vec__32628 = p__32627;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32628,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32628,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"input","input",556931961),input);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"execute","execute",-129499188),(function (db,p__32631){
var vec__32632 = p__32631;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32632,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32632,(1),null);
var source = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(db);
var input = new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"output","output",-1105869043),exfn.interpreter.brain_fuck(source,input));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-example","load-example",-2000474541),(function (db,p__32635){
var vec__32637 = p__32635;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32637,(0),null);
var vec__32640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32637,(1),null);
var example = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32640,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32640,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"source","source",-433931539),example),new cljs.core.Keyword(null,"input","input",556931961),input),new cljs.core.Keyword(null,"output","output",-1105869043),"");
}));

//# sourceMappingURL=exfn.events.js.map
