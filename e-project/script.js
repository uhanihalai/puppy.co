// ---------Responsive-navbar-active-animation-----------
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});



// --------------add active class-on another-page move----------
jQuery(document).ready(function($){
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
});
const nameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const companyNameEl = document.querySelector("#company-name");
const messageEl = document.querySelector("#message");

const form = document.querySelector("#submit-form");

function checkValidations() {
  let letters = /^[a-zA-Z\s]*$/;
  const name = nameEl.value.trim();
  const email = emailEl.value.trim();
  const companyName = companyNameEl.value.trim();
  const message = messageEl.value.trim();
  if (name === "") {
     document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please fill out this field!";
  } else {
    if (!letters.test(name)) {
      document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please enter only characters!";
    } else {
      
    }
  }
  if (email === "") {
     document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please fill out this field!";
  } else {
    if (!letters.test(name)) {
      document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please enter only characters!";
    } else {
      
    }
  }
}

function reset() {
  nameEl = "";
  emailEl = "";
  companyNameEl = "";
  messageEl = "";
  document.querySelector(".name-error").innerText = "";
}
// crousal1
 /* 1 carousel */
 $('#carousel-1').carousel({
	interval: 4000,
	wrap: true,
	keyboard: true
});


/* 2 carousel */
$('#carousel-2').carousel({
	interval: 6000,
	wrap: true,
	keyboard: true
});


/* 3 carousel */
$('#carousel-3').carousel({
   interval: 8000,
   wrap: true,
   keyboard: true
});

/* 4 carousel example with jumbotron */
$('#carousel-4').carousel({
   interval: 10000,
   wrap: true,
   keyboard: true
});

/* 5 carousel example */
$('#carousel-5').carousel({
   interval: 6000,
   wrap: true,
   keyboard: true
});

/* 6 carousel example */
$('#carousel-6').carousel({
   interval: 8000,
   wrap: true,
   keyboard: true
});

/* 7 carousel example */
$('#carousel-7').carousel({
   interval: 4000,
   wrap: true,
   keyboard: true
});

/* 8 carousel example */
$('#carousel-8').carousel({
   interval: 6000,
   wrap: true,
   keyboard: true
});

/* 9 carousel example */
$('#carousel-9').carousel({
   interval: 8000,
   wrap: true,
   keyboard: true
});

/* 10 carousel example */
$('#carousel-10').carousel({
   interval: 2000,
   wrap: true,
   keyboard: true
});

/* 11 carousel example */
$('#carousel-11').carousel({
   interval: 4000,
   wrap: true,
   keyboard: true
});

/* 12 carousel example */
$('#carousel-12').carousel({
   interval: 6000,
   wrap: true,
   keyboard: true
});

/* 13 carousel example */
$('#carousel-13').carousel({
   interval: 8000,
   wrap: true,
   keyboard: true
});
