var lang = document.getElementById("lang").value;
var initiativeName = document.getElementById("initiative_name").value;


$(document).ready(function() {
    //window.history.back();
    /*if (window.history && window.history.pushState) {
        window.history.pushState('back', null, null);
        $(window).on('popstate', function() {
                var customurl = window.location.href;
                window.history.back({page:customurl}, null, customurl);
                //window.location.href = customurl;
        });
    }*/

    $('#search_text').select();
    //For show hide load more button//
    if ($("#total_count").val() == $("#fetched_count").val()) {
        $(".search-load-btn").hide();
    } else {
        $(".search-load-btn").show();
    }
     

    //For url open in next browser//
    var search_key = getUrlParameter('q');
    var filter_key = getUrlParameter('filter');
    var record = getUrlParameter('record');
    if (search_key && search_key.length > 2) {
        $("#search_text").val(search_key);
        $(".results").show();
        var tabId = 0;
        if(filter_key=='all'){
            tabId = 0;
        }
        if(filter_key=='events'){
            tabId = 1;
        }
        if(filter_key=='campaigns'){
            tabId = 2;
        }
        if(filter_key=='blog'){
            tabId = 3;
        }
        getSearchResults(tabId,filter_key,record);
        // $('#search_text').trigger('click');
    }

    $('.search-icon').show();
    $('.close-icon').hide();

    //For close search or reset
    $('.close-icon').click(function() {
        $("#show_total_count").empty();
        $("#search_key").empty();
        $(".filter-block").hide();
        $("#all-article").empty();
        $(".search-load-btn").hide();
        $(".results").hide();
        $('.auto-search').html('');
        $('#search_text').val('');
        $('.close-icon').css('display', 'none');
        $('.search-icon').css('display', 'block');
        $('#search_autosuggest').val('');
        $('#search_auto_suggests').select();
        $('#search_auto_suggests_desktop').select();
    });

    $('.close-btn').click(function() {
        $('#search_text').select();
    });

    //For close auto search popup
    $("body").click(function() {
        $('.search-auto').hide();
    });
});

//header search click
// $('.search-icon').click(function(e){
//      var searchText = $(this).val();
//      getSearchResults(0,searchText);
// });
  
//For header click and menu click//
$('.search_autosuggest').keyup(function(e) {
    var searchText = $(this).val();
    var code = e.which;
    $('.search-icon').show();
    //$('.close-icon').hide();
    //$('.search-popup').css('display','block');
    if (code == 13) {
        //$('.search-popup').css("display","none");
        goToSearch(searchText);
    } else {
        if (searchText.length > 2) {
            $('.search-icon').show();
            //$('.search-icon').hide();
            //$('.close-icon').show();
            getAutoSearchUrl(searchText);
            getSearchResults(0);

        } else {
            $('.auto-search').html('');
            return false;
        }
    }
});

function goToSearch(searchText) {
    var searchKeywords = searchText;
    if (searchKeywords != '') {
        window.location.href = "/" + lang + "/" + initiativeName + "/search?q=" + searchKeywords;
    } else {
        $("#all-article").html('<div class="no-result"><div class="text">Please enter search keywords.</div></div>');
    }
}

//var code = e.which;
/*if(code == 13){
//  	 getSearchResults(0,searchText);
 		
 }*/

//  }

$('#search_text, .search-icon').keyup(function(e) {
    var searchText = $('#search_text').val();
    var code = e.which;
    oPageInfo = {
        title: null,
        url: location.href
    };
    if (searchText.length > 2) {
        if (code == 13) {
            //$('.search-auto').hide();
            $('.auto-search').hide();
            $('.search-auto').css('display', 'none');
            e.preventDefault();
            //getSearchResults(0);
            url = '/' + lang + '/' + initiativeName + '/search';
            //newUrl = '?q='+searchText;
            //history.replaceState(oPageInfo, oPageInfo.title, newUrl);

        } else {
            getAutoSearchUrl(searchText);
            //getSearchResults(0,searchText);
        }
    } else {

        $("#show_total_count").empty();
        $("#search_key").empty();
        $(".filter-block").hide();
        $("#all-article").empty();
        $(".search-load-btn").hide();
        $(".results").hide();
        $('.auto-search').html('');
        return false;
    }



    /*if(code == 13){
 		e.preventDefault();
 		getSearchResults(0);
 		url = '/'+lang+'/'+initiativeName+'/search';
		newUrl = '?q='+searchText;
		history.replaceState(oPageInfo, oPageInfo.title, newUrl);
		$('.search-auto').hide();
 	}else{
 		console.log('sss1111');
	 	if(searchText.length > 2){ 
	 		getAutoSearchUrl(searchText);
	 		getSearchResults(0,searchText);
	 	}
	 	else{
	 		$("#show_total_count").empty();
	 		$("#search_key").empty();
	 		$(".filter-block").hide();
	 		$("#all-article").empty();
	 		$(".search-load-btn").hide();
	 		$(".results").hide();
	 		$('.auto-search').html('');
	 		return false;
	 	}
	 }*/

});

 function letterSearchResult(searchText){

    var searchText = $('#search_auto_suggests').val();
    if (searchText == '' || searchText == undefined) {
        var searchText = $('#search_auto_suggests_desktop').val();
    }
    if (searchText != '') {
        window.location.href = "/" + lang + "/" + initiativeName + "/search?q=" + searchText;
    }
}

function getSearchResults(tabId, tabName, records) {
    var searchText = document.getElementById("search_text").value;
    //==============================================
    if (searchText == '' || searchText == undefined) {
        var searchText = $('#search_auto_suggests_desktop').val();
    }
    //==============================================
    var record = 0;
    if (searchText == '') {
        $("#all-article").html('<div class="no-result"><div class="text">Please enter search keywords.</div></div>');
    }
    $('#tab_value').val(tabId);

    oPageInfo = {
        title: null,
        url: location.href
    };
    if (tabName == '' || tabName == undefined) {
        tabName = 'all';
    }
    if(tabName == 'all' || tabName == 'campaigns' || tabName == 'blog' || tabName == 'events'){
    	var record = $('#records').val();
    }
    var data = {
        'search_text_solr': searchText,
        'tab_Id': tabId,
        'record' : record
    };
    url = '/' + lang + '/' + initiativeName + '/search';
    
    $('#tab_name').val(tabName);
    
    if (searchText != '') {
        $.ajax({
            type: 'GET',
            url: url,
            data: data,
            dataType: "JSON", // data type expected from server

            beforeSend: function() {
                //$("#loading-image").show();
            },
            success: function(resp) {
                console.log(resp);

                $('#all_click').removeClass('active');
                $('#event_click').removeClass('active');
                $('#camp_click').removeClass('active');
                $('#blog_click').removeClass('active');

                if (tabId == 0) {
                    $('#all_click').addClass('active');
                    var recordFound = $('.search-block').length;
                    $('#records').val(recordFound);
                } else if (tabId == 1) {
                    $('#event_click').addClass('active');
                    var recordFound = $('.search-block').length;
                    $('#records').val(recordFound);
                } else if (tabId == 2) {
                    $('#camp_click').addClass('active');
                    var recordFound = $('.search-block').length;
                    $('#records').val(recordFound);
                } else if (tabId == 3) {
                    $('#blog_click').addClass('active');
                    var recordFound = $('.search-block').length;
                    $('#records').val(recordFound);
                }

                if (resp) {

                    $('.filter-block').show();
                    $('#fetched_count').val(resp.search_details.fetch_count);
                    $('#total_count').val(resp.search_details.total_count);
                    //$('#show_total_count').html(resp.search_details.total_count);
                    $('#show_total_count').html(resp.search_details.final_total_count);
                    $('#search_key').html(searchText);
                    $('#no_of_page').val(resp.no_of_pages);
                    $('#search_filter').show();
                    $("#search_icon").hide();
                    $(".close-icon").show();
                    if (resp.search_details.total_count > 0 || resp.search_details.final_total_count > 0) {
                        $(".results").show();
                        $("#all-article").empty();
                        if (resp.search_details.html != '' || resp.search_details.html != undefined || resp.search_details.html != null) {
                            $(".search-blog #all-article").append(resp.search_details.html);
                        }

                        if (resp.search_details.excluded_ids != '' || resp.search_details.excluded_ids != undefined || resp.search_details.excluded_ids != null) {
                            $('#excluded_id').val(resp.search_details.excluded_ids);
                        }

                        if ($("#total_count").val() == $("#fetched_count").val()) {
                            $(".search-load-btn").hide();
                        } else {
                            $(".search-load-btn").show();
                        }

                    } else {
                        $("#all-article").html('<div class="no-result"><div class="text">No Result Found.</div></div>');
                        //$(".filter-block").hide();
                    }
                    recordFound = $('.search-block').length;
                    //recordFound = $('#records').val();
                    newUrl = '?q=' + searchText + '&filter=' + tabName + '&record=' + recordFound;
   					history.replaceState(oPageInfo, oPageInfo.title, newUrl);
                    //window.history.back();
                   // localStorage.setItem("search_url", newUrl); 
                    // store

                    if ($("#total_count").val() == $("#fetched_count").val()) {
                        $(".search-load-btn").hide();
                    } else {
                        $(".search-load-btn").show();
                    }
                } else {
                    //For show hide filter section//
                    $(".filter-block").hide();
                }
                console.log(data);

            },
            complete: function() {
                //$("#loading-image").hide();
            }

        });
    }

}


function loadMoreSearchResults() { //alert( $('.search-block').length );return;
    var tab_Id = ($('#tab_value').val() != '') ? $('#tab_value').val() : '';
    var tabName = $('#tab_name').val();
    var excludedId = $('#excluded_id').val();
    var offSet = 0;
    var totalCount = parseInt($('#total_count').val());
    var fetched_count = parseInt($('#fetched_count').val());
    var noOfPages = parseInt($('#no_of_page').val());
    var currPage = parseInt($('#curr_page').val());
    offSet = fetched_count;
    console.log("==========load More==========");
    console.log(totalCount + fetched_count + noOfPages +currPage);

    var searchText = document.getElementById("search_text").value;
    oPageInfo = {
        title: null,
        url: location.href
    };

    var data = {
        'search_text_solr': searchText,
        'page': offSet,
        'excluded_id': excludedId,
        'load_more_flag': 1,
        'tab_Id': tab_Id
    };
    url = '/' + lang + '/' + initiativeName + '/search/view-all/' + offSet;

   

    $.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: "JSON", // data type expected from server
        async: false,
        success: function(resp) {
            console.log(resp);
            if (resp.search_details.html != '' || resp.search_details.html != undefined || resp.search_details.html != null) {
                $("#all-article").append(resp.search_details.html);
                var fetchCount = parseInt($('#fetched_count').val());
                var totalFetchCount = parseInt(fetchCount) + parseInt(resp.search_details.fetch_count);
                $('#curr_page').val(currPage + 1);
                $('#fetched_count').val(totalFetchCount);
                // $('#total_count').val(resp.total_count);
                //$('#no_of_page').val(resp.no_of_pages);

                /*if($('#total_count').val() == $('#fetched_count').val()){
		            	
						$('#load-more-btn').hide();
					}else{
						$('#load-more-btn').show();
						//$('#all-article').append('<div class="load-more button primary" id="load-more-btn" onclick><div onclick="loadMoreSearchResults(this);">LOAD MORE</div></div>');
					}*/

                if ($("#total_count").val() == $("#fetched_count").val()) {
                    console.log('hide');
                    $(".search-load-btn").hide();
                } else {
                    console.log('show');
                    $(".search-load-btn").show();
                }
                 recordFound = $('.search-block').length;
                newUrl = '?q=' + searchText + '&filter=' + tabName + '&record=' + recordFound;
    			history.replaceState(oPageInfo, oPageInfo.title, newUrl);
            } else {
                //$(".search-block").html('No Records Found');
                $("#all-article").html('<div class="no-result"><div class="text">No Result Found.</div></div>');
            }

        }

    });
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};




//Autosuggesion
function autoSuggesion() {

}



//search block js start here
$('.search-button, .search-point').on('click', function() {
    $('.search-popup').fadeIn();
    $('.black-transparent').fadeIn();
    $('body').css({
        overflow: 'hidden'
    });
    $('#search_auto_suggests').select();
});

// $('.black-transparent').on('click',function(){
//    	$('.remind-popup').fadeOut();
//   	$('.black-transparent').fadeOut();
//    	$('body').css({overflow: 'auto'});
//    });

$('.search-popup .close').on('click', function() {
    $('.search-popup').fadeOut();
    $('.black-transparent').fadeOut();
    $('body').css({
        overflow: 'auto'
    });
});
//search block js end here 

$(".search-field").on('keyup', function() {
    if ($(this).val().length > 0) {
        $(".search-auto").show();
        //$(".search-icon").hide();
        //$(".close-icon").show();
    } else {
        $(".search-auto").hide();
        $(".search-icon").show();
        $(".close-icon").hide();
    }
});

$(".close-icon").click(function() {
    $(".search-auto").hide();
});

//New ===============================
$('.search-button, .search-icon').on('click', function() {
    $('#search_auto_suggests_desktop').select();
    $('#search_auto_suggests').val('');
    $('#search_auto_suggests_desktop').val('');
    url = '/' + lang + '/' + initiativeName + '/search/delete_records';
    $.ajax({
        url: url,
        type: 'POST',
        success: function(data) {
            console.log(data);
        }
    });
});


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


function getAutoSearchUrl(term) {
    if (term.length > 2 || term != '') {
        url = '/' + lang + '/' + initiativeName + '/search/auto_suggestion';
        term = term.trim();
        $.ajax({
            url: url,
            type: 'POST',
            data: {
                q: processSearchTermAutoSugg(term),
                termcheck: term,
                //q: "spell:" + term + "*",
                fl: "name,sm_url",
                wt: 'json',
                rows: '6',

            },
            success: function(data) {
                data = JSON.parse(data);
                // isStaticPage =  
                var searchResHtml = '';
                searchResHtml += '<ul>';
                if (parseInt(data.response.numFound) > 0) {
                    $.map(data.response.docs, function(item) {
                        if (item.bs_field_is_static == true) {
                            var link = item.ss_field_page_link;
                            var link = link.replace("internal:", "");
                        } else {
                            var link = item.sm_url[0];
                            if(link.indexOf('nursery-details') != -1){
                                link = '/' + lang + '/' + initiativeName + '/'+link;
                            }

                        }
                        searchResHtml += '<li class="search-result-li"><a href="' + link + '">' + item.ss_title_2 + '</a></li>';
                    });
                } else {
                    //searchResHtml += '<li>No Record Found !!!</li>';
                    $('.auto-search').hide();
                    $('.search-auto').css('display', 'none');
                }
                searchResHtml += '</ul>';

                $('.auto-search').html(searchResHtml);
                $('.auto-search').show();
                $('.search-auto').css('display', 'block');
            }
        });
    } else {
        $('.auto-search').html('');
        $('.auto-search').hide();
        $('.search-auto').css('display', 'none');
    }
}

function processSearchTermAutoSugg(searchTxt){
    var searchTxtArr = searchTxt.split(" ");
    var procSearchStr = "";
    searchTxtArr.forEach(function(txt, key) {
      procSearchStr +="spell:" + txt;
      if(key < (searchTxtArr.length - 1) ){
            procSearchStr += "%20OR%20";
        }
    });

    return procSearchStr;
}
