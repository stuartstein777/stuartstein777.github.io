goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__31296 = e.target.readyState;
var fexpr__31295 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__31295.cljs$core$IFn$_invoke$arity$1 ? fexpr__31295.cljs$core$IFn$_invoke$arity$1(G__31296) : fexpr__31295.call(null,G__31296));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__31386,handler){
var map__31388 = p__31386;
var map__31388__$1 = cljs.core.__destructure_map(map__31388);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31388__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31388__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31388__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31388__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31388__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31388__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31388__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__31384_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__31384_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___31427 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___31427)){
var response_type_31428 = temp__5804__auto___31427;
(this$__$1.responseType = cljs.core.name(response_type_31428));
} else {
}

var seq__31395_31429 = cljs.core.seq(headers);
var chunk__31396_31430 = null;
var count__31397_31431 = (0);
var i__31398_31432 = (0);
while(true){
if((i__31398_31432 < count__31397_31431)){
var vec__31408_31433 = chunk__31396_31430.cljs$core$IIndexed$_nth$arity$2(null,i__31398_31432);
var k_31434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31408_31433,(0),null);
var v_31435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31408_31433,(1),null);
this$__$1.setRequestHeader(k_31434,v_31435);


var G__31436 = seq__31395_31429;
var G__31437 = chunk__31396_31430;
var G__31438 = count__31397_31431;
var G__31439 = (i__31398_31432 + (1));
seq__31395_31429 = G__31436;
chunk__31396_31430 = G__31437;
count__31397_31431 = G__31438;
i__31398_31432 = G__31439;
continue;
} else {
var temp__5804__auto___31440 = cljs.core.seq(seq__31395_31429);
if(temp__5804__auto___31440){
var seq__31395_31441__$1 = temp__5804__auto___31440;
if(cljs.core.chunked_seq_QMARK_(seq__31395_31441__$1)){
var c__5568__auto___31442 = cljs.core.chunk_first(seq__31395_31441__$1);
var G__31443 = cljs.core.chunk_rest(seq__31395_31441__$1);
var G__31444 = c__5568__auto___31442;
var G__31445 = cljs.core.count(c__5568__auto___31442);
var G__31446 = (0);
seq__31395_31429 = G__31443;
chunk__31396_31430 = G__31444;
count__31397_31431 = G__31445;
i__31398_31432 = G__31446;
continue;
} else {
var vec__31412_31447 = cljs.core.first(seq__31395_31441__$1);
var k_31448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31412_31447,(0),null);
var v_31449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31412_31447,(1),null);
this$__$1.setRequestHeader(k_31448,v_31449);


var G__31454 = cljs.core.next(seq__31395_31441__$1);
var G__31455 = null;
var G__31456 = (0);
var G__31457 = (0);
seq__31395_31429 = G__31454;
chunk__31396_31430 = G__31455;
count__31397_31431 = G__31456;
i__31398_31432 = G__31457;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5045__auto__ = body;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
