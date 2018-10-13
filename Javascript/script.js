/*global  $,alert, console*/
$( function () {
 
'use strict';
var myheader= $('.header'), myslider = $('.bxslider');
myheader.height($(window).height());

$(window).resize(function(){
	myheader.height($(window).height());
	 $('.bxslider').each(function(){
	$(this).css("paddingTop",($(window).height() -$('.bxslider li').height())/2 );
});

	});


$('.links li').click(function(){
$(this).addClass('active').siblings().removeClass('active');
});

$('.bxslider').each(function(){
	$(this).css("paddingTop",($(window).height() -$('.bxslider li').height())/2 );
});

/*
 $('.bxslider').bxSlider({
 	pager:false
 });

/*
 $('.ser').click(function(){

 	$('html, body').animate({

 		scrollTop: $('.services').offest().top

 	},1000);
 });*/



});