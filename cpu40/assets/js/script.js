// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a}});function ws_turn(d,a,b){var f=jQuery;var h=f(this);var c=f("li",b);var e=f(".ws_list",b);var g=f("<div>").addClass("ws_effect ws_turn").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",perspective:500}).appendTo(b);this.go=function(q,l){var s=b.height();var j=b.width();var k={left:["0% 50%",{rotateY:90,translate:[0,0,0.1]},{left:-j}],right:["100% 50%",{rotateY:-90,translate:[0,0,0.1]},{left:j}],up:["50% 0%",{rotateX:-90,translate:[0,0,0.1]},{top:-s}],down:["50% 100%",{rotateX:90,translate:[0,0,0.1]},{top:s}]}[d.direction||["left","right","down","up"][Math.floor(Math.random()*4)]];var i=f("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",transformOrigin:k[0],transformStyle:"preserve-3d",outline:"1px solid transparent",zIndex:5}).append(f(a.get(q)).clone()),r=f("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",background:"#000",zIndex:4}).append(f(a.get(l)).clone());g.css({perspectiveOrigin:k[0]});if(d.responsive<3){i.find("img").css("width","100%");r.find("img").css("width","100%")}r.appendTo(g);i.appendTo(g);e.stop(true,true).hide().css({left:-q+"00%"});var p=k[2];var o={top:0,left:0};var n={opacity:1};var m={opacity:0.2};if(d.support.transform){p=k[1];o={rotateX:0,rotateY:0,translate:[0,0,0]}}wowAnimate(i,p,o,d.duration,"easeInOutQuart",function(){h.trigger("effectEnd");i.remove();r.remove()});wowAnimate(r.find("img"),n,m,d.duration,"easeInOutQuart")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a}});function ws_shift(k,i,c){var d=jQuery;var h=d(this);var b=c.find("li");var f=c.find(".ws_list");var e={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"};var g=d("<div>").addClass("ws_effect ws_shift").css(e).appendTo(c);var a=d("<div>").css(e).css({display:"none",zIndex:4}).appendTo(g);var j=d("<div>").css(e).css({display:"none",zIndex:3}).appendTo(g);this.go=function(l,p,n){var m=c.width();var o=c.height();a.append(d(i.get(l)).clone());j.append(d(i.get(p)).clone());if(k.responsive<3){a.find("img").css("width","100%");j.find("img").css("width","100%")}f.stop(true,true).hide().css({left:-l+"00%"});var q={left:[{left:-m},{left:0}],right:[{left:m},{left:0}],down:[{top:o},{top:0}],up:[{top:-o},{top:0}]}[k.direction||["left","right","down","up"][Math.floor(Math.random()*4)]];if(k.support.transform){if(q[0].left){q[0]={translate:[q[0].left,0,0]}}else{q[0]={translate:[0,q[0].top,0]}}q[1]={translate:[0,0,0]}}a.show();j.show();wowAnimate(a,q[0],q[1],k.duration,"easeInOutCubic",function(){f.show();a.hide().html("");j.hide().html("");h.trigger("effectEnd")});wowAnimate(j,{scale:1,translate:[0,0,0]},{scale:0.5,translate:[0,0,0]},k.duration,"easeInOutCubic")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a}});function ws_cube_over(m,k,b){var e=jQuery,j=e(this),a=/WOW Slider/g.test(navigator.userAgent),g=e(".ws_list",b),c=m.perspective||/MSIE|Trident/g.test(navigator.userAgent)?1000:2000,d={position:"absolute",backgroundSize:"cover",left:0,top:0,width:"100%",height:"100%",backfaceVisibility:"hidden"};var l=/AppleWebKit/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent);var i=e("<div>").css(d).css({transformStyle:"preserve-3d",perspective:(l&&!a?"none":c),zIndex:8});e("<div>").addClass("ws_effect ws_cube_over").css(d).append(i).appendTo(b);if(!m.support.transform&&m.fallback){return new m.fallback(m,k,b)}var h;this.go=function(y,u){var q=e(k[u]);q={width:q.width(),height:q.height(),marginTop:parseFloat(q.css("marginTop")),marginLeft:parseFloat(q.css("marginLeft"))};function p(C,G,F,H){C.parent().css("perspective",c);var D=C.width(),E=C.height();wowAnimate(C,{scale:1,translate:[0,0,(l&&!a)?F:0]},{scale:0.85,translate:[0,0,(l&&!a)?F:0]},m.duration*0.4,"easeInOutBack",function(){wowAnimate(C,{scale:0.85,translate:[0,0,(l&&!a)?F:0]},{scale:1,translate:[0,0,(l&&!a)?F:0]},m.duration*0.4,m.duration-m.duration*0.8,"easeInOutBack",H)});wowAnimate(G.front.item,{rotateY:0,rotateX:0},{rotateY:G.front.rotateY,rotateX:G.front.rotateX},m.duration,"easeInOutBack");wowAnimate(G.back.item,{rotateY:G.back.rotateY,rotateX:G.back.rotateX},{rotateY:0,rotateX:0},m.duration,"easeInOutBack");wowAnimate(G.side.item,{rotateY:G.side.rotateY,rotateX:G.side.rotateX},{rotateY:-G.side.rotateY,rotateX:-G.side.rotateX},m.duration,"easeInOutBack")}if(m.support.transform&&m.support.perspective){if(h){h.stop()}var A=b.width(),v=b.height();var t={left:[A/2,0,0,180,0,-180],right:[A/2,0,0,-180,0,180],down:[v/2,-v/2,180,0,-180,0],up:[v/2,v/2,-180,0,180,0]}[m.direction||["left","right","down","up"][Math.floor(Math.random()*4)]];var B=e("<img>").css(q),s=e("<img>").css(q).attr("src",k.get(y).src);var n=e("<div>").css({overflow:"hidden",transformOrigin:"50% 50% -"+t[0]+"px"}).css(d).append(B).appendTo(i);var o=e("<div>").css({overflow:"hidden",transformOrigin:"50% 50% -"+t[0]+"px"}).css(d).append(s).appendTo(i);var z=e('<div class="ws_cube_side">').css({transformOrigin:"50% 50% -"+t[0]+"px",background:m.staticColor?"":f(s[0],{exclude:["0,0,0","255,255,255"]})}).css(d).appendTo(i);B.on("load",function(){g.hide()});B.attr("src",k.get(u).src).load();i.parent().show();h=new p(i,{front:{item:n,rotateY:t[5],rotateX:t[4]},back:{item:o,rotateY:t[3],rotateX:t[2]},side:{item:z,rotateY:t[3]/2,rotateX:t[2]/2}},-t[0],function(){j.trigger("effectEnd");i.empty().parent().hide();h=0})}else{i.css({position:"absolute",display:"none",zIndex:2,width:"100%",height:"100%"});i.stop(1,1);var r=(!!((y-u+1)%k.length)^m.revers?"left":"right");var n=e("<div>").css({position:"absolute",left:"0%",right:"auto",top:0,width:"100%",height:"100%"}).css(r,0).append(e(k[u]).clone().css({width:100*q.width/b.width()+"%",height:100*q.height/b.height()+"%",marginLeft:100*q.marginLeft/b.width()+"%"})).appendTo(i);var x=e("<div>").css({position:"absolute",left:"100%",right:"auto",top:0,width:"0%",height:"100%"}).append(e(k[y]).clone().css({width:100*q.width/b.width()+"%",height:100*q.height/b.height()+"%",marginLeft:100*q.marginLeft/b.width()+"%"})).appendTo(i);i.css({left:"auto",right:"auto",top:0}).css(r,0).show();i.show();g.hide();x.animate({width:"100%",left:0},m.duration,"easeInOutExpo",function(){e(this).remove()});n.animate({width:0},m.duration,"easeInOutExpo",function(){j.trigger("effectEnd");i.empty().hide()})}};function f(x,o){o=o||{};var z=1,r=o.exclude||[],w;var t=document.createElement("canvas"),q=t.getContext("2d"),p=t.width=x.naturalWidth,D=t.height=x.naturalHeight;q.drawImage(x,0,0,x.naturalWidth,x.naturalHeight);try{w=q.getImageData(o.x?o.x:0,o.y?o.y:0,o.w?o.w:x.width,o.h?o.h:x.height)["data"]}catch(y){console.log("error:unable to access image data: "+y);return"#ccc"}var s=(o.w?o.w:x.width*o.h?o.h:x.height)||w.length,u={},B="",A=[],n={dominant:{name:"",count:0}};var v=0;while(v<s){A[0]=w[v];A[1]=w[v+1];A[2]=w[v+2];B=A.join(",");if(B in u){u[B]=u[B]+1}else{u[B]=1}if(r.indexOf(["rgb(",B,")"].join(""))===-1){var C=u[B];if(C>n.dominant.count){n.dominant.name=B;n.dominant.count=C}}v+=z*4}return["rgb(",n.dominant.name,")"].join("")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_parallax(k,g,a){var c=jQuery;var f=c(this);var d=a.find(".ws_list");var b=k.parallax||0.25;var e=c("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_parallax").appendTo(a);function j(l){return Math.round(l*1000)/1000}var i=c("<div>").css({position:"absolute",left:0,top:0,overflow:"hidden",width:"100%",height:"100%",transform:"translate3d(0,0,0)"}).appendTo(e);var h=i.clone().appendTo(e);this.go=function(l,r,p){var s=c(g.get(r));s={width:s.width(),height:s.height(),marginTop:s.css("marginTop"),marginLeft:s.css("marginLeft")};p=p?1:-1;var n=c(g.get(r)).clone().css(s).appendTo(i);var o=c(g.get(l)).clone().css(s).appendTo(h);var m=a.width()||k.width;var q=a.height()||k.height;d.hide();wowAnimate(function(v){v=c.easing.swing(v);var x=j(p*v*m),u=j(p*(-m+v*m)),t=j(-p*m*b*v),w=j(p*m*b*(1-v));if(k.support.transform){i.css("transform","translate3d("+x+"px,0,0)");n.css("transform","translate3d("+t+"px,0,0)");h.css("transform","translate3d("+u+"px,0,0)");o.css("transform","translate3d("+w+"px,0,0)")}else{i.css("left",x);n.css("margin-left",t);h.css("left",u);o.css("margin-left",w)}},0,1,k.duration,function(){e.hide();n.remove();o.remove();f.trigger("effectEnd")})}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_blur(r,p,c){var h=jQuery;var o=h(this);var n=h("<div>").addClass("ws_effect ws_blur").css({position:"absolute",overflow:"hidden",top:0,left:0,width:"100%",height:"100%"}).appendTo(c);var b=!r.noCanvas&&!window.opera&&!!document.createElement("canvas").getContext;if(b){try{document.createElement("canvas").getContext("2d").getImageData(0,0,1,1)}catch(m){b=0}}var d;function k(s,e,t){wowAnimate(s.css({visibility:"visible"}),{opacity:0},{opacity:1},e,t)}function i(s,e,t){wowAnimate(s,{opacity:1},{opacity:0},e,t)}var l;this.go=function(e,s){if(l){return -1}l=1;var w=h(p.get(s)),u=h(p.get(e)),x={width:w.width(),height:w.height(),marginTop:w.css("marginTop"),marginLeft:w.css("marginLeft")};var v;if(b){if(!d){d='<canvas width="'+x.width+'" height="'+x.height+'"/>';d=h(d+d).css({"z-index":8,position:"absolute",left:0,top:0,visibility:"hidden"}).appendTo(n)}d.css(x).attr({width:x.width,height:x.height});v=g(w,x,30,d.get(0))}if(b&&v){var t=g(u,x,30,d.get(1));k(v,r.duration/3,function(){c.find(".ws_list").css({visibility:"hidden"});i(v,r.duration/6);k(t,r.duration/6,function(){v.css({visibility:"hidden"});c.find(".ws_list").css({visibility:"visible"});o.trigger("effectEnd",{delay:r.duration/2});i(t,r.duration/2,function(){l=0})})})}else{b=0;v=g(w,x,8);v.fadeIn(r.duration/3,"linear",function(){o.trigger("effectEnd",{delay:r.duration/3});v.fadeOut(r.duration/3,"linear",function(){v.remove();l=0})})}};function g(z,v,w,s){var C=(parseInt(z.parent().css("z-index"))||0)+1;if(b){var F=s.getContext("2d");F.drawImage(z.get(0),0,0,v.width,v.height);if(!j(F,0,0,s.width,s.height,w)){return 0}return h(s)}var G=h("<div></div>").css({position:"absolute","z-index":C,left:0,top:0,display:"none"}).css(v).appendTo(n);var E=(Math.sqrt(5)+1)/2;var t=1-E/2;for(var u=0;t*u<w;u++){var A=Math.PI*E*u;var e=(t*u+1);var D=e*Math.cos(A);var B=e*Math.sin(A);h(document.createElement("img")).attr("src",z.attr("src")).css({opacity:1/(u/1.8+1),position:"absolute","z-index":C,left:Math.round(D)+"px",top:Math.round(B)+"px",width:"100%",height:"100%"}).appendTo(G)}return G}var q=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];var a=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function j(aj,R,P,s,t,aa){if(isNaN(aa)||aa<1){return}aa|=0;var ae;try{ae=aj.getImageData(R,P,s,t)}catch(ai){console.log("error:unable to access image data: "+ai);return false}var z=ae.data;var Y,X,ag,ad,G,J,D,v,w,O,E,Q,M,U,Z,H,C,I,K,T;var ah=aa+aa+1;var V=s<<2;var F=s-1;var ac=t-1;var B=aa+1;var ab=B*(B+1)/2;var S=new f();var N=S;for(ag=1;ag<ah;ag++){N=N.next=new f();if(ag==B){var A=N}}N.next=S;var af=null;var W=null;D=J=0;var L=q[aa];var u=a[aa];for(X=0;X<t;X++){U=Z=H=v=w=O=0;E=B*(C=z[J]);Q=B*(I=z[J+1]);M=B*(K=z[J+2]);v+=ab*C;w+=ab*I;O+=ab*K;N=S;for(ag=0;ag<B;ag++){N.r=C;N.g=I;N.b=K;N=N.next}for(ag=1;ag<B;ag++){ad=J+((F<ag?F:ag)<<2);v+=(N.r=(C=z[ad]))*(T=B-ag);w+=(N.g=(I=z[ad+1]))*T;O+=(N.b=(K=z[ad+2]))*T;U+=C;Z+=I;H+=K;N=N.next}af=S;W=A;for(Y=0;Y<s;Y++){z[J]=(v*L)>>u;z[J+1]=(w*L)>>u;z[J+2]=(O*L)>>u;v-=E;w-=Q;O-=M;E-=af.r;Q-=af.g;M-=af.b;ad=(D+((ad=Y+aa+1)<F?ad:F))<<2;U+=(af.r=z[ad]);Z+=(af.g=z[ad+1]);H+=(af.b=z[ad+2]);v+=U;w+=Z;O+=H;af=af.next;E+=(C=W.r);Q+=(I=W.g);M+=(K=W.b);U-=C;Z-=I;H-=K;W=W.next;J+=4}D+=s}for(Y=0;Y<s;Y++){Z=H=U=w=O=v=0;J=Y<<2;E=B*(C=z[J]);Q=B*(I=z[J+1]);M=B*(K=z[J+2]);v+=ab*C;w+=ab*I;O+=ab*K;N=S;for(ag=0;ag<B;ag++){N.r=C;N.g=I;N.b=K;N=N.next}G=s;for(ag=1;ag<=aa;ag++){J=(G+Y)<<2;v+=(N.r=(C=z[J]))*(T=B-ag);w+=(N.g=(I=z[J+1]))*T;O+=(N.b=(K=z[J+2]))*T;U+=C;Z+=I;H+=K;N=N.next;if(ag<ac){G+=s}}J=Y;af=S;W=A;for(X=0;X<t;X++){ad=J<<2;z[ad]=(v*L)>>u;z[ad+1]=(w*L)>>u;z[ad+2]=(O*L)>>u;v-=E;w-=Q;O-=M;E-=af.r;Q-=af.g;M-=af.b;ad=(Y+(((ad=X+B)<ac?ad:ac)*s))<<2;v+=(U+=(af.r=z[ad]));w+=(Z+=(af.g=z[ad+1]));O+=(H+=(af.b=z[ad+2]));af=af.next;E+=(C=W.r);Q+=(I=W.g);M+=(K=W.b);U-=C;Z-=I;H-=K;W=W.next;J+=s}}aj.putImageData(ae,R,P);return true}function f(){this.r=0;this.g=0;this.b=0;this.a=0;this.next=null}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_basic_linear(j,g,a){var c=jQuery;var f=c(this);var e=a.find(".ws_list");var i=c("<div>").addClass("ws_effect ws_basic_linear").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).appendTo(a);var b=c("<div>").css({position:"absolute",display:"none","z-index":2,width:"200%",height:"100%",transform:"translate3d(0,0,0)"}).appendTo(i);var h=c("<div>").css({position:"absolute",left:"auto",top:"auto",width:"50%",height:"100%",overflow:"hidden"}),d=h.clone();b.append(h,d);this.go=function(k,n,m){b.stop(1,1);if(m==undefined){m=(!!((k-n+1)%g.length)^j.revers?"left":"right")}else{m=m?"left":"right"}var o=c(g[n]);var l={width:o.width()||j.width,height:o.height()||j.height};o.clone().css(l).appendTo(h).css(m,0);c(g[k]).clone().css(l).appendTo(d).show();if(m=="right"){h.css("left","50%");d.css("left",0)}else{h.css("left",0);d.css("left","50%")}var q={},p={};q[m]=0;p[m]=-a.width();if(j.support.transform){if(m=="right"){q.left=q.right;p.left=-p.right}q={translate:[q.left,0,0]};p={translate:[p.left,0,0]}}e.hide();wowAnimate(b.css({left:"auto",right:"auto",top:0}).css(m,0).show(),q,p,j.duration,"easeInOutExpo",function(){f.trigger("effectEnd");b.hide().find("div").html("")})}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_fade(c,a,b){var e=jQuery,g=e(this),d=e(".ws_list",b),h={position:"absolute",left:0,top:0,width:"100%",height:"100%",maxHeight:"none",maxWidth:"none",transform:"translate3d(0,0,0)"},f=e("<div>").addClass("ws_effect ws_fade").css(h).css("overflow","hidden").appendTo(b);this.go=function(i,j){var k=e(a.get(i)),m={width:k.width(),height:k.height()};k=k.clone().css(h).css(m).appendTo(f);if(!c.noCross){var l=e(a.get(j)).clone().css(h).css(m).appendTo(f);wowAnimate(l,{opacity:1},{opacity:0},c.duration,function(){l.remove()})}wowAnimate(k,{opacity:0},{opacity:1},c.duration,function(){g.trigger("effectEnd");k.remove()})}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_stack(d,a,b){var e=jQuery;var g=e(this);var c=e("li",b);var f=e("<div>").addClass("ws_effect ws_stack").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).appendTo(b);this.go=function(q,j,i){var k=(d.revers?1:-1)*b.width();c.each(function(s){if(i&&s!=j){this.style.zIndex=(Math.max(0,this.style.zIndex-1))}});var p=e(".ws_list",b);var h=e("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",zIndex:4}).append(e(a.get(i?q:j)).clone()),r=e("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",zIndex:4}).append(e(a.get(i?j:q)).clone());if(d.responsive<3){h.find("img").css("width","100%");r.find("img").css("width","100%")}if(i){r.appendTo(f);h.appendTo(f)}else{h.insertAfter(p);r.insertAfter(p)}if(!i){p.stop(true,true).hide().css({left:-q+"00%"});if(d.fadeOut){p.fadeIn(d.duration)}else{p.show()}}else{if(d.fadeOut){p.fadeOut(d.duration)}}var o={left:i?k:0};var m={left:i?0:-k*0.5};var n={left:i?0:k};var l={left:(i?1:0)*b.width()*0.5};if(d.support.transform){o={translate:[o.left,0,0]};m={translate:[m.left,0,0]};n={translate:[n.left,0,0]};l={translate:[l.left,0,0]}}wowAnimate(h,o,n,d.duration,d.duration*(i?0:0.1),"easeInOutExpo",function(){g.trigger("effectEnd");h.remove();r.remove()});wowAnimate(r,m,l,d.duration,d.duration*(i?0.1:0),"easeInOutExpo")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.8
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"turn,shift,cube_over,parallax,blur,basic_linear,fade,stack",prev:"",next:"",duration:16*100,delay:32*100,width:1024,height:768,autoPlay:true,autoPlayVideo:false,playPause:false,stopOnHover:false,loop:false,bullets:0,caption:false,captionEffect:"parallax",controls:false,controlsThumb:false,responsive:3,fullScreen:false,gestures:1,onBeforeStep:0,images:0});