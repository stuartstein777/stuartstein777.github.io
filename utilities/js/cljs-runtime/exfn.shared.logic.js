goog.provide('exfn.shared.logic');
exfn.shared.logic.port = (7145);
exfn.shared.logic.incomes = cljs.core.PersistentHashMap.fromArrays(["Misc Income","Premium Bond Prize","Salary","Interest","From Parents","Parking space rental","Poker Winnings","Share Dividends","Transfer In","Selling Items","Work Expenses"],[(37),(17),(14),(15),(33),(16),(19),(36),(21),(20),(18)]);
exfn.shared.logic.expenses = cljs.core.PersistentHashMap.fromArrays(["Study and Courses","Mortgage","Music","Internet and Telephone","Hotel","Concerts","Books and Comics","Haircut","Transfer to ETorro","Transport","Factors","Student Loan Overpayment","Council Tax","Photo Prints","Misc","Eating Out","Night Out / Beers","TV and Entertainment","Digital Subscriptions","Tax Refund","Holiday","Groceries","Transfer Out","Utilities","Clothing","Government Energy Credit"],[(13),(1),(34),(24),(27),(35),(31),(12),(25),(5),(7),(30),(2),(32),(6),(26),(0),(8),(9),(22),(28),(4),(29),(3),(10),(23)]);
exfn.shared.logic.all_categories = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([exfn.shared.logic.incomes,exfn.shared.logic.expenses], 0));
exfn.shared.logic.format_number = (function exfn$shared$logic$format_number(number){
if(cljs.core.truth_(number)){
var formatter = (new Intl.NumberFormat("en-US",({"style": "decimal", "minimumFractionDigits": (2), "maximumFractionDigits": (2)})));
return formatter.format(number);
} else {
return null;
}
});
exfn.shared.logic.base_and_port = ["http://localhost:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exfn.shared.logic.port)].join('');

//# sourceMappingURL=exfn.shared.logic.js.map
