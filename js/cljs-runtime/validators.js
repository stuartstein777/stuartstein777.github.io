goog.provide('main.validators');
main.validators.has_two_arguments_QMARK_ = (function main$validators$has_two_arguments_QMARK_(line){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(line),(3))){
return "";
} else {
return null;
}
});
main.validators.has_one_argument_QMARK_ = (function main$validators$has_one_argument_QMARK_(line){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(line),(2));
});
main.validators.has_no_arguments_QMARK_ = (function main$validators$has_no_arguments_QMARK_(line){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(line),(1));
});
main.validators.first_argument_is_a_register_QMARK_ = (function main$validators$first_argument_is_a_register_QMARK_(line){
return (cljs.core.second(line) instanceof cljs.core.Keyword);
});
main.validators.rules = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mov","mov",605355799),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.validators.has_two_arguments_QMARK_,main.validators.first_argument_is_a_register_QMARK_], null)], null);
main.validators.validate = (function main$validators$validate(lines){
return null;
});

//# sourceMappingURL=validators.js.map
