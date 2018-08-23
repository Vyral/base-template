
// TOUCHSWIPE JS
(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(f){var y="1.6.12",p="left",o="right",e="up",x="down",c="in",A="out",m="none",s="auto",l="swipe",t="pinch",B="tap",j="doubletap",b="longtap",z="hold",E="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,C="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};f.fn.swipe=function(H){var G=f(this),F=G.data(C);if(F&&typeof H==="string"){if(F[H]){return F[H].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+H+" does not exist on jQuery.swipe")}}else{if(F&&typeof H==="object"){F.option.apply(this,arguments)}else{if(!F&&(typeof H==="object"||!H)){return w.apply(this,arguments)}}}return G};f.fn.swipe.version=y;f.fn.swipe.defaults=n;f.fn.swipe.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipe.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:A};f.fn.swipe.pageScroll={NONE:m,HORIZONTAL:E,VERTICAL:u,AUTO:s};f.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:i};function w(F){if(F&&(F.allowPageScroll===undefined&&(F.swipe!==undefined||F.swipeStatus!==undefined))){F.allowPageScroll=m}if(F.click!==undefined&&F.tap===undefined){F.tap=F.click}if(!F){F={}}F=f.extend({},f.fn.swipe.defaults,F);return this.each(function(){var H=f(this);var G=H.data(C);if(!G){G=new D(this,F);H.data(C,G)}})}function D(a4,au){var au=f.extend({},au);var az=(a||d||!au.fallbackToMouseEvents),K=az?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",ax=az?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",V=az?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",T=az?null:"mouseleave",aD=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ag=0,aP=null,ac=0,a1=0,aZ=0,H=1,ap=0,aJ=0,N=null;var aR=f(a4);var aa="start";var X=0;var aQ={};var U=0,a2=0,a5=0,ay=0,O=0;var aW=null,af=null;try{aR.bind(K,aN);aR.bind(aD,a9)}catch(aj){f.error("events not supported "+K+","+aD+" on jQuery.swipe")}this.enable=function(){aR.bind(K,aN);aR.bind(aD,a9);return aR};this.disable=function(){aK();return aR};this.destroy=function(){aK();aR.data(C,null);aR=null};this.option=function(bc,bb){if(typeof bc==="object"){au=f.extend(au,bc)}else{if(au[bc]!==undefined){if(bb===undefined){return au[bc]}else{au[bc]=bb}}else{if(!bc){return au}else{f.error("Option "+bc+" does not exist on jQuery.swipe.options")}}}return null};function aN(bd){if(aB()){return}if(f(bd.target).closest(au.excludedElements,aR).length>0){return}var be=bd.originalEvent?bd.originalEvent:bd;var bc,bf=be.touches,bb=bf?bf[0]:be;aa=g;if(bf){X=bf.length}else{if(au.preventDefaultEvents!==false){bd.preventDefault()}}ag=0;aP=null;aJ=null;ac=0;a1=0;aZ=0;H=1;ap=0;N=ab();S();ai(0,bb);if(!bf||(X===au.fingers||au.fingers===i)||aX()){U=ar();if(X==2){ai(1,bf[1]);a1=aZ=at(aQ[0].start,aQ[1].start)}if(au.swipeStatus||au.pinchStatus){bc=P(be,aa)}}else{bc=false}if(bc===false){aa=q;P(be,aa);return bc}else{if(au.hold){af=setTimeout(f.proxy(function(){aR.trigger("hold",[be.target]);if(au.hold){bc=au.hold.call(aR,be,be.target)}},this),au.longTapThreshold)}an(true)}return null}function a3(be){var bh=be.originalEvent?be.originalEvent:be;if(aa===h||aa===q||al()){return}var bd,bi=bh.touches,bc=bi?bi[0]:bh;var bf=aH(bc);a2=ar();if(bi){X=bi.length}if(au.hold){clearTimeout(af)}aa=k;if(X==2){if(a1==0){ai(1,bi[1]);a1=aZ=at(aQ[0].start,aQ[1].start)}else{aH(bi[1]);aZ=at(aQ[0].end,aQ[1].end);aJ=aq(aQ[0].end,aQ[1].end)}H=a7(a1,aZ);ap=Math.abs(a1-aZ)}if((X===au.fingers||au.fingers===i)||!bi||aX()){aP=aL(bf.start,bf.end);ak(be,aP);ag=aS(bf.start,bf.end);ac=aM();aI(aP,ag);if(au.swipeStatus||au.pinchStatus){bd=P(bh,aa)}if(!au.triggerOnTouchEnd||au.triggerOnTouchLeave){var bb=true;if(au.triggerOnTouchLeave){var bg=aY(this);bb=F(bf.end,bg)}if(!au.triggerOnTouchEnd&&bb){aa=aC(k)}else{if(au.triggerOnTouchLeave&&!bb){aa=aC(h)}}if(aa==q||aa==h){P(bh,aa)}}}else{aa=q;P(bh,aa)}if(bd===false){aa=q;P(bh,aa)}}function M(bb){var bc=bb.originalEvent?bb.originalEvent:bb,bd=bc.touches;if(bd){if(bd.length&&!al()){G();return true}else{if(bd.length&&al()){return true}}}if(al()){X=ay}a2=ar();ac=aM();if(ba()||!am()){aa=q;P(bc,aa)}else{if(au.triggerOnTouchEnd||(au.triggerOnTouchEnd==false&&aa===k)){if(au.preventDefaultEvents!==false){bb.preventDefault()}aa=h;P(bc,aa)}else{if(!au.triggerOnTouchEnd&&a6()){aa=h;aF(bc,aa,B)}else{if(aa===k){aa=q;P(bc,aa)}}}}an(false);return null}function a9(){X=0;a2=0;U=0;a1=0;aZ=0;H=1;S();an(false)}function L(bb){var bc=bb.originalEvent?bb.originalEvent:bb;if(au.triggerOnTouchLeave){aa=aC(h);P(bc,aa)}}function aK(){aR.unbind(K,aN);aR.unbind(aD,a9);aR.unbind(ax,a3);aR.unbind(V,M);if(T){aR.unbind(T,L)}an(false)}function aC(bf){var be=bf;var bd=aA();var bc=am();var bb=ba();if(!bd||bb){be=q}else{if(bc&&bf==k&&(!au.triggerOnTouchEnd||au.triggerOnTouchLeave)){be=h}else{if(!bc&&bf==h&&au.triggerOnTouchLeave){be=q}}}return be}function P(bd,bb){var bc,be=bd.touches;if((J()&&W())||(Q()&&aX())){if(J()&&W()){bc=aF(bd,bb,l)}if((Q()&&aX())&&bc!==false){bc=aF(bd,bb,t)}}else{if(aG()&&bc!==false){bc=aF(bd,bb,j)}else{if(ao()&&bc!==false){bc=aF(bd,bb,b)}else{if(ah()&&bc!==false){bc=aF(bd,bb,B)}}}}if(bb===q){if(W()){bc=aF(bd,bb,l)}if(aX()){bc=aF(bd,bb,t)}a9(bd)}if(bb===h){if(be){if(!be.length){a9(bd)}}else{a9(bd)}}return bc}function aF(be,bb,bd){var bc;if(bd==l){aR.trigger("swipeStatus",[bb,aP||null,ag||0,ac||0,X,aQ]);if(au.swipeStatus){bc=au.swipeStatus.call(aR,be,bb,aP||null,ag||0,ac||0,X,aQ);if(bc===false){return false}}if(bb==h&&aV()){aR.trigger("swipe",[aP,ag,ac,X,aQ]);if(au.swipe){bc=au.swipe.call(aR,be,aP,ag,ac,X,aQ);if(bc===false){return false}}switch(aP){case p:aR.trigger("swipeLeft",[aP,ag,ac,X,aQ]);if(au.swipeLeft){bc=au.swipeLeft.call(aR,be,aP,ag,ac,X,aQ)}break;case o:aR.trigger("swipeRight",[aP,ag,ac,X,aQ]);if(au.swipeRight){bc=au.swipeRight.call(aR,be,aP,ag,ac,X,aQ)}break;case e:aR.trigger("swipeUp",[aP,ag,ac,X,aQ]);if(au.swipeUp){bc=au.swipeUp.call(aR,be,aP,ag,ac,X,aQ)}break;case x:aR.trigger("swipeDown",[aP,ag,ac,X,aQ]);if(au.swipeDown){bc=au.swipeDown.call(aR,be,aP,ag,ac,X,aQ)}break}}}if(bd==t){aR.trigger("pinchStatus",[bb,aJ||null,ap||0,ac||0,X,H,aQ]);if(au.pinchStatus){bc=au.pinchStatus.call(aR,be,bb,aJ||null,ap||0,ac||0,X,H,aQ);if(bc===false){return false}}if(bb==h&&a8()){switch(aJ){case c:aR.trigger("pinchIn",[aJ||null,ap||0,ac||0,X,H,aQ]);if(au.pinchIn){bc=au.pinchIn.call(aR,be,aJ||null,ap||0,ac||0,X,H,aQ)}break;case A:aR.trigger("pinchOut",[aJ||null,ap||0,ac||0,X,H,aQ]);if(au.pinchOut){bc=au.pinchOut.call(aR,be,aJ||null,ap||0,ac||0,X,H,aQ)}break}}}if(bd==B){if(bb===q||bb===h){clearTimeout(aW);clearTimeout(af);if(Z()&&!I()){O=ar();aW=setTimeout(f.proxy(function(){O=null;aR.trigger("tap",[be.target]);if(au.tap){bc=au.tap.call(aR,be,be.target)}},this),au.doubleTapThreshold)}else{O=null;aR.trigger("tap",[be.target]);if(au.tap){bc=au.tap.call(aR,be,be.target)}}}}else{if(bd==j){if(bb===q||bb===h){clearTimeout(aW);O=null;aR.trigger("doubletap",[be.target]);if(au.doubleTap){bc=au.doubleTap.call(aR,be,be.target)}}}else{if(bd==b){if(bb===q||bb===h){clearTimeout(aW);O=null;aR.trigger("longtap",[be.target]);if(au.longTap){bc=au.longTap.call(aR,be,be.target)}}}}}return bc}function am(){var bb=true;if(au.threshold!==null){bb=ag>=au.threshold}return bb}function ba(){var bb=false;if(au.cancelThreshold!==null&&aP!==null){bb=(aT(aP)-ag)>=au.cancelThreshold}return bb}function ae(){if(au.pinchThreshold!==null){return ap>=au.pinchThreshold}return true}function aA(){var bb;if(au.maxTimeThreshold){if(ac>=au.maxTimeThreshold){bb=false}else{bb=true}}else{bb=true}return bb}function ak(bb,bc){if(au.preventDefaultEvents===false){return}if(au.allowPageScroll===m){bb.preventDefault()}else{var bd=au.allowPageScroll===s;switch(bc){case p:if((au.swipeLeft&&bd)||(!bd&&au.allowPageScroll!=E)){bb.preventDefault()}break;case o:if((au.swipeRight&&bd)||(!bd&&au.allowPageScroll!=E)){bb.preventDefault()}break;case e:if((au.swipeUp&&bd)||(!bd&&au.allowPageScroll!=u)){bb.preventDefault()}break;case x:if((au.swipeDown&&bd)||(!bd&&au.allowPageScroll!=u)){bb.preventDefault()}break}}}function a8(){var bc=aO();var bb=Y();var bd=ae();return bc&&bb&&bd}function aX(){return !!(au.pinchStatus||au.pinchIn||au.pinchOut)}function Q(){return !!(a8()&&aX())}function aV(){var be=aA();var bg=am();var bd=aO();var bb=Y();var bc=ba();var bf=!bc&&bb&&bd&&bg&&be;return bf}function W(){return !!(au.swipe||au.swipeStatus||au.swipeLeft||au.swipeRight||au.swipeUp||au.swipeDown)}function J(){return !!(aV()&&W())}function aO(){return((X===au.fingers||au.fingers===i)||!a)}function Y(){return aQ[0].end.x!==0}function a6(){return !!(au.tap)}function Z(){return !!(au.doubleTap)}function aU(){return !!(au.longTap)}function R(){if(O==null){return false}var bb=ar();return(Z()&&((bb-O)<=au.doubleTapThreshold))}function I(){return R()}function aw(){return((X===1||!a)&&(isNaN(ag)||ag<au.threshold))}function a0(){return((ac>au.longTapThreshold)&&(ag<r))}function ah(){return !!(aw()&&a6())}function aG(){return !!(R()&&Z())}function ao(){return !!(a0()&&aU())}function G(){a5=ar();ay=event.touches.length+1}function S(){a5=0;ay=0}function al(){var bb=false;if(a5){var bc=ar()-a5;if(bc<=au.fingerReleaseThreshold){bb=true}}return bb}function aB(){return !!(aR.data(C+"_intouch")===true)}function an(bb){if(bb===true){aR.bind(ax,a3);aR.bind(V,M);if(T){aR.bind(T,L)}}else{aR.unbind(ax,a3,false);aR.unbind(V,M,false);if(T){aR.unbind(T,L,false)}}aR.data(C+"_intouch",bb===true)}function ai(bd,bb){var bc={start:{x:0,y:0},end:{x:0,y:0}};bc.start.x=bc.end.x=bb.pageX||bb.clientX;bc.start.y=bc.end.y=bb.pageY||bb.clientY;aQ[bd]=bc;return bc}function aH(bb){var bd=bb.identifier!==undefined?bb.identifier:0;var bc=ad(bd);if(bc===null){bc=ai(bd,bb)}bc.end.x=bb.pageX||bb.clientX;bc.end.y=bb.pageY||bb.clientY;return bc}function ad(bb){return aQ[bb]||null}function aI(bb,bc){bc=Math.max(bc,aT(bb));N[bb].distance=bc}function aT(bb){if(N[bb]){return N[bb].distance}return undefined}function ab(){var bb={};bb[p]=av(p);bb[o]=av(o);bb[e]=av(e);bb[x]=av(x);return bb}function av(bb){return{direction:bb,distance:0}}function aM(){return a2-U}function at(be,bd){var bc=Math.abs(be.x-bd.x);var bb=Math.abs(be.y-bd.y);return Math.round(Math.sqrt(bc*bc+bb*bb))}function a7(bb,bc){var bd=(bc/bb)*1;return bd.toFixed(2)}function aq(){if(H<1){return A}else{return c}}function aS(bc,bb){return Math.round(Math.sqrt(Math.pow(bb.x-bc.x,2)+Math.pow(bb.y-bc.y,2)))}function aE(be,bc){var bb=be.x-bc.x;var bg=bc.y-be.y;var bd=Math.atan2(bg,bb);var bf=Math.round(bd*180/Math.PI);if(bf<0){bf=360-Math.abs(bf)}return bf}function aL(bc,bb){var bd=aE(bc,bb);if((bd<=45)&&(bd>=0)){return p}else{if((bd<=360)&&(bd>=315)){return p}else{if((bd>=135)&&(bd<=225)){return o}else{if((bd>45)&&(bd<135)){return x}else{return e}}}}}function ar(){var bb=new Date();return bb.getTime()}function aY(bb){bb=f(bb);var bd=bb.offset();var bc={left:bd.left,right:bd.left+bb.outerWidth(),top:bd.top,bottom:bd.top+bb.outerHeight()};return bc}function F(bb,bc){return(bb.x>bc.left&&bb.x<bc.right&&bb.y>bc.top&&bb.y<bc.bottom)}}}));


// MyList Video Player 1.3
// author: Mike Wooster
// website: woosterwebdesign.com
// last update: 2/22/2016


// LOAD YOUTUBE API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


// Check for mobile and detect if iOS
var myVar = 0;
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if(isMobile.iOS()) {
   // It is iOS
   myVar = 1;
}


var first_vid="";
var listNum=0;
var vidIDs = [];
var videosURL = [];
var vid_frame = [];
var listLength = [];
var list_width = [];
var pNum = 0;
var tgt = "vid_frame1";
var x;

// Check how many players on the page
var numPlaylists = playListID.length;
// console.log("numPlaylists: "+numPlaylists);
for (var n=0;n<numPlaylists;n++) {
	//console.log(n);
	vidIDs[n] = [];
	videosURL[n] = "https://www.googleapis.com/youtube/v3/playlistItems?playlistId="+playListID[n]+"&key="+apiKey+"&fields=items&part=snippet&maxResults=100";
}

function onYouTubeIframeAPIReady() {

	for (var n=0;n<numPlaylists;n++) {
		doAjaxCallStuff(n);
	}

}
function doAjaxCallStuff(n) {
	var m = n+1;
	console.log("m: "+m);

	$.ajax({
	  url: videosURL[n],
	  dataType: 'json',
	  async: true,
	  success: function(data) {

			var list_data="";
			var first_vid_iframe="";

			$.each(data.items, function(i, val) {
		        var feedTitle = val.snippet.title;
		        var feedDesc = val.snippet.description;
		        var videoID = val.snippet.resourceId.videoId;
		        var thumb = "http://img.youtube.com/vi/"+ videoID +"/default.jpg";

		        // BUILD THE PLAYLIST(S)
		        if(i === 0) { // so we can set first vid as current
		        	// if(isMobile.iOS()) { // if iOS use cueVideoById initially
		        	if(myVar === 1) { // if iOS use cueVideoById initially
		        		list_data += '<div class=\"vid-item\" tabindex=\"0\" onClick=\"vid_frame['+m+'].cueVideoById({ videoId:\''+videoID+'\' }); listNum='+ i +'; setCurrent('+m+')\" onfocus=\"$(document).keyup(function(e) { if(e.keyCode ==13) { vid_frame['+m+'].loadVideoById({ videoId:\''+videoID+'\' }); listNum='+ i +'; setCurrent('+m+') } });\">\n';
		        	} else { // otherwise use loadVideoById
		        		list_data += '<div class=\"vid-item\" tabindex=\"0\" onClick=\"vid_frame['+m+'].loadVideoById({ videoId:\''+videoID+'\' }); listNum='+ i +'; pNum='+m+'; setCurrent('+m+')\" onfocus=\"$(document).keyup(function(e) { if(e.keyCode ==13) { vid_frame['+m+'].loadVideoById({ videoId:\''+videoID+'\' }); listNum='+ i +'; setCurrent('+m+') } });\">\n';
		        	}
		        	list_data += '<div class=\"thumb\"><img class=\"current-vid\" src="'+ thumb +'"></div>\n';
			        if (showTitlesInList === 1) {
			        	list_data += '<div class=\"desc current-vid\">'+feedTitle+'</div>\n';
			        }
			        list_data += '</div>';
		        } else {
		        	if(myVar === 1) {
		        		list_data += '<div class=\"vid-item\" tabindex=\"0\" onClick=\"vid_frame['+m+'].cueVideoById({ videoId:\''+videoID+'\' }); listNum='+ i +'; setCurrent('+m+')\" onfocus=\"$(document).keyup(function(e) { if(e.keyCode ==13) { vid_frame['+m+'].loadVideoById({ videoId:\''+videoID+'\' }); listNum='+ i +'; setCurrent('+m+') } });\" >\n';
		        	} else {
		        		list_data += '<div class=\"vid-item\" tabindex=\"0\" onClick=\"vid_frame['+m+'].loadVideoById({ videoId:\''+videoID+'\' }); listNum='+ i +'; pNum='+m+'; setCurrent('+m+') \" onfocus=\"$(document).keyup(function(e) { if(e.keyCode ==13) { vid_frame['+m+'].loadVideoById({ videoId:\''+videoID+'\' }); listNum='+ i +'; setCurrent('+m+') } });\" >\n';
		        	}
			        list_data += '<div class=\"thumb\"><img src="'+ thumb +'"></div>\n';
			        if (showTitlesInList === 1) {
			        	list_data += '<div class=\"desc\">'+feedTitle+'</div>\n';
			        }
			        list_data += '</div>';
		        }
		        vidIDs[n].push(videoID);
		        // get total number of videos in list
	        	listLength[m] = i+1;
			});


			// CREATE YOUTUBE VIDEO PLAYER
			vid_frame[m] = new YT.Player('vid_frame'+m, {
		      height: '200',
		      width: '200',
		      playerVars: { 'html5': 1, 'showinfo': showVideoInfo, 'autoplay': 0, 'rel': showRelatedVideos, 'controls': showPlayerControls, 'playsinline': 1 },
		      videoId: vidIDs[n][0],
		      events: {
		        //'onReady': onPlayerReady,
		        'onStateChange': onPlayerStateChange
		      }
		    });

			// set overall width of vList div
		    list_width[m] = listLength[m]*168;
		    $("#player-container"+m+">div.mlvp-list-container>div.mlvp-list").width(list_width[m]+"px");


			$(list_data).appendTo("#player-container"+m+">div.mlvp-list-container>div.mlvp-list");

			first_vid = data.items[0].snippet.resourceId.videoId;

			setScrollAmt(n);
			//window.onresize = setScrollAmt(n);

			$(function() {
			  //Enable swiping...
			  $("#player-container"+m+">div.mlvp-list-container").swipe( {
			    //Generic swipe handler for all directions
			    swipe:function( event, direction, distance, duration, fingerCount, fingerData ) {
			      //$(this).text("You swiped " + direction );
			      if(direction=="left") {
			        scrollListLeft(m);
			      } else if (direction=="right") {
			      	scrollListRight(m);
			      }
			    },
			    //Default is 75px, set to 0 for demo so any distance triggers swipe
			     threshold:75,
			     allowPageScroll:"vertical",
			     preventDefaultEvents: false
			  });
			});
		} // ajax close
    });
}


function onPlayerStateChange(event) {
	tgt = event.target.getIframe().id;

	// console.log("target: "+event.target.getIframe().id);
	// console.log("pNum: "+pNum);
	// console.log("event.data: "+event.data);


	if (tgt == "vid_frame1") {
		x=0;
		y=1;
	}
	if (tgt == "vid_frame2") {
		x=1;
		y=2;
	}
	if (tgt == "vid_frame3") {
		x=2;
		y=3;
	}
	if (tgt == "vid_frame4") {
		x=3;
		y=4;
	}
	if (tgt == "vid_frame5") {
		x=4;
		y=5;
	}
	if (tgt == "vid_frame6") {
		x=5;
		y=6;
	}
	// add more for additional players

	//document.getElementById("console").innerHTML = "target: "+tgt+" and state.data: "+state.data;


	// AUTOPLAY OPTION
	if(autoPlayNext === 1) { // if autoplay is on

    	//console.log("state: "+state.data);
    	//console.log("list index: "+listNum);
	    if(event.data === 0){  // if video has ended

	        //find next vid in playlist
	        nextVid = listNum+1;

	        // console.log("nextvid: "+nextVid);
	        // console.log(listLength[y]);

	        if (nextVid >= listLength[y]) {
	        	console.log("greater");
	        	nextVid = 0;
	        	var nextVidId = vidIDs[x][nextVid];

		        //play next vid in playlist
		        vid_frame[y].loadVideoById({ videoId:nextVidId });

		        listNum = 0;
		        setCurrent(y);

function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}
var xPos = getOffset( jQuery("#player-container"+y+">div.mlvp-list-container") ).left;



		        console.log("left: "+xPos);
		        //jQuery("#player-container"+y+">div.mlvp-list-container").css('left', 100);
	        } else {

	        	var nextVidId = vidIDs[x][nextVid];

		        //play next vid in playlist
		        //event.target.loadVideoById({ videoId:nextVidId });
		        vid_frame[y].loadVideoById({ videoId:nextVidId });

		        listNum = listNum+1;
		        setCurrent(y);
	        }
	    }
	}


	if(myVar === 1) { // if iOS
		//myVar = 0;
		// clear onclicks for each .vid-item
		if(event.data === 1) {
			for (var i=0; i<listLength[n]; i++) {
				var lnum = i+1;
				var vnum = vidIDs[x][i];

				// if onclick attribute contains 'cueVideoById' clear onclick and run resetOnClick()
				if (  $('#player-container'+y+' .mlvp-list-container .mlvp-list .vid-item:first-child').attr('onClick').indexOf('cueVideoById') > -1) {
					$('#player-container'+y+'>div.mlvp-list-container>div.mlvp-list.vid-item:nth-child('+lnum+')').attr('onclick','');
				}
			}
			resetOnClick(); // run this function to reset onclicks to use loadVideoById
		}
	}

}


// set styles in playlist to show currently selected video
function setCurrent(n) {

	$('#player-container'+n+'>div.mlvp-list-container>div.mlvp-list>div.vid-item>div.current-vid').removeClass('current-vid');
	$('#player-container'+n+'>div.mlvp-list-container>div.mlvp-list>div.vid-item>div.thumb img.current-vid').removeClass('current-vid');

	var currNum = listNum+1;
	$('#player-container'+n+'>div.mlvp-list-container>div.mlvp-list div:nth-child('+currNum+') div.desc').addClass('current-vid');
	$('#player-container'+n+'>div.mlvp-list-container>div.mlvp-list div:nth-child('+currNum+') div.thumb img').addClass('current-vid');

}

// iOS wierdness fix
// after first playing of a video clicking a thumb in playlist will start playing a vid
// so we reset the onclicks to loadVideoByID
function resetOnClick() {

	var m = n+1;
	for (var i=0; i<listLength[y]; i++) {
		var lnum = i+1;
		//var vnum = vidIDs[i];
		var vnum = "'"+vidIDs[x][i]+"'";
		var clickString = "vid_frame["+y+"].loadVideoById({ videoId: "+vnum+" }); listNum="+i+"; setCurrent("+y+");"

		// console.log(lnum+": "+vnum);
		// console.log(clickString);
		$('#player-container'+y+'>div.mlvp-list-container>div.mlvp-list>div.vid-item:nth-child('+lnum+')').attr('onclick',clickString);
	}
	return;
}



// JS FOR SCROLLING THE ROW OF THUMBNAILS
// set horizontal scroll distance of playlist row
function setScrollAmt(n) {
	var m = n+1;
    // var w = jQuery(window).width();
    var w = jQuery('#player-container'+m+'>div.mlvp-container').width();
    console.log("container width: "+w);

    if (w <= 572) {
        scrollAmt = 336;
    } else if (w >= 573 && w <= 742) {
        scrollAmt = 504;
    } else {
        scrollAmt = 672;
    }
    // console.log("scroll amount: "+scrollAmt);

    // scroll on click of arrows
	jQuery("#player-container"+m+">div.mlvp-arrows>div.mlvp-arrow-right").bind("click", function(event) {
	    event.preventDefault();
	    jQuery("#player-container"+m+">div.mlvp-list-container").stop().animate({
	        scrollLeft: "+=" + scrollAmt
	    }, 750);
	});
	jQuery("#player-container"+m+">div.mlvp-arrows>div.mlvp-arrow-left").bind("click", function(event) {
	    event.preventDefault();
	    jQuery("#player-container"+m+">div.mlvp-list-container").stop().animate({
	        scrollLeft: "-=" + scrollAmt
	    }, 750);
	});


	// ADJUST ARROW SIZE / VISIBILITY BASED ON WIDTH OF PLAYER
	if (w<=420 && w>=316) { // smaller arrows on small screens
		jQuery('.mlvp-arrows').css({ display: "block" });
		jQuery('.demo-icon').css({ "font-size": "24px", "line-height": "1.2em" });
		jQuery('.mlvp-list-container').css({ "margin-left": "24px", "margin-right": "24px" });
	} else if (w <= 315) { // hide arrows on very small screens
		jQuery('.mlvp-arrows').css({ display: "none" });
		jQuery('.mlvp-list-container').css({ "margin-left": "0", "margin-right": "0" });
	} else {
		jQuery('.mlvp-arrows').css({ display: "block" });
		jQuery('.mlvp-list-container').css({ "margin-left": "37px", "margin-right": "38px" });
		jQuery('.demo-icon').css({ "font-size": "32px", "line-height": "1em" });
	}



}

function scrollListLeft(m) {
	 event.preventDefault();
    $("#player-container"+m+">div.mlvp-list-container").stop().animate({
        scrollLeft: "+=" + scrollAmt
    }, 750);
}

function scrollListRight(m) {
	 event.preventDefault();
    $("#player-container"+m+">div.mlvp-list-container").stop().animate({
        scrollLeft: "-=" + scrollAmt
    }, 750);
}



// reset playlist scroll amount if window resized
window.addEventListener("resize", getPlayerSize);

// make sure to set scroll amount for each player on page
function getPlayerSize() {
    for (var n=0;n<numPlaylists;n++) {
		setScrollAmt(n);
	}
}
