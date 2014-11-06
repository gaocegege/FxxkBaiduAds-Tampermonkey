// ==UserScript==
// @name         Leap Motion in Renren
// @namespace    http://your.homepage/
// @version      0.1
// @description  use leap motion in renren
// @author       cece
// @match        http://www.renren.com/*
// @grant        none
// @require		 https://cdnjs.cloudflare.com/ajax/libs/leapjs/0.6.1/leap.min.js
// ==/UserScript==

    Leap.loop({
        hand: function(hand){
          var speed = hand.palmVelocity[1];
          if (speed >= 300)
          {
              scrollBy(0, speed);
          }
          else if (speed <= -300)
          {
              scrollBy(0, speed);
          }
        }
      });