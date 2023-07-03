
$(document).ready(function()
	{	
		//Nice scroll lib
 		$("html").niceScroll({
 			cursorwidth:"10px"
 		});
	});
//end 


//Hide Loading-screen
$(window).on("load",function()
	{	
		//hide screen
		$(".loading-screen .sk-folding-cube").fadeOut(2000,function()
			{
				$('body ,html').css('position','relative');
				
				//show the scroll
				$(this).parent().fadeOut(2000,function()
					{
						//show the scroll
						$('body').css('overflow','auto');

						//remove all section because no longer need it
						$(this).remove();
					});
			});
	});
//end


/*make nav opacity 0.8 when scroll*/
$(function(){
	'use strict';
	var navbar=$('.navbar');

	$(window).scroll(function(){

		if($(window).scrollTop() >= navbar.height())
			{
				navbar.addClass("scrolled");
				navbar.removeClass("bg-dark");
			}
		else
			{
				navbar.addClass("bg-dark");
				navbar.removeClass("scrolled");
			}
	});
});	

$(".About li").click(function()
{
	//switch active between tabs "siblings=>brothers"
	$(this).addClass("active").siblings().removeClass("active");
	//hide all divs
	$(".About .tabs-contents > div").hide();
	//show the div we need
	$($(this).data('class')).show();
});

/* hide list when choose any section in nav*/
$(".navbar li a").click(function()
{
	$(".navbar .navbar-collapse").removeClass("show");
});


//////////////////////////////////////////////////////////
//make responsive on click in download button. 
$(".carousel button ,.About button ,.stylish button").on("click", function(){
  alert("There's no files to downloaded.");
});

//on click to send data.
$(".carousel input[type= submit] ,.contact-us button").on("click", function(){
  alert("Thanks For Your Trust");
});

