                  
        <footer>

</footer>
<script src="{{ asset('assets/header.js')}}"></script>
<script src="{{ asset('assets/search.js')}}" defer=""></script>
<script src="{{ asset('assets/polyfill.js')}}"></script>
<script src="{{ asset('assets/common-script.js')}}"></script>

 
<script>
	$("li.child.active").closest('li.parent').addClass('active');
</script>
<!-- <script src="https://www.gstatic.com/firebasejs/4.7.0/firebase.js"></script> -->
<script type="text/javascript" charset="utf-8">
    var _uf = _uf || {};
    _uf.domain =  "www.ishaoutreach.org";
    _uf.utm_source_field = "utm_source"; // Default 'USOURCE'
    _uf.utm_medium_field = "utm_medium"; // Default 'UMEDIUM'
    _uf.utm_campaign_field = "utm_campaign"; // Default 'UCAMPAIGN'
    _uf.utm_content_field = "utm_content"; // Default 'UCONTENT'
    _uf.utm_term_field = "utm_term"; // Default 'UTERM'

    _uf.initial_referrer_field = "IREFERRER"; // Default 'IREFERRER'
    _uf.last_referrer_field = "LREFERRER"; // Default 'LREFERRER'
    _uf.initial_landing_page_field = "ILANDPAGE"; // Default 'ILANDPAGE'
    _uf.visits_field = "VISITS"; // Default 'VISITS'
    _uf.additional_params_map = {
        affiliate: "AFFILIATE"
    }; // Maps affiliate parameter to AFFILIATE form field
    _uf.sessionLength = 1; // In hours. Default is 1 hour
    _uf.add_to_form = "none"; // 'none', 'all', 'first'. Default is 'all'
    _uf.secure = 1;
    _uf.form_query_selector = 'form'; // custom form selector. Default is 'form', to select any form.
</script>
<script src="{{ asset('assets/utm_form-1.2.0.min.js')}}" async=""></script>

        <script src="{{ asset('assets/checkout.js')}}"> </script><div class="razorpay-container" style="z-index: 2147483647; position: fixed; top: 0px; display: none; left: 0px; height: 100%; width: 100%; backface-visibility: hidden; overflow-y: visible;"><style>@keyframes rzp-rot{to{transform: rotate(360deg);}}@-webkit-keyframes rzp-rot{to{-webkit-transform: rotate(360deg);}}</style><div class="razorpay-backdrop" style="min-height: 100%; transition: all 0.3s ease-out 0s; position: fixed; top: 0px; left: 0px; width: 100%; height: 100%;"><span style="text-decoration: none; background: rgb(214, 68, 68); border: 1px dashed white; padding: 3px; opacity: 0; transform: rotate(45deg); transition: opacity 0.3s ease-in 0s; font-family: lato, ubuntu, helvetica, sans-serif; color: white; position: absolute; width: 200px; text-align: center; right: -50px; top: 50px;">Test Mode</span></div><iframe style="opacity: 1; height: 100%; position: relative; background: none; display: block; border: 0 none transparent; margin: 0px; padding: 0px; z-index: 2;" allowtransparency="true" frameborder="0" width="100%" height="100%" allowpaymentrequest="true" src="{{ asset('assets/public.html')}}" class="razorpay-checkout-frame"></iframe></div>

        <iframe allow="join-ad-interest-group" data-tagging-id="AW-982417211" data-load-time="1682847303197" height="0" width="0" style="display: none; visibility: hidden;" src="{{ asset('assets/982417211.html')}}"></iframe><iframe allow="join-ad-interest-group" data-tagging-id="AW-840770318" data-load-time="1682847303230" height="0" width="0" style="display: none; visibility: hidden;" src="{{ asset('assets/840770318.html')}}"></iframe><iframe allow="join-ad-interest-group" data-tagging-id="AW-999349415" data-load-time="1682847303254" height="0" width="0" style="display: none; visibility: hidden;" src="{{ asset('assets/999349415.html')}}"></iframe><form action="https://www.ishaoutreach.org/en/cauvery-calling/plant-trees" id="checkoutCancelForm" method="post">
            <input type="hidden" id="cancel_error" name="error" value="">
            <input type="hidden" name="cancel_error" value="1">
            <input type="hidden" id="order_id" name="order_id" value="">
            <input type="hidden" id="error_msg" name="error_msg" value="">
        

        <script type="text/javascript" src="{{ asset('assets/jquery-3.3.1.min.js')}}"></script>
        <script src="{{ asset('assets/donate.js')}}"></script>
        <script src="{{ asset('assets/slick.js')}}"></script>
        <script src="{{ asset('assets/braintree-2.32.1.min.js')}}"></script>

        <script src="{{ asset('assets/dropin.min.js')}}"></script>

        <script src="{{ asset('assets/data-collector.min.js')}}"></script>
        <script src="{{ asset('assets/client.min.js')}}"></script>

        <script type="text/javascript">
            $('.amount-package .form .ammount-block .amount').click(function(){
            if($(this).hasClass('active')){
                // $(this).removeClass('active');
            }
            else{
                $('.amount-package .form .ammount-block .amount').removeClass('active')
                $(this).addClass('active')
            }
        });

       // $(function(){
        $(document).ready(function(){
                $('.member-slider').slick({
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  dots: true,
                  autoplay: true,
                  autoplaySpeed: 2000,
                  arrows: false,

                  responsive: [
                       {
                         breakpoint: 769,
                       settings: {
                           slidesToShow: 2,
                           slidesToScroll: 1,
                           infinite: true,
                       }
                   },
                   {
                         breakpoint: 480,
                       settings: {
                           slidesToShow: 1,
                           slidesToScroll: 1,
                           infinite: true,
                       }
                   },
                   {
                         breakpoint: 358,
                       settings: {
                           slidesToShow: 1,
                           slidesToScroll: 1,
                           infinite: true,
                       }
                   }
               ]
                });


                        });
        </script>
    

</form>
<script type="text/javascript" id="">!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","1393914664216937");fbq("track","PageView");</script>
<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1393914664216937&amp;ev=PageView&amp;noscript=1"></noscript>


<script type="text/javascript" id="">!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","1393914664216937");fbq("track","PageView");</script>
<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1393914664216937&amp;ev=PageView&amp;noscript=1"></noscript>


<script type="text/javascript" id="">fbq("track","InitiateCheckout");</script>
<script type="text/javascript" id="">(function(a,b){a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src="https://cdn-in.pagesense.io/js/ishafoundation/98e7d3fdf9f74485b22a3354eb16e41f.js";b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})(window,"script");</script><iframe frameborder="0" scrolling="no" style="background-color: transparent; border: 0px; display: none;" src="{{ asset('assets/saved_resource.html')}}"></iframe><div id="GOOGLE_INPUT_CHEXT_FLAG" input="" input_stat="{&quot;tlang&quot;:true,&quot;tsbc&quot;:true,&quot;pun&quot;:true,&quot;mk&quot;:true,&quot;ss&quot;:true}" style="display: none;"></div>
<script type="text/javascript" id="ze-snippet" src="{{ asset('assets/snippet.js')}}"></script>

<div aria-label="grammarly-integration" role="group" tabindex="-1" class="grammarly-desktop-integration" data-content="">
    
</div>
</template>
</grammarly-desktop-integration>
</html>