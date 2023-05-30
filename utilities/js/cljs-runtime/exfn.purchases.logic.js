goog.provide('exfn.purchases.logic');
exfn.purchases.logic.get_store_icon = (function exfn$purchases$logic$get_store_icon(store){
var pred__15229 = cljs.core._EQ_;
var expr__15230 = store;
if(cljs.core.truth_((pred__15229.cljs$core$IFn$_invoke$arity$2 ? pred__15229.cljs$core$IFn$_invoke$arity$2("Playstation",expr__15230) : pred__15229.call(null,"Playstation",expr__15230)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa-brands.fa-playstation","i.fa-brands.fa-playstation",1577624173)], null);
} else {
if(cljs.core.truth_((pred__15229.cljs$core$IFn$_invoke$arity$2 ? pred__15229.cljs$core$IFn$_invoke$arity$2("Google Play",expr__15230) : pred__15229.call(null,"Google Play",expr__15230)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa-brands.fa-google-play","i.fa-brands.fa-google-play",135986002)], null);
} else {
if(cljs.core.truth_((pred__15229.cljs$core$IFn$_invoke$arity$2 ? pred__15229.cljs$core$IFn$_invoke$arity$2("BT",expr__15230) : pred__15229.call(null,"BT",expr__15230)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-phone","i.fas.fa-phone",429684042)], null);
} else {
if(cljs.core.truth_((pred__15229.cljs$core$IFn$_invoke$arity$2 ? pred__15229.cljs$core$IFn$_invoke$arity$2("Microsoft",expr__15230) : pred__15229.call(null,"Microsoft",expr__15230)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa-brands.fa-microsoft","i.fa-brands.fa-microsoft",-879677490)], null);
} else {
if(cljs.core.truth_((pred__15229.cljs$core$IFn$_invoke$arity$2 ? pred__15229.cljs$core$IFn$_invoke$arity$2("Ebay",expr__15230) : pred__15229.call(null,"Ebay",expr__15230)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa-brands.fa-ebay","i.fa-brands.fa-ebay",-1686401945)], null);
} else {
if(cljs.core.truth_((pred__15229.cljs$core$IFn$_invoke$arity$2 ? pred__15229.cljs$core$IFn$_invoke$arity$2("Uber",expr__15230) : pred__15229.call(null,"Uber",expr__15230)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa-brands.fa-uber","i.fa-brands.fa-uber",-1137885421)], null);
} else {
if(cljs.core.truth_((pred__15229.cljs$core$IFn$_invoke$arity$2 ? pred__15229.cljs$core$IFn$_invoke$arity$2("Amazon",expr__15230) : pred__15229.call(null,"Amazon",expr__15230)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa-brands.fa-amazon","i.fa-brands.fa-amazon",1181302742)], null);
} else {
if(cljs.core.truth_((pred__15229.cljs$core$IFn$_invoke$arity$2 ? pred__15229.cljs$core$IFn$_invoke$arity$2("Google",expr__15230) : pred__15229.call(null,"Google",expr__15230)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa-brands.fa-google","i.fa-brands.fa-google",1536443869)], null);
} else {
if(cljs.core.truth_((pred__15229.cljs$core$IFn$_invoke$arity$2 ? pred__15229.cljs$core$IFn$_invoke$arity$2("Flickr",expr__15230) : pred__15229.call(null,"Flickr",expr__15230)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa-brands.fa-flickr","i.fa-brands.fa-flickr",-1078059419)], null);
} else {
if(cljs.core.truth_((pred__15229.cljs$core$IFn$_invoke$arity$2 ? pred__15229.cljs$core$IFn$_invoke$arity$2("Etsy",expr__15230) : pred__15229.call(null,"Etsy",expr__15230)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa-brands.fa-etsy","i.fa-brands.fa-etsy",-2027017704)], null);
} else {
if(cljs.core.truth_((pred__15229.cljs$core$IFn$_invoke$arity$2 ? pred__15229.cljs$core$IFn$_invoke$arity$2("Nationwide",expr__15230) : pred__15229.call(null,"Nationwide",expr__15230)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-bank","i.fas.fa-bank",605435616)], null);
} else {
if(cljs.core.truth_((pred__15229.cljs$core$IFn$_invoke$arity$2 ? pred__15229.cljs$core$IFn$_invoke$arity$2("Font Awesome",expr__15230) : pred__15229.call(null,"Font Awesome",expr__15230)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa-brands.fa-font-awesome","i.fa-brands.fa-font-awesome",1211784284)], null);
} else {
if(cljs.core.truth_((pred__15229.cljs$core$IFn$_invoke$arity$2 ? pred__15229.cljs$core$IFn$_invoke$arity$2("AWS",expr__15230) : pred__15229.call(null,"AWS",expr__15230)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa-brands.fa-aws","i.fa-brands.fa-aws",1932626598)], null);
} else {
if(cljs.core.truth_((pred__15229.cljs$core$IFn$_invoke$arity$2 ? pred__15229.cljs$core$IFn$_invoke$arity$2("Air bnb",expr__15230) : pred__15229.call(null,"Air bnb",expr__15230)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa-brands.fa-airbnb","i.fa-brands.fa-airbnb",454257002)], null);
} else {
if(cljs.core.truth_((pred__15229.cljs$core$IFn$_invoke$arity$2 ? pred__15229.cljs$core$IFn$_invoke$arity$2("Wikipedia",expr__15230) : pred__15229.call(null,"Wikipedia",expr__15230)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa-brands.fa-wikipedia-w","i.fa-brands.fa-wikipedia-w",1960113150)], null);
} else {
if(cljs.core.truth_((pred__15229.cljs$core$IFn$_invoke$arity$2 ? pred__15229.cljs$core$IFn$_invoke$arity$2("NBA",expr__15230) : pred__15229.call(null,"NBA",expr__15230)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-basketball","i.fas.fa-basketball",867913547)], null);
} else {
if(cljs.core.truth_((pred__15229.cljs$core$IFn$_invoke$arity$2 ? pred__15229.cljs$core$IFn$_invoke$arity$2("OVO Energy",expr__15230) : pred__15229.call(null,"OVO Energy",expr__15230)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-bolt","i.fas.fa-bolt",1343160776)], null);
} else {
if(cljs.core.truth_((pred__15229.cljs$core$IFn$_invoke$arity$2 ? pred__15229.cljs$core$IFn$_invoke$arity$2("Grosvenor Casino",expr__15230) : pred__15229.call(null,"Grosvenor Casino",expr__15230)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-dice","i.fas.fa-dice",479155068)], null);
} else {
if(cljs.core.truth_((pred__15229.cljs$core$IFn$_invoke$arity$2 ? pred__15229.cljs$core$IFn$_invoke$arity$2("Glasgow Cabs",expr__15230) : pred__15229.call(null,"Glasgow Cabs",expr__15230)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-taxi","i.fas.fa-taxi",-1279331612)], null);
} else {
if(cljs.core.truth_((pred__15229.cljs$core$IFn$_invoke$arity$2 ? pred__15229.cljs$core$IFn$_invoke$arity$2("Glasgow Taxis",expr__15230) : pred__15229.call(null,"Glasgow Taxis",expr__15230)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-taxi","i.fas.fa-taxi",-1279331612)], null);
} else {
if(cljs.core.truth_((pred__15229.cljs$core$IFn$_invoke$arity$2 ? pred__15229.cljs$core$IFn$_invoke$arity$2("Grangemouth Taxis",expr__15230) : pred__15229.call(null,"Grangemouth Taxis",expr__15230)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-taxi","i.fas.fa-taxi",-1279331612)], null);
} else {
if(cljs.core.truth_((pred__15229.cljs$core$IFn$_invoke$arity$2 ? pred__15229.cljs$core$IFn$_invoke$arity$2("Hampden Taxis",expr__15230) : pred__15229.call(null,"Hampden Taxis",expr__15230)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-taxi","i.fas.fa-taxi",-1279331612)], null);
} else {
if(cljs.core.truth_((pred__15229.cljs$core$IFn$_invoke$arity$2 ? pred__15229.cljs$core$IFn$_invoke$arity$2("Taxi",expr__15230) : pred__15229.call(null,"Taxi",expr__15230)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-taxi","i.fas.fa-taxi",-1279331612)], null);
} else {
if(cljs.core.truth_((pred__15229.cljs$core$IFn$_invoke$arity$2 ? pred__15229.cljs$core$IFn$_invoke$arity$2("CURB",expr__15230) : pred__15229.call(null,"CURB",expr__15230)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-taxi","i.fas.fa-taxi",-1279331612)], null);
} else {
if(cljs.core.truth_((pred__15229.cljs$core$IFn$_invoke$arity$2 ? pred__15229.cljs$core$IFn$_invoke$arity$2("Scotrail",expr__15230) : pred__15229.call(null,"Scotrail",expr__15230)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-train","i.fas.fa-train",2007908616)], null);
} else {
if(cljs.core.truth_((pred__15229.cljs$core$IFn$_invoke$arity$2 ? pred__15229.cljs$core$IFn$_invoke$arity$2("Github",expr__15230) : pred__15229.call(null,"Github",expr__15230)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa-brands.fa-github","i.fa-brands.fa-github",-1039747298)], null);
} else {
return " ";
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
}
}
}
}
});

//# sourceMappingURL=exfn.purchases.logic.js.map
