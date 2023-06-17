$(function(){
    getLazyImageLoaded();
});

function fetchImage(url) {
    return new Promise(function(resolve, reject){
        var image = new Image();
        image.src = url;
        image.onload = resolve;
        image.onerror = reject;
    });
}

function preloadImage(image) {
    var src = image.dataset.src;
    console.log(image);
    if (!src) {
        return;
    }

    return fetchImage(src).then(function(){ applyImage(image, src); });
}

function loadImagesImmediately(images) {

    for (var i = 0; i < images.length; i++) { 
        var image = images[i];
        preloadImage(image);
    }
}
function disconnect() {
    if (!observer) {
        return;
    }

    observer.disconnect();
}

function onIntersection(entries) {
    if (imageCount === 0) {
        observer.disconnect();
    }

    for (var i = 0; i < entries.length; i++) { 
        var entry = entries[i];
        if (entry.intersectionRatio > 0) {
          imageCount--;

          observer.unobserve(entry.target);
          preloadImage(entry.target);
      }
  }
}

function applyImage(img, src) {
    // Prevent this from being lazy loaded a second time.
    img.classList.add('js-lazy-image--handled');
    img.src = src;
    img.classList.add('fade-in');
}


function getLazyImageLoaded(){
  
    var images = document.querySelectorAll('.lazy-image');
    var config = {
        // If the image gets within 50px in the Y axis, start the download.
        rootMargin: '50px 0px',
        threshold: 0.01
    };

    imageCount = images.length;

    // If we don't have support for intersection observer, loads the images immediately
    if (!('IntersectionObserver' in window)) {
        loadImagesImmediately(images);
    } else {

        // It is supported, load the images

        observer = new IntersectionObserver(onIntersection, config);

        // foreach() is not supported in IE
        for (var i = 0; i < images.length; i++) {
            var image = images[i];
            if (image.classList.contains('js-lazy-image--handled')) {
                continue;
            }
            observer.observe(image);
        }
    }
}

function likeDislike(nodeId, mobFlag = false){
    var nodeId = nodeId.split('_').pop();
    var lang = $('#lang').val();
    var initiativeName = $('#initiative_name').val();
    if(initiativeName == undefined || initiativeName == ''){
        initiativeName = document.getElementById("initiative_"+nodeId).value;
    }
    var actualTotalLikes = parseInt($('#total_likes_'+nodeId).val());
    var bundle = $('#bundle').val();
    var totalLikes = parseInt($('#likes_'+nodeId).html());
    if(actualTotalLikes !== undefined && actualTotalLikes < 101){
        totalLikes = actualTotalLikes;
    }
    var isLike = $('#status_'+nodeId).val();
    var status = '';
    if(isLike == 1){
        status = 'dislike';
        totalLikes --;
        $('#total_likes_'+nodeId).val(totalLikes);
        $('#status_'+nodeId).val(0);
        if($('#heart_'+nodeId).parent().parent().hasClass('blog-social-share')){
            $('#heart_'+nodeId).parent().removeClass('active');
        }else{
            $('#heart_'+nodeId).removeClass('active');
        }
        if(mobFlag==true){
            $('#heart__'+nodeId).removeClass('active');
        }
    }else{
        status = 'like';
        totalLikes ++;
        if($('#likes_'+nodeId).parent().parent().hasClass('blog-media-mobile')){
            $('#likes_'+nodeId).html(totalLikes+' Likes');
        }else{
            $('#likes_'+nodeId).html(totalLikes);
        }
        $('#total_likes_'+nodeId).val(totalLikes);
        $('#status_'+nodeId).val(1);
        if($('#heart_'+nodeId).parent().parent().hasClass('blog-social-share')){
            $('#heart_'+nodeId).parent().addClass('active');
        }else{
            $('#heart_'+nodeId).addClass('active');
        }
        if(mobFlag == true){
            $('#heart__'+nodeId).addClass('active');
        }
    }
    if(totalLikes < 101){
        $('#likes_'+nodeId).html('');
    }else{
        if($('#likes_'+nodeId).parent().parent().hasClass('blog-media-mobile')){
            $('#likes_'+nodeId).html(totalLikes+' Likes');
        }else{
            $('#likes_'+nodeId).html(totalLikes);
        }
    }
    var url= '/'+lang+'/'+initiativeName+'/'+bundle+'/like-dislike';
    //var responseData = {node_id:nodeId,module_type:'LIKE_DISLIKE_COUNT_CACHE',lang:lang};
    $.ajax({
        url:url,
        type:'POST',
        data:{bundle:bundle,node_id:nodeId,lang:lang,status:status,initiative_name:initiativeName},
        dataType:'json',
        success:function(response){
            // if(response.ack == 'ok'){
            //     $.ajax({
            //         url:'/process-cache-data',
            //         type:'POST',
            //         data:JSON.stringify(responseData),
            //         dataType:'json',
            //         success:function(){}
            //     });
            // }
        }
    });
    //alert(nodeId+' '+' '+lang+' '+initiativeName+' '+bundle+' '+totalLikes+' '+isLike);
}

function fadeOutEffect(targetId) {
    var fadeTarget = document.getElementById(targetId);
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 650);
}

function showLoader(){
    $(".preloader").show();
}

function hideLoader(){
    $(".preloader").hide();
}

function getCookie(cookieName){
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";   
}

function storeCookie(cookieString,path){
    //cookieString eg: username = fermion
    document.cookie = cookieString+";"+"path=/;secure";
    // +path;
}

function deleteCookie(cookieName,path){
    document.cookie = cookieName+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
