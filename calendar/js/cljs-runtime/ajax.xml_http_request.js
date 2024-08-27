goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__44382 = e.target.readyState;
var fexpr__44381 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__44381.cljs$core$IFn$_invoke$arity$1 ? fexpr__44381.cljs$core$IFn$_invoke$arity$1(G__44382) : fexpr__44381.call(null,G__44382));
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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__44394,handler){
var map__44395 = p__44394;
var map__44395__$1 = cljs.core.__destructure_map(map__44395);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44395__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44395__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44395__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44395__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44395__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44395__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44395__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__44390_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__44390_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___44446 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___44446)){
var response_type_44447 = temp__5753__auto___44446;
(this$__$1.responseType = cljs.core.name(response_type_44447));
} else {
}

var seq__44402_44448 = cljs.core.seq(headers);
var chunk__44403_44449 = null;
var count__44404_44450 = (0);
var i__44405_44451 = (0);
while(true){
if((i__44405_44451 < count__44404_44450)){
var vec__44416_44453 = chunk__44403_44449.cljs$core$IIndexed$_nth$arity$2(null,i__44405_44451);
var k_44454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44416_44453,(0),null);
var v_44455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44416_44453,(1),null);
this$__$1.setRequestHeader(k_44454,v_44455);


var G__44457 = seq__44402_44448;
var G__44458 = chunk__44403_44449;
var G__44459 = count__44404_44450;
var G__44460 = (i__44405_44451 + (1));
seq__44402_44448 = G__44457;
chunk__44403_44449 = G__44458;
count__44404_44450 = G__44459;
i__44405_44451 = G__44460;
continue;
} else {
var temp__5753__auto___44461 = cljs.core.seq(seq__44402_44448);
if(temp__5753__auto___44461){
var seq__44402_44462__$1 = temp__5753__auto___44461;
if(cljs.core.chunked_seq_QMARK_(seq__44402_44462__$1)){
var c__4649__auto___44463 = cljs.core.chunk_first(seq__44402_44462__$1);
var G__44464 = cljs.core.chunk_rest(seq__44402_44462__$1);
var G__44465 = c__4649__auto___44463;
var G__44466 = cljs.core.count(c__4649__auto___44463);
var G__44467 = (0);
seq__44402_44448 = G__44464;
chunk__44403_44449 = G__44465;
count__44404_44450 = G__44466;
i__44405_44451 = G__44467;
continue;
} else {
var vec__44423_44469 = cljs.core.first(seq__44402_44462__$1);
var k_44470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44423_44469,(0),null);
var v_44471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44423_44469,(1),null);
this$__$1.setRequestHeader(k_44470,v_44471);


var G__44472 = cljs.core.next(seq__44402_44462__$1);
var G__44473 = null;
var G__44474 = (0);
var G__44475 = (0);
seq__44402_44448 = G__44472;
chunk__44403_44449 = G__44473;
count__44404_44450 = G__44474;
i__44405_44451 = G__44475;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4223__auto__ = body;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
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
