goog.provide('exfn.app');
goog.require('cljs.core');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('exfn.subscriptions');
goog.require('exfn.events');
goog.require('exfn.logic');
goog.require('goog.string.format');
exfn.app.pad_zero = (function exfn$app$pad_zero(n){
if((n < (10))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(n);
}
});
exfn.app.x__GT_svg = (function exfn$app$x__GT_svg(x){
var G__29509 = x;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((7),G__29509)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 320 512",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"height","height",1025178622),"50%",new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"black","black",1294279647)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M315.6 80.14l-224 384c-5.953 10.19-16.66 15.88-27.67 15.88c-5.469 0-11.02-1.406-16.09-4.359c-15.27-8.906-20.42-28.5-11.52-43.77l195.9-335.9H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h256c11.45 0 22.05 6.125 27.75 16.06S321.4 70.23 315.6 80.14z"], null)], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),G__29509)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],[new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"blue","blue",-622100620),"50%","http://www.w3.org/2000/svg",(0),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016),"0 0 256 512","50%","0 auto"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M256 448c0 17.67-14.33 32-32 32H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h64V123.8L49.75 154.6C35.02 164.5 15.19 160.4 5.375 145.8C-4.422 131.1-.4531 111.2 14.25 101.4l96-64c9.828-6.547 22.45-7.187 32.84-1.594C153.5 41.37 160 52.22 160 64.01v352h64C241.7 416 256 430.3 256 448z"], null)], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),G__29509)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 320 512",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"height","height",1025178622),"50%",new cljs.core.Keyword(null,"fill","fill",883462889),"#050954"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M384 334.2c0 17.67-14.33 32-32 32h-32v81.78c0 17.67-14.33 32-32 32s-32-14.33-32-32v-81.78H32c-10.97 0-21.17-5.625-27.05-14.89c-5.859-9.266-6.562-20.89-1.875-30.81l128-270.2C138.6 34.33 157.8 27.56 173.7 35.09c15.97 7.562 22.78 26.66 15.22 42.63L82.56 302.2H256V160c0-17.67 14.33-32 32-32s32 14.33 32 32v142.2h32C369.7 302.2 384 316.6 384 334.2z"], null)], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flag","flag",1088647881),G__29509)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 512 512",new cljs.core.Keyword(null,"width","width",-384071477),"75%",new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"brown","brown",1414854429)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"], null)], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),G__29509)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 320 512",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"height","height",1025178622),"50%",new cljs.core.Keyword(null,"fill","fill",883462889),"#10d8e3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M167.7 160.8l64.65-76.06c11.47-13.45 9.812-33.66-3.656-45.09C222.7 34.51 215.3 32.01 208 32.01c-9.062 0-18.06 3.833-24.38 11.29C38.07 214.5 0 245.5 0 320c0 88.22 71.78 160 160 160s160-71.78 160-160C320 234.4 252.3 164.9 167.7 160.8zM160 416c-52.94 0-96-43.06-96-96s43.06-95.1 96-95.1s96 43.06 96 95.1S212.9 416 160 416z"], null)], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mine","mine",-130428525),G__29509)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 570 540",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"brown","brown",1414854429)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M575.5 283.5c-13.13-39.11-39.5-71.98-74.13-92.35c-17.5-10.37-36.25-16.62-55.25-19.87c6-17.75 10-36.49 10-56.24c0-40.99-14.5-80.73-41-112.2c-2.5-3-6.625-3.623-10-1.75c-3.25 1.875-4.75 5.998-3.625 9.748c4.5 13.75 6.625 26.24 6.625 38.49c0 67.73-53.76 122.8-120 122.8s-120-55.11-120-122.8c0-12.12 2.25-24.74 6.625-38.49c1.125-3.75-.375-7.873-3.625-9.748c-3.375-1.873-7.502-1.25-10 1.75C134.7 34.3 120.1 74.04 120.1 115c0 19.75 3.875 38.49 10 56.24C111.2 174.5 92.32 180.8 74.82 191.1c-34.63 20.49-61.01 53.24-74.38 92.35c-1.25 3.75 .25 7.748 3.5 9.748c3.375 2 7.5 1.375 10-1.5c9.377-10.87 19-19.12 29.25-25.12c57.25-33.87 130.8-13.75 163.9 44.99c33.13 58.61 13.38 133.1-43.88 167.8c-10.25 6.123-22 10.37-35.88 13.37c-3.627 .875-6.377 4.25-6.377 8.123c.125 4 2.75 7.248 6.502 7.998c39.75 7.748 80.63 .7495 115.3-19.74c18-10.5 32.88-24.49 45.25-39.99c12.38 15.5 27.38 29.49 45.38 39.99c34.5 20.49 75.51 27.49 115.1 19.74c3.875-.75 6.375-3.998 6.5-7.998c0-3.873-2.625-7.248-6.375-8.123c-13.88-2.873-25.63-7.248-35.75-13.37c-57.38-33.87-77.01-109.2-44-167.8c33.13-58.73 106.6-78.85 164-44.99c10.12 6.123 19.75 14.25 29.13 25.12c2.5 2.875 6.752 3.5 10 1.5C575.4 291.2 576.9 287.2 575.5 283.5zM287.1 320.1c-26.5 0-48-21.49-48-47.99c0-26.49 21.5-47.99 48-47.99c26.5 0 48.01 21.49 48.01 47.99C335.1 298.6 314.5 320.1 287.1 320.1zM385 377.6c1.152 22.77 10.74 44.63 27.22 60.92c47.45-35.44 79.13-90.58 83.1-153.4c-22.58-6.173-45.69-2.743-65.57 8.76C424.7 326.9 408.5 355.1 385 377.6zM253.3 132.6c26.22-6.551 45.37-6.024 69.52 .0254c21.93-9.777 39.07-28.55 47.48-51.75C345 69.98 317.3 63.94 288.1 63.94c-29.18 0-56.96 5.986-82.16 16.84C214.3 103.1 231.4 122.8 253.3 132.6zM163.8 438.5c16.46-16.26 26.03-38.19 27.14-61.01c-23.49-21.59-39.59-50.67-44.71-83.6C126.9 282.7 103.8 278.8 80.67 285.1C84.64 347.9 116.3 403.1 163.8 438.5z"], null)], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),G__29509)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 320 512",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"height","height",1025178622),"50%",new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"red","red",-969428204)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M320 344c0 74.98-61.02 136-136 136H103.6c-46.34 0-87.31-29.53-101.1-73.48c-5.594-16.77 3.484-34.88 20.25-40.47c16.75-5.609 34.89 3.484 40.47 20.25c5.922 17.77 22.48 29.7 41.23 29.7H184c39.7 0 72-32.3 72-72s-32.3-72-72-72H80c-13.2 0-25.05-8.094-29.83-20.41C45.39 239.3 48.66 225.3 58.38 216.4l131.4-120.4H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h240c13.2 0 25.05 8.094 29.83 20.41c4.781 12.3 1.516 26.27-8.203 35.19l-131.4 120.4H184C258.1 208 320 269 320 344z"], null)], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),G__29509)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 320 512",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"height","height",1025178622),"50%",new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"green","green",-945526839)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M320 448c0 17.67-14.33 32-32 32H32c-13.08 0-24.83-7.953-29.7-20.09c-4.859-12.12-1.859-26 7.594-35.03l193.6-185.1c31.36-30.17 33.95-80 5.812-113.4c-14.91-17.69-35.86-28.12-58.97-29.38C127.4 95.83 105.3 103.9 88.53 119.9L53.52 151.7c-13.08 11.91-33.33 10.89-45.2-2.172C-3.563 136.5-2.594 116.2 10.48 104.3l34.45-31.3c28.67-27.34 68.39-42.11 108.9-39.88c40.33 2.188 78.39 21.16 104.4 52.03c49.8 59.05 45.2 147.3-10.45 200.8l-136 130H288C305.7 416 320 430.3 320 448z"], null)], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),G__29509)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 320 512",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"height","height",1025178622),"50%",new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"navy","navy",1626342120)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M320 344.6c0 74.66-60.73 135.4-135.4 135.4H104.7c-46.81 0-88.22-29.83-103-74.23c-5.594-16.77 3.469-34.89 20.23-40.48c16.83-5.625 34.91 3.469 40.48 20.23c6.078 18.23 23.08 30.48 42.3 30.48h79.95c39.36 0 71.39-32.03 71.39-71.39s-32.03-71.38-71.39-71.38H32c-9.484 0-18.47-4.203-24.56-11.48C1.359 254.5-1.172 244.9 .5156 235.6l32-177.2C35.27 43.09 48.52 32.01 64 32.01l192 .0049c17.67 0 32 14.33 32 32s-14.33 32-32 32H90.73L70.3 209.2h114.3C259.3 209.2 320 269.1 320 344.6z"], null)], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),G__29509)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 320 512",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"height","height",1025178622),"50%",new cljs.core.Keyword(null,"fill","fill",883462889),"#4e4f4f",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M267.5 249.2C290 226.1 304 194.7 304 160c0-70.58-57.42-128-128-128h-32c-70.58 0-128 57.42-128 128c0 34.7 13.99 66.12 36.48 89.19C20.83 272.5 0 309.8 0 352c0 70.58 57.42 128 128 128h64c70.58 0 128-57.42 128-128C320 309.8 299.2 272.5 267.5 249.2zM144 96.01h32c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32c-35.3 0-64-28.7-64-64S108.7 96.01 144 96.01zM192 416H128c-35.3 0-64-28.7-64-64s28.7-64 64-64h64c35.3 0 64 28.7 64 64S227.3 416 192 416z"], null)], null)], null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29509)].join('')));

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
exfn.app.board = (function exfn$app$board(){
var board = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null)));
var board_width = cljs.core.count(board);
var side_length = ((896) / board_width);
var revealed = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"revealed","revealed",-1090849585)], null)));
var flags = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flags","flags",1775418075)], null)));
var game_won_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835)], null)));
var game_over_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-over?","game-over?",432859304)], null)));
var ticking_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ticking?","ticking?",523217754)], null)));
var started_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"started?","started?",-1301062863)], null)));
var paused_QMARK_ = (function (){var and__4115__auto__ = started_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(ticking_QMARK_);
} else {
return and__4115__auto__;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4529__auto__ = (function exfn$app$board_$_iter__29510(s__29511){
return (new cljs.core.LazySeq(null,(function (){
var s__29511__$1 = s__29511;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29511__$1);
if(temp__5735__auto__){
var s__29511__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29511__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__29511__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__29513 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__29512 = (0);
while(true){
if((i__29512 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__29512);
cljs.core.chunk_append(b__29513,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),side_length,new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null)], null),(function (){var iter__4529__auto__ = ((function (i__29512,x,c__4527__auto__,size__4528__auto__,b__29513,s__29511__$2,temp__5735__auto__,board,board_width,side_length,revealed,flags,game_won_QMARK_,game_over_QMARK_,ticking_QMARK_,started_QMARK_,paused_QMARK_){
return (function exfn$app$board_$_iter__29510_$_iter__29514(s__29515){
return (new cljs.core.LazySeq(null,((function (i__29512,x,c__4527__auto__,size__4528__auto__,b__29513,s__29511__$2,temp__5735__auto__,board,board_width,side_length,revealed,flags,game_won_QMARK_,game_over_QMARK_,ticking_QMARK_,started_QMARK_,paused_QMARK_){
return (function (){
var s__29515__$1 = s__29515;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__29515__$1);
if(temp__5735__auto____$1){
var s__29515__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29515__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__29515__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__29517 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__29516 = (0);
while(true){
if((i__29516 < size__4528__auto____$1)){
var y = cljs.core._nth(c__4527__auto____$1,i__29516);
cljs.core.chunk_append(b__29517,(function (){var cell_contents = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-cell","div.board-cell",1945585078),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),side_length,new cljs.core.Keyword(null,"height","height",1025178622),side_length], null),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var and__4115__auto__ = started_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(ticking_QMARK_);
} else {
return and__4115__auto__;
}
})())?"paused-cell":(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__29520 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return (revealed.cljs$core$IFn$_invoke$arity$1 ? revealed.cljs$core$IFn$_invoke$arity$1(G__29520) : revealed.call(null,G__29520));
})();
if(cljs.core.truth_(and__4115__auto__)){
return typeof cell_contents === 'number';
} else {
return and__4115__auto__;
}
})())?"revealed-cell":"unrevealed-cell"
)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29516,i__29512,cell_contents,y,c__4527__auto____$1,size__4528__auto____$1,b__29517,s__29515__$2,temp__5735__auto____$1,x,c__4527__auto__,size__4528__auto__,b__29513,s__29511__$2,temp__5735__auto__,board,board_width,side_length,revealed,flags,game_won_QMARK_,game_over_QMARK_,ticking_QMARK_,started_QMARK_,paused_QMARK_){
return (function (_){
if(cljs.core.not((function (){var or__4126__auto__ = game_over_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = game_won_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return paused_QMARK_;
}
}
})())){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-timer","start-timer",1546455416)], null));

return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-click","cell-click",323295235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));
} else {
return null;
}
});})(i__29516,i__29512,cell_contents,y,c__4527__auto____$1,size__4528__auto____$1,b__29517,s__29515__$2,temp__5735__auto____$1,x,c__4527__auto__,size__4528__auto__,b__29513,s__29511__$2,temp__5735__auto__,board,board_width,side_length,revealed,flags,game_won_QMARK_,game_over_QMARK_,ticking_QMARK_,started_QMARK_,paused_QMARK_))
,new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),((function (i__29516,i__29512,cell_contents,y,c__4527__auto____$1,size__4528__auto____$1,b__29517,s__29515__$2,temp__5735__auto____$1,x,c__4527__auto__,size__4528__auto__,b__29513,s__29511__$2,temp__5735__auto__,board,board_width,side_length,revealed,flags,game_won_QMARK_,game_over_QMARK_,ticking_QMARK_,started_QMARK_,paused_QMARK_){
return (function (e){
if(cljs.core.not((function (){var or__4126__auto__ = game_over_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = game_won_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return paused_QMARK_;
}
}
})())){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-timer","start-timer",1546455416)], null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-flag","toggle-flag",1517068136),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));

e.preventDefault();

return e.stopPropagation();
} else {
e.preventDefault();

return e.stopPropagation();
}
});})(i__29516,i__29512,cell_contents,y,c__4527__auto____$1,size__4528__auto____$1,b__29517,s__29515__$2,temp__5735__auto____$1,x,c__4527__auto__,size__4528__auto__,b__29513,s__29511__$2,temp__5735__auto__,board,board_width,side_length,revealed,flags,game_won_QMARK_,game_over_QMARK_,ticking_QMARK_,started_QMARK_,paused_QMARK_))
], null),((cljs.core.not(ticking_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null):(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = game_over_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return game_won_QMARK_;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cell_contents,new cljs.core.Keyword(null,"mine","mine",-130428525));
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),exfn.app.x__GT_svg(new cljs.core.Keyword(null,"mine","mine",-130428525))], null):(cljs.core.truth_(((cljs.core.not((function (){var G__29524 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return (revealed.cljs$core$IFn$_invoke$arity$1 ? revealed.cljs$core$IFn$_invoke$arity$1(G__29524) : revealed.call(null,G__29524));
})()))?(function (){var G__29525 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return (flags.cljs$core$IFn$_invoke$arity$1 ? flags.cljs$core$IFn$_invoke$arity$1(G__29525) : flags.call(null,G__29525));
})():false))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.flag","p.flag",-1923968857),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),exfn.app.x__GT_svg(new cljs.core.Keyword(null,"flag","flag",1088647881))], null):(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__29528 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return (revealed.cljs$core$IFn$_invoke$arity$1 ? revealed.cljs$core$IFn$_invoke$arity$1(G__29528) : revealed.call(null,G__29528));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (cell_contents > (0));
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.number","p.number",387644229),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),side_length,new cljs.core.Keyword(null,"width","width",-384071477),side_length], null)], null),exfn.app.x__GT_svg(cell_contents)], null):null))))], null);
})());

var G__29566 = (i__29516 + (1));
i__29516 = G__29566;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29517),exfn$app$board_$_iter__29510_$_iter__29514(cljs.core.chunk_rest(s__29515__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29517),null);
}
} else {
var y = cljs.core.first(s__29515__$2);
return cljs.core.cons((function (){var cell_contents = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-cell","div.board-cell",1945585078),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),side_length,new cljs.core.Keyword(null,"height","height",1025178622),side_length], null),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var and__4115__auto__ = started_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(ticking_QMARK_);
} else {
return and__4115__auto__;
}
})())?"paused-cell":(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__29531 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return (revealed.cljs$core$IFn$_invoke$arity$1 ? revealed.cljs$core$IFn$_invoke$arity$1(G__29531) : revealed.call(null,G__29531));
})();
if(cljs.core.truth_(and__4115__auto__)){
return typeof cell_contents === 'number';
} else {
return and__4115__auto__;
}
})())?"revealed-cell":"unrevealed-cell"
)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29512,cell_contents,y,s__29515__$2,temp__5735__auto____$1,x,c__4527__auto__,size__4528__auto__,b__29513,s__29511__$2,temp__5735__auto__,board,board_width,side_length,revealed,flags,game_won_QMARK_,game_over_QMARK_,ticking_QMARK_,started_QMARK_,paused_QMARK_){
return (function (_){
if(cljs.core.not((function (){var or__4126__auto__ = game_over_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = game_won_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return paused_QMARK_;
}
}
})())){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-timer","start-timer",1546455416)], null));

return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-click","cell-click",323295235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));
} else {
return null;
}
});})(i__29512,cell_contents,y,s__29515__$2,temp__5735__auto____$1,x,c__4527__auto__,size__4528__auto__,b__29513,s__29511__$2,temp__5735__auto__,board,board_width,side_length,revealed,flags,game_won_QMARK_,game_over_QMARK_,ticking_QMARK_,started_QMARK_,paused_QMARK_))
,new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),((function (i__29512,cell_contents,y,s__29515__$2,temp__5735__auto____$1,x,c__4527__auto__,size__4528__auto__,b__29513,s__29511__$2,temp__5735__auto__,board,board_width,side_length,revealed,flags,game_won_QMARK_,game_over_QMARK_,ticking_QMARK_,started_QMARK_,paused_QMARK_){
return (function (e){
if(cljs.core.not((function (){var or__4126__auto__ = game_over_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = game_won_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return paused_QMARK_;
}
}
})())){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-timer","start-timer",1546455416)], null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-flag","toggle-flag",1517068136),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));

e.preventDefault();

return e.stopPropagation();
} else {
e.preventDefault();

return e.stopPropagation();
}
});})(i__29512,cell_contents,y,s__29515__$2,temp__5735__auto____$1,x,c__4527__auto__,size__4528__auto__,b__29513,s__29511__$2,temp__5735__auto__,board,board_width,side_length,revealed,flags,game_won_QMARK_,game_over_QMARK_,ticking_QMARK_,started_QMARK_,paused_QMARK_))
], null),((cljs.core.not(ticking_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null):(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = game_over_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return game_won_QMARK_;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cell_contents,new cljs.core.Keyword(null,"mine","mine",-130428525));
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),exfn.app.x__GT_svg(new cljs.core.Keyword(null,"mine","mine",-130428525))], null):(cljs.core.truth_(((cljs.core.not((function (){var G__29535 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return (revealed.cljs$core$IFn$_invoke$arity$1 ? revealed.cljs$core$IFn$_invoke$arity$1(G__29535) : revealed.call(null,G__29535));
})()))?(function (){var G__29536 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return (flags.cljs$core$IFn$_invoke$arity$1 ? flags.cljs$core$IFn$_invoke$arity$1(G__29536) : flags.call(null,G__29536));
})():false))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.flag","p.flag",-1923968857),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),exfn.app.x__GT_svg(new cljs.core.Keyword(null,"flag","flag",1088647881))], null):(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__29539 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return (revealed.cljs$core$IFn$_invoke$arity$1 ? revealed.cljs$core$IFn$_invoke$arity$1(G__29539) : revealed.call(null,G__29539));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (cell_contents > (0));
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.number","p.number",387644229),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),side_length,new cljs.core.Keyword(null,"width","width",-384071477),side_length], null)], null),exfn.app.x__GT_svg(cell_contents)], null):null))))], null);
})(),exfn$app$board_$_iter__29510_$_iter__29514(cljs.core.rest(s__29515__$2)));
}
} else {
return null;
}
break;
}
});})(i__29512,x,c__4527__auto__,size__4528__auto__,b__29513,s__29511__$2,temp__5735__auto__,board,board_width,side_length,revealed,flags,game_won_QMARK_,game_over_QMARK_,ticking_QMARK_,started_QMARK_,paused_QMARK_))
,null,null));
});})(i__29512,x,c__4527__auto__,size__4528__auto__,b__29513,s__29511__$2,temp__5735__auto__,board,board_width,side_length,revealed,flags,game_won_QMARK_,game_over_QMARK_,ticking_QMARK_,started_QMARK_,paused_QMARK_))
;
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(board_width));
})()], null));

var G__29567 = (i__29512 + (1));
i__29512 = G__29567;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29513),exfn$app$board_$_iter__29510(cljs.core.chunk_rest(s__29511__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29513),null);
}
} else {
var x = cljs.core.first(s__29511__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),side_length,new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null)], null),(function (){var iter__4529__auto__ = ((function (x,s__29511__$2,temp__5735__auto__,board,board_width,side_length,revealed,flags,game_won_QMARK_,game_over_QMARK_,ticking_QMARK_,started_QMARK_,paused_QMARK_){
return (function exfn$app$board_$_iter__29510_$_iter__29540(s__29541){
return (new cljs.core.LazySeq(null,(function (){
var s__29541__$1 = s__29541;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__29541__$1);
if(temp__5735__auto____$1){
var s__29541__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29541__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__29541__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__29543 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__29542 = (0);
while(true){
if((i__29542 < size__4528__auto__)){
var y = cljs.core._nth(c__4527__auto__,i__29542);
cljs.core.chunk_append(b__29543,(function (){var cell_contents = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-cell","div.board-cell",1945585078),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),side_length,new cljs.core.Keyword(null,"height","height",1025178622),side_length], null),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var and__4115__auto__ = started_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(ticking_QMARK_);
} else {
return and__4115__auto__;
}
})())?"paused-cell":(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__29546 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return (revealed.cljs$core$IFn$_invoke$arity$1 ? revealed.cljs$core$IFn$_invoke$arity$1(G__29546) : revealed.call(null,G__29546));
})();
if(cljs.core.truth_(and__4115__auto__)){
return typeof cell_contents === 'number';
} else {
return and__4115__auto__;
}
})())?"revealed-cell":"unrevealed-cell"
)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29542,cell_contents,y,c__4527__auto__,size__4528__auto__,b__29543,s__29541__$2,temp__5735__auto____$1,x,s__29511__$2,temp__5735__auto__,board,board_width,side_length,revealed,flags,game_won_QMARK_,game_over_QMARK_,ticking_QMARK_,started_QMARK_,paused_QMARK_){
return (function (_){
if(cljs.core.not((function (){var or__4126__auto__ = game_over_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = game_won_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return paused_QMARK_;
}
}
})())){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-timer","start-timer",1546455416)], null));

return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-click","cell-click",323295235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));
} else {
return null;
}
});})(i__29542,cell_contents,y,c__4527__auto__,size__4528__auto__,b__29543,s__29541__$2,temp__5735__auto____$1,x,s__29511__$2,temp__5735__auto__,board,board_width,side_length,revealed,flags,game_won_QMARK_,game_over_QMARK_,ticking_QMARK_,started_QMARK_,paused_QMARK_))
,new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),((function (i__29542,cell_contents,y,c__4527__auto__,size__4528__auto__,b__29543,s__29541__$2,temp__5735__auto____$1,x,s__29511__$2,temp__5735__auto__,board,board_width,side_length,revealed,flags,game_won_QMARK_,game_over_QMARK_,ticking_QMARK_,started_QMARK_,paused_QMARK_){
return (function (e){
if(cljs.core.not((function (){var or__4126__auto__ = game_over_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = game_won_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return paused_QMARK_;
}
}
})())){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-timer","start-timer",1546455416)], null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-flag","toggle-flag",1517068136),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));

e.preventDefault();

return e.stopPropagation();
} else {
e.preventDefault();

return e.stopPropagation();
}
});})(i__29542,cell_contents,y,c__4527__auto__,size__4528__auto__,b__29543,s__29541__$2,temp__5735__auto____$1,x,s__29511__$2,temp__5735__auto__,board,board_width,side_length,revealed,flags,game_won_QMARK_,game_over_QMARK_,ticking_QMARK_,started_QMARK_,paused_QMARK_))
], null),((cljs.core.not(ticking_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null):(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = game_over_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return game_won_QMARK_;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cell_contents,new cljs.core.Keyword(null,"mine","mine",-130428525));
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),exfn.app.x__GT_svg(new cljs.core.Keyword(null,"mine","mine",-130428525))], null):(cljs.core.truth_(((cljs.core.not((function (){var G__29550 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return (revealed.cljs$core$IFn$_invoke$arity$1 ? revealed.cljs$core$IFn$_invoke$arity$1(G__29550) : revealed.call(null,G__29550));
})()))?(function (){var G__29551 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return (flags.cljs$core$IFn$_invoke$arity$1 ? flags.cljs$core$IFn$_invoke$arity$1(G__29551) : flags.call(null,G__29551));
})():false))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.flag","p.flag",-1923968857),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),exfn.app.x__GT_svg(new cljs.core.Keyword(null,"flag","flag",1088647881))], null):(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__29554 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return (revealed.cljs$core$IFn$_invoke$arity$1 ? revealed.cljs$core$IFn$_invoke$arity$1(G__29554) : revealed.call(null,G__29554));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (cell_contents > (0));
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.number","p.number",387644229),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),side_length,new cljs.core.Keyword(null,"width","width",-384071477),side_length], null)], null),exfn.app.x__GT_svg(cell_contents)], null):null))))], null);
})());

var G__29568 = (i__29542 + (1));
i__29542 = G__29568;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29543),exfn$app$board_$_iter__29510_$_iter__29540(cljs.core.chunk_rest(s__29541__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29543),null);
}
} else {
var y = cljs.core.first(s__29541__$2);
return cljs.core.cons((function (){var cell_contents = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-cell","div.board-cell",1945585078),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),side_length,new cljs.core.Keyword(null,"height","height",1025178622),side_length], null),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var and__4115__auto__ = started_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(ticking_QMARK_);
} else {
return and__4115__auto__;
}
})())?"paused-cell":(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__29557 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return (revealed.cljs$core$IFn$_invoke$arity$1 ? revealed.cljs$core$IFn$_invoke$arity$1(G__29557) : revealed.call(null,G__29557));
})();
if(cljs.core.truth_(and__4115__auto__)){
return typeof cell_contents === 'number';
} else {
return and__4115__auto__;
}
})())?"revealed-cell":"unrevealed-cell"
)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cell_contents,y,s__29541__$2,temp__5735__auto____$1,x,s__29511__$2,temp__5735__auto__,board,board_width,side_length,revealed,flags,game_won_QMARK_,game_over_QMARK_,ticking_QMARK_,started_QMARK_,paused_QMARK_){
return (function (_){
if(cljs.core.not((function (){var or__4126__auto__ = game_over_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = game_won_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return paused_QMARK_;
}
}
})())){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-timer","start-timer",1546455416)], null));

return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-click","cell-click",323295235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));
} else {
return null;
}
});})(cell_contents,y,s__29541__$2,temp__5735__auto____$1,x,s__29511__$2,temp__5735__auto__,board,board_width,side_length,revealed,flags,game_won_QMARK_,game_over_QMARK_,ticking_QMARK_,started_QMARK_,paused_QMARK_))
,new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),((function (cell_contents,y,s__29541__$2,temp__5735__auto____$1,x,s__29511__$2,temp__5735__auto__,board,board_width,side_length,revealed,flags,game_won_QMARK_,game_over_QMARK_,ticking_QMARK_,started_QMARK_,paused_QMARK_){
return (function (e){
if(cljs.core.not((function (){var or__4126__auto__ = game_over_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = game_won_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return paused_QMARK_;
}
}
})())){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-timer","start-timer",1546455416)], null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-flag","toggle-flag",1517068136),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));

e.preventDefault();

return e.stopPropagation();
} else {
e.preventDefault();

return e.stopPropagation();
}
});})(cell_contents,y,s__29541__$2,temp__5735__auto____$1,x,s__29511__$2,temp__5735__auto__,board,board_width,side_length,revealed,flags,game_won_QMARK_,game_over_QMARK_,ticking_QMARK_,started_QMARK_,paused_QMARK_))
], null),((cljs.core.not(ticking_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null):(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = game_over_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return game_won_QMARK_;
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cell_contents,new cljs.core.Keyword(null,"mine","mine",-130428525));
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),exfn.app.x__GT_svg(new cljs.core.Keyword(null,"mine","mine",-130428525))], null):(cljs.core.truth_(((cljs.core.not((function (){var G__29561 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return (revealed.cljs$core$IFn$_invoke$arity$1 ? revealed.cljs$core$IFn$_invoke$arity$1(G__29561) : revealed.call(null,G__29561));
})()))?(function (){var G__29562 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return (flags.cljs$core$IFn$_invoke$arity$1 ? flags.cljs$core$IFn$_invoke$arity$1(G__29562) : flags.call(null,G__29562));
})():false))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.flag","p.flag",-1923968857),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),exfn.app.x__GT_svg(new cljs.core.Keyword(null,"flag","flag",1088647881))], null):(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__29565 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return (revealed.cljs$core$IFn$_invoke$arity$1 ? revealed.cljs$core$IFn$_invoke$arity$1(G__29565) : revealed.call(null,G__29565));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (cell_contents > (0));
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.number","p.number",387644229),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),side_length,new cljs.core.Keyword(null,"width","width",-384071477),side_length], null)], null),exfn.app.x__GT_svg(cell_contents)], null):null))))], null);
})(),exfn$app$board_$_iter__29510_$_iter__29540(cljs.core.rest(s__29541__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(x,s__29511__$2,temp__5735__auto__,board,board_width,side_length,revealed,flags,game_won_QMARK_,game_over_QMARK_,ticking_QMARK_,started_QMARK_,paused_QMARK_))
;
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(board_width));
})()], null),exfn$app$board_$_iter__29510(cljs.core.rest(s__29511__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(board_width));
})()], null);
});
exfn.app.app = (function exfn$app$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Minesweeper"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board","div.board",905832129),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.board], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),(function (){var game_over_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-over?","game-over?",432859304)], null)));
var mines = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mines","mines",-1960796490)], null)));
var flags = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flags","flags",1775418075)], null)));
var game_won_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835)], null)));
var time = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null)));
var paused_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ticking?","ticking?",523217754)], null)));
var started_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"started?","started?",-1301062863)], null)));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-flag.mines","i.fas.fa-flag.mines",-1962480581)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mines","p.mines",1435794609),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(flags)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mines)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-clock.mines","i.fas.fa-clock.mines",-268429866)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mines","p.mines",1435794609),[exfn.app.pad_zero(cljs.core.quot(time,(60))),":",exfn.app.pad_zero(cljs.core.rem(time,(60)))].join('')], null),(cljs.core.truth_(paused_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-pause.mines","i.fas.fa-pause.mines",-1883159411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2.5em",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),(20),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_((function (){var and__4115__auto__ = started_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not(game_over_QMARK_)) && (cljs.core.not(game_won_QMARK_)));
} else {
return and__4115__auto__;
}
})())?new cljs.core.Keyword(null,"inline","inline",1399884222):new cljs.core.Keyword(null,"none","none",1333468478))], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
if(((cljs.core.not(game_over_QMARK_)) && (cljs.core.not(game_won_QMARK_)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pause","pause",-2095325672)], null));
} else {
return null;
}
})], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-play.mines","i.fas.fa-play.mines",686873581),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2.5em",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),(20),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_((function (){var and__4115__auto__ = started_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not(game_over_QMARK_)) && (cljs.core.not(game_won_QMARK_)));
} else {
return and__4115__auto__;
}
})())?new cljs.core.Keyword(null,"inline","inline",1399884222):new cljs.core.Keyword(null,"none","none",1333468478))], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
if(((cljs.core.not(game_over_QMARK_)) && (cljs.core.not(game_won_QMARK_)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pause","pause",-2095325672)], null));
} else {
return null;
}
})], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-primary","button.btn-primary",462664968),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"150px",new cljs.core.Keyword(null,"height","height",1025178622),"150px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline","inline",1399884222)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop-timer","stop-timer",1989899960)], null));

return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(40)], null)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"New Game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"(16x16 - 40 mines)"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-primary","button.btn-primary",462664968),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"150px",new cljs.core.Keyword(null,"height","height",1025178622),"150px",new cljs.core.Keyword(null,"margin","margin",-995903681),(10),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline","inline",1399884222)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop-timer","stop-timer",1989899960)], null));

return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(10)], null)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"New Game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"(8x8 - 10 mines)"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-primary","button.btn-primary",462664968),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"150px",new cljs.core.Keyword(null,"height","height",1025178622),"150px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline","inline",1399884222)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop-timer","stop-timer",1989899960)], null));

return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(50)], null)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"New Game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"(24x24 - 50 mines)"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.game-over","p.game-over",107377719),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_((function (){var or__4126__auto__ = game_over_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return game_won_QMARK_;
}
})())?new cljs.core.Keyword(null,"inline","inline",1399884222):new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(game_over_QMARK_)?new cljs.core.Keyword(null,"red","red",-969428204):new cljs.core.Keyword(null,"yellow","yellow",-881035449))], null)], null),(cljs.core.truth_(game_over_QMARK_)?"Game over!":new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.winner","div.winner",-795149627),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-trophy","i.fas.fa-trophy",-1169757627)], null)], null),"Winner!"], null))], null)], null)], null)], null);
})()], null)], null)], null);
});
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
