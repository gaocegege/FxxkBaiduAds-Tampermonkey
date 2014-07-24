// ==UserScript==
// @name       Fxxk You, Baidu
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://tieba.baidu.com/*
// @copyright  2012+, Cece, Sjtu
// @require    http://code.jquery.com/jquery-1.11.0.min.js
// ==/UserScript==

// 删除交大贴吧上面的N个美女直播= =
var ganBaidu = document.getElementsByClassName("per_list_frs")[0];
console.log(ganBaidu);
if (ganBaidu != undefined && ganBaidu != null) {
    ganBaidu.parentNode.removeChild(ganBaidu);
}
// 删除推广
$('[title = "推广"]').parent().parent().remove();
//var fxxkBaidu = document.getElementById("threadListGroupCnt");
//fxxkBaidu.parentNode.removeChild(fxxkBaidu);
