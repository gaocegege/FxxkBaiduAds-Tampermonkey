// ==UserScript==
// @name         HackShanghai
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match http://*
// @match http://*/*
// @match https://*
// @match *
// @grant        none
// @require		 https://cdnjs.cloudflare.com/ajax/libs/leapjs/0.6.1/leap.min.js
// @require		 http://121.40.136.175:8080/hack/popup.js
// @require 	 http://code.jquery.com/jquery-1.11.0.min.js
// ==/UserScript==
var flag = false;
var url = window.location.href;
Leap.loop({
        hand: function(hand){
          var speed = hand.palmVelocity[0];
          if (speed >= 500 && flag == false)
          {
              flag = true;
              console.log(url);
              console.log("gege");
              // 发送请求
              $.getJSON("http://121.40.136.175:8080/hack/ping.php?url=" + url,function(result){
    			console.log("111");
    	   	});
          }
            
          else if (speed >= 0 && speed < 500)
          {
              flag = false;
          }
        }
      });