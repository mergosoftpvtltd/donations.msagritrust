
// Domain
$(".domains-block .domain-button").click(function(e) {          
	e.preventDefault();
	$(this).parent().find(".domain-dropdown").toggle();
	$(this).parent().toggleClass("domain-open");
});

$(".domain-dropdown").mouseup(function() {
	return false
});
$(document).mouseup(function(e) {
	if($(e.target).parent(".domains-block").length==0) {
		$(".domains-block").removeClass("domain-open");
		$(".domain-dropdown").hide();
	}
});




// Dropdown


$(".dropdown .button").click(function(e) {          
	e.preventDefault();
	$(".dropdown-menu").not($(this).parent().find(".dropdown-menu")).hide();
	$(this).parent().find(".dropdown-menu").toggle();
	$(this).parent().toggleClass("domain-open");
});

$(".dropdown-menu").mouseup(function() {
	return false
});
$(document).mouseup(function(e) {
	if($(e.target).parent(".dropdown").length==0) {
		$(".dropdown").removeClass("domain-open");
		$(".dropdown-menu").hide();
	}
});

$('.mobile-menu .navigation-menu .menu ul li a.sub-menu').on('click',function(e){
	e.preventDefault();
	if($(this).attr('aria-expanded') == 'false'){
		$(this).attr('aria-expanded','true');
		//$(this).parent().find('ul').slideDown();
		$(this).next('ul').slideDown();
		$(this).addClass('active');
	}
	else{
		$(this).attr('aria-expanded','false');
		$(this).next('ul').slideUp();
		$(this).removeClass('active');
	}
	
});

//  Mobile Navigation
$('.navigation').on('click',function(){
	$('.navigation-menu').addClass('active');
});

$('.navigation-menu .profile-block .close').on('click',function(){
	$('.navigation-menu').removeClass('active');
});

// // Signin / SignUp
// function signIn(){
// 	$('.signin').fadeIn();
// 	$('.white-traparent').fadeIn();
// 	$('.signup').fadeOut();
// 	$('body').css({overflow: 'hidden'});
// }

// $('.signin .cancel').on('click',function(){
// 	if($('#from_page').length > 0 && $('#from_page').val() == 'start-campaign'){
// 		window.location.href = getPath();
// 	}
// 	$('.white-traparent').fadeOut();
// 	$('.signin').fadeOut();
// 	$('body').css({overflow: 'auto'});
// });

// $('.close-layer').on('click',function(){
// 	$('.signin').fadeOut();
// 	$('.white-traparent').fadeOut();
// 	$('.signup').fadeOut();
// 	$('body').css({overflow: 'auto'});
// });

// var ANGULAR_API_URL = $('#angular_api_url').val();
// var ANGULAR_SIGN_UP_URL = $('#angular_sign_up_url').val();
// var ANGULAR_API_KEY = $('#angular_api_key').val();
// var CURRENT_URL = window.location.href;
// var FIREBASE_API_KEY = $('#firebase_api_key').val();
// var AUTH_DOMAIN = $('#auth_domain').val();
// var DATABASE_URL = $('#database_url').val();
// var PROJECT_ID = $('#project_id').val();
// var STORAGE_BUCKET = $('#storage_bucket').val();
// var MESSAGING_SENDER_ID = $('#messaging_sender_id').val();

// var config = {
// 		    apiKey: FIREBASE_API_KEY,
// 		    authDomain: AUTH_DOMAIN,
// 		    databaseURL: DATABASE_URL,
// 		    projectId: PROJECT_ID,
// 		    storageBucket: STORAGE_BUCKET,
// 		    messagingSenderId: MESSAGING_SENDER_ID
// 		  };

function loginLink(obj){
//$(".loginLink, .signUp").on('click', function() {
	$('#my_iframe').show();
  	if (typeof($(obj).data('redirect_url')) !== "undefined" && $(obj).data('redirect_url') != '') {
    	drupalSettings.isha_autologin.current_url = $(obj).data('redirect_url');                                    
  	}
  	if ($(obj).hasClass('loginLink')) {
    	$('#my_iframe').attr('src', ANGULAR_API_URL);
  	}else{
    	$('#my_iframe').attr('src', ANGULAR_SIGN_UP_URL);
  	}
  	signIn();
//});
}

// $("#my_iframe").on("load", function () {
// 	var data = {
//             'applicationId':  parseInt(ANGULAR_API_KEY),
//             'redirecturl' : CURRENT_URL
//     };
//     var apiurl = ANGULAR_SIGN_UP_URL;					
// 	document.getElementById("my_iframe").contentWindow.postMessage(data,apiurl);
// });
// if($('.block-views-blockupcoming-programs-for-centres-new-block-1').length > 0){
// 	$('.registration-model-window button.close').click(function(){
// 		history.replaceState('data to be passed', 'Title of the page', drupalSettings.isha_autologin.current_url);
// 	})
// }
// $(window).on("message onmessage", function(e) {
// 	//$('.loader-login').show();
// 	if (e.originalEvent.data.userUid !== undefined && e.originalEvent.data.userUid !== null) {
// 		//alert(e.originalEvent.data.userUid);
// 		var firebase_data = {
// 		   'autologin_profile_id' : e.originalEvent.data.userUid,
// 		   'autologin_provider_id' : e.originalEvent.data.providerId,
// 		};
// 		// Showing Loader
// 		$('.loader-login').show();
// 		firebase.initializeApp(config);
// 		var database = firebase.database();
// 		// Redirect to main application
// 		if (firebase !== undefined && firebase !== null) {
// 			firebase.database().goOnline();
// 			var redirecturl = e.originalEvent.data.redirecturl;
// 			// User Registry
// 			var leadsRef = database.ref('userRegistry/'+e.originalEvent.data.userUid);
// 			leadsRef.on('value', function(snapshot) {
// 				snapshot.forEach(function(childSnapshot) {
// 					firebase_data['autologin_'+childSnapshot.key] = childSnapshot.val();
// 				});
// 				$.post('/autologin/callback',firebase_data,function(response){

// 					if($('#outreach_redirect_url').length > 0){
// 						if($('#outreach_redirect_url').val() != ""){
// 							redirecturl = $('#outreach_redirect_url').val();
// 						}
// 					}
// 					window.location = (redirecturl) ? redirecturl : '/';
// 					 $(window).load(function() {
// 					 	$('.loader-login').hide();
// 						$('#my_iframe').hide();
// 						// $('#myLogin').modal('hide');
// 						firebase.database().goOffline();
// 					});
// 				});
// 			});
// 		}
// 		// After Sign up from email is completed this data will be received and modal will be closed after 5 seconds
// 		// For showing "Verification email has been sent message", pop up will be shown for 5 seconds  
// 		if(e.originalEvent.data === 'Close Popup') {
// 			$('.loader-login').hide();
// 			var frameElement = document.getElementById("my_iframe");
// 			frameElement.contentWindow.location.href = frameElement.src;
// 			setTimeout(function() {$('#myLogin').modal('hide');}, 5000);
// 		} 
// 	}						
// 	if(e.originalEvent.data === 'Show Terms Of Service') {
// 		window.open("/en/terms-conditions", '_blank');
// 	}
// 	if(e.originalEvent.data === 'Show Privacy Policy') {
// 		window.open("/en/privacy", '_blank');
// 	}
// });

// function logout(){
// 	$.ajax({
// 		url:'/autologin/logout',
// 		type:'get',
// 		dataType:'json',
// 		success:function(resp){
// 			if(resp.ack=='ok'){
// 				if($('#go_back').length > 0){
// 					if(document.referrer == window.location.href){
// 						window.location.href = getPath();
// 					}else{
// 						window.history.back();	
// 					}
// 				}else{
// 					window.location.reload();
// 				}
// 			}
// 		}
// 	});
// }

function setRedirectURL(outreachRedirectURL){;
	$('#outreach_redirect_url').val(outreachRedirectURL);
}

// $(function(){
//   if($('#from_page').length > 0 && $('#from_page').val() == 'start-campaign'){
//   	loginLink($('.loginLink'));
//   }
// });

function getPath(){
	var url = window.location.pathname;
	var n = url.lastIndexOf("/");
	url = url.substring(0,n);
	return url;
}

/* sign in/ sign up function */
function loginSignup(action){
	if ($('#outreach_redirect_url').length > 0 && $('#outreach_redirect_url').val() != '') {
		requestUrl = $('#outreach_redirect_url').val();
		$('#login_request_url').val(requestUrl); 
		getLoginHashValue(requestUrl);   
  	}

	$('#action').val(action);
	$('#login_form').submit();
	return false;
}

/* Logout function */
function logoutUser(){
	var requestUrl = $('#logout_request_url').val();
	if(requestUrl.indexOf('/edit') != -1 || requestUrl.indexOf('/start-campaign') != -1 || requestUrl.indexOf('/become-a-fundraiser') != -1){
		var ReqUrl = $('#campaign_form_logout_url').val();
		$('#logout_request_url').val(ReqUrl);
		var requestUrl = $('#logout_request_url').val();
		getLogoutHashValue(requestUrl);
	}
	$('#logout_form').submit();
	return false;
}

/* gets hash value for logout functionality */
function getLogoutHashValue(requestUrl){
	callbackUrl = $('#logout_callback_url').val();
	data = {'request_url':requestUrl, 'logout_callback_url':callbackUrl}       
	if(requestUrl.indexOf('mahashivratri-contribution') !== -1){
		url =  '/en/mahashivratri-contribution/autologin/logout-hash';
	}else if(requestUrl.indexOf('annadanam-online') !== -1){
		url =  '/en/annadanam-online/autologin/logout-hash';
    }else if(requestUrl.indexOf('rudraksha-seva') !== -1){
        url =  '/en/rudraksha-seva/autologin/logout-hash';
	}else{
		url = '/autologin/login-hash';
	}          
	$.ajax({
      url:url,
      data:data,
      type:'post',
      dataType:'json',
      async: false,
      success:function(resp){
      	if(typeof resp.hashedData != undefined && resp.hashedData != ''){
      		$('#logout_hash_value').val(resp.hashedData);
      	}
      }
  	});
}

/* gets hash value for login functionality */
function getLoginHashValue(requestUrl){
	callbackUrl = $('#callback_url').val();
	data = {'request_url':requestUrl, 'callback_url':callbackUrl}     
	if(requestUrl.indexOf('mahashivratri-contribution') !== -1){
		url =  '/en/mahashivratri-contribution/autologin/login-hash';
	}else if(requestUrl.indexOf('annadanam-online') !== -1){
		url =  '/en/annadanam-online/autologin/login-hash';
	}else if(requestUrl.indexOf('contribute') !== -1){
        url =  '/en/contribute/autologin/login-hash';
    }else if(requestUrl.indexOf('rudraksha-seva') !== -1){
        url =  '/en/rudraksha-seva/autologin/login-hash';
    }else{
        url = '/autologin/login-hash';
    }           
	$.ajax({
      url:url,
      data:data,
      type:'post',
      dataType:'json',
      async: false,
      success:function(resp){
      	if(typeof resp.hashedData != undefined && resp.hashedData != ''){
      		$('#login_hash_value').val(resp.hashedData);
      	}
      }
  	});
}

function langChange(){
	var lang = $("#lang-dropdown").val();
	window.location.href=lang;
}

$('.mobile-menu .navigation-menu .menu ul li a.sub-menu-mobile').on('click',function(e){
	e.preventDefault();
	if($(this).attr('aria-expanded') == 'false'){
		$(this).attr('aria-expanded','true');
		$(this).next('ul').slideDown();
		$(this).addClass('active');
		$(this).next('ul').find('a').attr('aria-expanded', 'false').removeClass('active');
	}
	else{
		$(this).attr('aria-expanded','false');
		$(this).next('ul').slideUp();
		$(this).removeClass('active');
	}
});
