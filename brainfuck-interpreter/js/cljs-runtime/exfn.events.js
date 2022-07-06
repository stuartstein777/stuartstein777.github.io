goog.provide('exfn.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('exfn.interpreter');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"running?","running?",-257884763),false,new cljs.core.Keyword(null,"source","source",-433931539),"++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++."], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-source","update-source",-132063591),(function (db,p__33214){
var vec__33215 = p__33214;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33215,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33215,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"source","source",-433931539),source);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-input","update-input",-884820204),(function (db,p__33218){
var vec__33219 = p__33218;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33219,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33219,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"input","input",556931961),input);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"execute","execute",-129499188),(function (db,p__33222){
var vec__33223 = p__33222;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33223,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33223,(1),null);
var source = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(db);
var input = new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"output","output",-1105869043),exfn.interpreter.brain_fuck(source,input));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-example","load-example",-2000474541),(function (db,p__33228){
var vec__33229 = p__33228;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33229,(0),null);
var vec__33232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33229,(1),null);
var example = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33232,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33232,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"source","source",-433931539),example),new cljs.core.Keyword(null,"input","input",556931961),input),new cljs.core.Keyword(null,"output","output",-1105869043),"");
}));

//# sourceMappingURL=exfn.events.js.map
