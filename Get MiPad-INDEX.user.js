// ==UserScript==
// @name       Get MiPad-INDEX
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://s1.mi.com/open/index.html
// @copyright  2012+, You
// @require    http://code.jquery.com/jquery-1.11.0.min.js
// ==/UserScript==

function hehe()
{
    //add a content to achieve click
    location.reload();
    var container = '<span id="cc">cece</span>';
	$('.J_bookBtn-mipad').append(container);
    
    //UseLess
    //$('#cc').trigger('click');
    //console.log($('.J_bookBtn-mipad'));
    
    $('#cc').click();
    //log the click
    $('.J_bookBtn-mipad').click(
        function(){
        	console.log("Click");
        }
    );
}

setInterval(hehe, 2000);