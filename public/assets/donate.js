
var regexName = /^[A-Z]+$/i;
var regexFullName = /^[a-zA-Z ]*$/;
var regexFirstName = /^[.a-zA-Z ]+$/;
var regexEmail = /^([a-zA-Z0-9][-a-zA-Z0-9_\+\.]*[a-zA-Z0-9])@([a-zA-Z0-9][-a-zA-Z0-9\.]*[a-zA-Z0-9]\.(arpa|root|aero|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw|life|me)|([0-9]{1,3}\.{3}[0-9]{1,3}))$/i;
//var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
var whitespaceRegex = /\s/g;
//var regexContactNo = /^(\+\d{1,3}[- ]?)?\d{10}$/;
var regexContactNo = /^\d{0,15}$/;
var regexCity = /^[a-zA-Z ]*$/;
var regexState = /^[a-zA-Z ]*$/;
//var regexZipCode = /^(\+\d{1,3}[- ]?)?\d{6}$/;
var regexAddress = /^[ A-Za-z0-9\-\/&_ ,.#()]{10,}$/;
var regexCertificate = /^[\w+\S+]/;
var regexCustomAmount = /^[0-9]*$/;
var regexZipCodeGlobal = /^[ A-Za-z0-9\-\ ]{3,10}$/;
var regexZipCodeIndia = /^(\+\d{1,3}[- ]?)?\d{6}$/;
var isSuccess = true;
var isEmptyCheck = true;
var isSuccessM = true;
var INDIA_COUNTRY_ID = "IN";
var USA_COUNTRY_ID = "US";
var isError = 0;
var isCheckboxError = 0;
var onlyAlphabets = "Please enter only alphabets";
var plsEnt = "Please Enter ";
var regPanCard = /^([A-Za-z]){5}([0-9]){4}([A-Z]){1}?$/;
var regexTransactionId = /^((IOD))[-][0-9]{10}[-][0-9]{4}$/;
var regexPassportImage = /\.(jpg|jpeg|png|pdf)$/i;
var errorStepID = '';
var currencyCookie = '';
var regexhonouredPersons = /^[ A-Za-z,]*$/;
var regexOccasion = /^[ A-Za-z]*$/;
var cauveryCallingProjectEndDate = "2032,03"
var regexIFSCCode = /^[A-Z|a-z]{4}[0][A-Z0-9]{6}$/;
var regexAccountNumber = /^\d{5,22}$/;
var RAZORPAY_API_KEY = "rzp_live_PCs4F1LUawJsHD";
var OUTREACH_DOMAIN_URL = 'https://ishaoutreach.org';
var ISO_DOMAIN_URL = 'https://isha.sadhguru.org';
var regexPassportNumber = /^[ A-Z0-9]*$/;
var regAadhar = /^[0-9]{0,15}$/;
var isPanAadharError = 0;


function getUrlParam(param) {
  var vars = {};
  window.location.href.replace( location.hash, '' ).replace(
    /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
    function( m, key, value ) { // callback
      vars[key] = value !== undefined ? value : '';
    }
    );

  if ( param ) {
    return vars[param] ? vars[param] : null;
  }
  return vars;
}

function hideDivs(uniqueKey) {
  var uri = window.location.toString();
  if (uri.indexOf("?") > 0 ) {
   var initiativeName = document.getElementById('initiative').value;

   if(initiativeName == 'action-rural-rejuvenation'){

     var urlParams = getUrlParam();
     if(urlParams.hasOwnProperty('donatePurpose'))
     {
      var donatePurpose = urlParams.donatePurpose;

      if(donatePurpose.toUpperCase() == 'ARR' && false)
      {
       $('#donation_for').val('1982').change();
       // $('#donation_for option[value="1982"]').prop('selected', true);
       //  changeAmountBlock('1982');
       $('#donation_for').attr("disabled","true");
     }else if(donatePurpose.toUpperCase() == 'GRAMOTSAVAM' && false)
     {
      $('#donation_for').val('1985').change();
        // $('#donation_for option[value="1985"]').attr("selected","selected");
        // changeAmountBlock('1985');
        $('#donation_for').attr("disabled","true");
      }else if(donatePurpose.toUpperCase() == 'COVID' && false)
      {
        $('#donation_for').val('2169').change();
        // $('#donation_for option[value="2169"]').attr("selected","selected");
        // changeAmountBlock('2169');
        //$('#donation_for').attr("disabled","true");
      }
    }
  }
  var clean_uri = uri.substring(0, uri.indexOf("?"));
  window.history.replaceState({}, document.title, clean_uri);
}
if($('#donate_process').hasClass('step-1') == true){
  $(".donate-stepo").empty();
  $(".donate-stepo").html('<div class="title">Step 1 of 4 : <span>Donation</span></div>');
}

if($('#donation_for').length > 0){

  if(document.getElementById("error_donation_msg").innerHTML!= "") {
    $('html, body').animate({
      scrollTop: $('#donation_title').offset().top
    }, 500);

    fadeOutEffect('error_donation_msg');
  }
}
var paymentType = document.getElementById('payment_type').value;
if(paymentType == 'online'){
  var donateStep = document.getElementById('hidden_donation_step').value;
  document.getElementById('offline-donate-form').style.display='none';

  if(donateStep == 1){
    var initiativeName = document.getElementById('initiative').value;
    if(initiativeName == 'isha-vidhya' || initiativeName == 'contribute' || initiativeName == 'online-contribution' || initiativeName == 'save-soil' || initiativeName == 'project-greenhands' || initiativeName == 'action-rural-rejuvenation' || initiativeName == "syt-online-contribution"){
      $('html, body').animate({
        scrollTop: $('#donation_title').offset().top
      }, 500);
    }

    if(initiativeName == 'action-rural-rejuvenation' && $('#donation_for_id').length > 0){
      donation_for_id = $('#donation_for_id').val();
      $('#donation_for').val(donation_for_id).change();
      console.log(donation_for_id);
      if(donation_for_id == '2963'){
       $('#selectCo').css('background-image','none');
        $('#selectCo').css('pointer-events', 'none');
      }
      else
      {
       $('#donation_for').css('pointer-events', 'none');
      }
     
    }

    var currency = document.getElementById('donation_currency').value;
    document.getElementById("hidden_donation_currency").value = currency;

    $('.currency-blocks').hide();
    $('.currency_'+currency).show();
    var donationMsg = document.getElementById("default_donation_msg").value;
      //document.getElementById("display_donation_msg").innerHTML=donationMsg;
      //document.getElementById("hidden_donation_msg").value = donationMsg;

      /*this part is used to hide multiple amount blocks(isha-vidhya) */
      var donationId = document.getElementById("donation_id").value;
      if(donationId !=0){
        var externalUrl = document.getElementById("donate_redirect_url_"+donationId).value
        console.log("=============="+externalUrl);
        if(externalUrl!=''){
          $('.currency').hide();
          $('.ammount-block').hide();
          $('#display_donation_msg').hide();
        }else{
          $('#display_donation_msg').show();
          $('.currency').show();
          var donatePurposeId = $('#hidden_donate_purpose_id').val();
          if(currency == 'INR'){
            if(donatePurposeId == 'Program'){
              $('.rupees').html('₹');
            }else{
              $('.rupees').html('₹');
            }
          }else if(currency == 'USD'){
            if(donatePurposeId == 'Program'){
              $('.rupees').html('$');
            }else{
              $('.rupees').html('$');
            }
          }
          currencySelectedData('.currency_'+currency);
          if($('#custom_amount_'+donationId+'_0').length > 0){
            $('#custom_amount_'+donationId+'_0').val('');
          }
          $('#donation_for_'+donationId).show();
                  //$('.ammount-block').hide();
                }

              }
              if($('.donate-toward').length > 0){
                $('#display_donation_msg').hide();
                $('.currency').hide();
                $('.ammount-block').hide();

                var selectedDonationFor = document.getElementById("donation_for").options[document.getElementById("donation_for").selectedIndex].text;
                var selectedDonationForId = document.getElementById("donation_for").options[document.getElementById("donation_for").selectedIndex].value;
                if(selectedDonationForId > 0){
                  changeAmountBlock(selectedDonationForId);
                }
              }

              if($('.currency_'+currency).length <= 0){
                $('#display_donation_msg').html('');
                $('#hidden_donation_msg').val('');
                $('#hidden_donation_amount').val('');
                $('#amt-block').addClass('amt-block');
              }

              var donatePurposeId = $('#hidden_donate_purpose_id').val();
              
              /* By default monthly selected for sanghamitra */
              if($('#freq').length > 0){
                if(donatePurposeId == 'SGMT'){
                  $("input[name=freq][value='1']").attr('checked', true);
                  $("#donation_currency").val(currency).change();
                  changePaymentType();
                }else if(donatePurposeId == 'Program' || donatePurposeId == 'BGLDON'){
                  $("input[name=freq][value='0']").attr('checked', true);
                  $("#donation_currency").val(currency).change();
                  changePaymentType();
                }
              }

              if(initiativeName == 'mahashivratri-contribution' || initiativeName == 'rudraksha-seva' || initiativeName == 'online-contribution' || initiativeName == "syt-online-contribution"){
                $(".currency").hide();
                if($(".region").length > 0){
                  $(".region").show();
                }
              }

              var donationType = $('#donation_type').val();
              if(initiativeName == 'action-rural-rejuvenation' && donationType == 3){
                $("#donation_for option[value="+donationId+"]").attr('selected', 'selected');
                var donatingFor = $('#donation_for  option[value='+donationId+']').attr('donating_for');
                document.getElementById('hidden_donate_purpose_id').value = donatingFor;
                $( "#donation_for" ).prop( "disabled", true );
                $('.currency').show();
                $('#donation_for_'+donationId).show();
              }

            }else if(donateStep == 2){
              var initiativeName = document.getElementById('initiative').value;
              var donatePurposeId = document.getElementById('hidden_donate_purpose_id').value;
              var isRecurring = document.getElementById('is_recurring').value;

              if(isRecurring == 1 && donatePurposeId == 'SGMT' || donatePurposeId == 'BGLDON'){
                $subscriptionCount = $('#subscriptions_count').val();
                if($subscriptionCount > 0){
                  $('#subscription_msg_popup').show();
                }
              }

               //==============contribute datepicker=============
                if((initiativeName == 'contribute' && (donatePurposeId == 'Isha-Biksha'
                || donatePurposeId == 'IYC-Annadhanam')) || (initiativeName == 'syt-online-contribution' && donatePurposeId == 'SYT-GAUDN'))
               {

                var occassionReason = $('#occassion_reason').val();
                var minDate = '+0';

                if(donatePurposeId == 'SYT-GAUDN'){
                    minDate = '+5';
                }

                // if(occassionReason == 'sweet' && donatePurposeId == 'IYC-Annadhanam'){
                //     minDate = '+5';
                // }else if(occassionReason == 'wedding' && donatePurposeId == 'IYC-Annadhanam'){
                //     minDate = '+8';
                // }else{
                //     minDate = '+0';
                // }

                if($("#dateOfOccasion").length > 0){
                  $("#dateOfOccasion").datepicker({
                   minDate: minDate,
                   maxDate: "+365d",
                   dateFormat: "yy-mm-dd"
                 });
                }
              }
              //==============contribute datepicker=============


              $('.offline-donate').hide();
              $('html, body').animate({
                scrollTop: $('#donation_title').offset().top
              }, 500);
              document.getElementById('donation_message').innerHTML='';

              if(initiativeName != 'mahashivratri-contribution' && initiativeName != 'rudraksha-seva' && initiativeName != 'online-contribution' && donatePurposeId != 'Donation' && initiativeName != "syt-online-contribution"){
                document.getElementById("selected_state").disabled = true;
                document.getElementById('pancard_input').style.display = "none";
              }
              if(initiativeName == 'mahashivratri-contribution' || initiativeName == 'rudraksha-seva' || initiativeName == 'online-contribution' || donatePurposeId == 'Donation' || initiativeName == "syt-online-contribution"){
                $("#selected_country option[value='IN']").prop('selected',true);
                $("#is_structured").val(1);
      
                var donationVal = $("#hidden_donation_amount").val();
                $('#converted_amount').val(donationVal);
                $('#converted_currency').val('INR');
                if(donationVal >= 50000){
                  document.getElementById('pancard_input').style.display = "block";
                }else{
                  document.getElementById('pancard_input').style.display = "none";
                }
              }

              if($('#banner').length > 0 && donatePurposeId != 'Program'){
                document.getElementById("banner").style.display = "none";
              }

              if($('#donation_summary').length > 0){
                document.getElementById("donation_summary").style.display = "none";
              }
              document.getElementById("donation_title").innerHTML = document.getElementById("hidden_donation_title").value;

           //document.getElementById('show_address_msg').style.display='block';
           $("#selected_country option[value='IN']").show();

           /* this code is used to display donation message for pgh */


           if(initiativeName == "isha-vidhya"){
             var selectedDonationCurrency = document.getElementById('hidden_donation_currency').value;
             var amount = document.getElementById('hidden_donation_amount').value;
              var fromCurrencyValue = document.getElementById('from_currency_value').value;
             if(selectedDonationCurrency == 'INR'){
              var currencySymbol = '₹';
              fromCurrencyValue = amount / fromCurrencyValue;
              fromCurrencyValue = fromCurrencyValue.toFixed(2);
              amount = amount +"($"+fromCurrencyValue+" Approx.)";
            }else if(selectedDonationCurrency == 'USD'){
              var currencySymbol = '$';
            }
            document.getElementById('donation_message').innerHTML ='Your Contribution of '+currencySymbol+' '+amount+' is greatly appreciated';
          }

          if(initiativeName != "isha-vidhya"){
            var selectedDonationCurrency = document.getElementById('hidden_donation_currency').value;
            var amount = document.getElementById('hidden_donation_amount').value;
            var isRecurring = document.getElementById('is_recurring').value;
            if(selectedDonationCurrency == 'USD' && isRecurring != 1){
              var fromCurrencyValue = document.getElementById('from_currency_value').value;
              var convertedAmount = amount * fromCurrencyValue;
              convertedAmount = Math.ceil(convertedAmount);
              var changedDonationMsg = 'We have converted your donation amount of ' + amount +
              ' US Dollars (USD) to ' +convertedAmount+' Indian Rupees (INR). You will see this INR value in your receipt and the payment screens.';
              document.getElementById('donation_message').innerHTML = changedDonationMsg;
              document.getElementById('hidden_donation_msg').value = changedDonationMsg;
            }else{
              $('#donation_message').html($('#hidden_common_donation_msg').val());
              $('#hidden_donation_msg').val($('#hidden_common_donation_msg').val());
            }
          }
          /* this code is used to display donation message for pgh */

        }else if(donateStep == 3){
          $('.offline-donate').hide();
        }

        if($('#donation_title').length > 0){
          $('html, body').animate({
            scrollTop: $('#donation_title').offset().top
          }, 500);
        }

        /*this part is used to hide multiple amount blocks(isha-vidhya) */
        var donationSteps = document.getElementById("donate_process");
        if(uniqueKey == 'isha_post'){

          var donatePurposeId = $('#donate_purpose_id').val();

          if(donatePurposeId != 'Program'){
            var banner = document.getElementById("banner");
            banner.parentNode.removeChild(banner);

            var donationSummary = document.getElementById("donation_summary");
            donationSummary.parentNode.removeChild(donationSummary);
          }

          donationSteps.classList.remove("step-1");
          donationSteps.classList.add("step-3");

        }else if(uniqueKey == 'isha_payment_gateway'){
          donationSteps.classList.remove("step-1");
          donationSteps.classList.add("step-4");
        }
      }

      if(paymentType == 'offline'){
        document.getElementById('offline-donate-form').style.display='block';
        fadeOutEffect('offline_error_msg');
      }
    }

    /*This function is ued  to change donation messgae based on amount selection*/
    function changeDonationMsg(donationKey,donationAmount,donationMsg){
      if(donationAmount > 0 || donationAmount != ''){
        $("#error_donation_amt_msg").html('');
      }

      if($('#custome_rupees').length > 0){
        $('#custome_rupees').html('');
      }

      var donationId = document.getElementById("donation_id").value;
      if($('#invalidAmount_'+donationId).length > 0){
        document.getElementById('invalidAmount_'+donationId).innerHTML='';
      }

      if(initiativeName =='contribute')
      {
        var currency = $("#hidden_donation_currency").val();
        var customAmt = $('#custom_amount_'+donationId+'_'+donationKey).val();
        var isRecurring = $('#is_recurring').val();
       //alert(currency + "=======currency========"+customAmt);

       if(isRecurring == 1){
          $('#custome_amount').val('');
          $('#recurring_amount_error_msg').html('');
          $('#custom_amount_'+donationId+'_1').val('');
            //$('#display_donation_msg').hide();
            donationMsg = '';
            untilMsg = '';
            if(currency == 'INR'){
              var num = donationAmount.toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR'
              });
              num = num.replace(".00", " ");
              num = num.replace("₹", " ");
               currencyAmount ='₹ '+num;
            }else{
              var nf = new Intl.NumberFormat();
              var num = nf.format(donationAmount);
              currencyAmount = currency+" "+num;
            }
            //var amount = document.getElementById('hidden_donation_amount').value;
            var NoOfInstallment = document.getElementById('no_of_months').value;
            var dayOfMonth = document.getElementById('dayOfMonth').value;
            if(donationAmount > 0 && NoOfInstallment > 0 && dayOfMonth > 0)
            {
              var day = getGetOrdinal(dayOfMonth);
              untilCancelledFlag = $('#until_cancelled_flag').val();
              if(untilCancelledFlag == 1){
                untilMsg = 'cancelled by you';
              }else{
                var lastInstallment = getLastInstallmentMonth(NoOfInstallment, dayOfMonth);
                var untilMsg = lastInstallment;
              }
              donationMsg = "Donate "+currencyAmount+" monthly on the "+day+" of each month until "+untilMsg+".";
           }
      }else{
       if(currency == 'INR'){

        var num = donationAmount.toLocaleString('en-IN', {
          style: 'currency',
          currency: 'INR'
        });
        num = num.replace(".00", " ");
        num = num.replace("₹", " ");
            var donationMsg = 'Your Contribution of ₹ '+num+' is greatly appreciated.';
        }else{

          var nf = new Intl.NumberFormat();
          var num = nf.format(donationAmount);
            var donationMsg = 'Your Contribution of $ '+num+' is greatly appreciated.';
        }
      }
        $('#hidden_add_custom_amount').val(0);
      }
      //document.getElementById('invalidAmount_'+donationId).innerHTML='';

      if($('#display_donation_msg').length > 0){
        document.getElementById('display_donation_msg').style.display='block';
        document.getElementById("display_donation_msg").innerHTML=donationMsg;
      }

      if($('#occassion_reason_'+donationId+'_'+donationKey).length > 0){
        var occassionReason = $('#occassion_reason_'+donationId+'_'+donationKey).val();
        document.getElementById("hidden_occassion_reason").value = occassionReason;
      }

      document.getElementById("hidden_donation_amount").value = donationAmount;
      document.getElementById("hidden_donation_msg").value = donationMsg;
    }
    /*This function is ued  to change donation messgae based on amount selection*/


    /*this function is used to change amount for isha vidhya (multiple donation for)*/
    function changeAmountBlock(donationId){
      document.getElementById('error_donation_msg').innerHTML='';
      document.getElementById('display_donation_msg').innerHTML='';

      $('#custom_amount_'+donationId+'_'+0).val('');
      if(donationId != '' && donationId != undefined){
        document.getElementById('invalidAmount_'+donationId).innerHTML='';
      }

      if($('#arr_footnotes').length > 0)
      {
        if(donationId == '2169')
        {
          $('#arr_footnotes').show();
        }else{
          $('#arr_footnotes').hide();
        }
      }

      if(donationId == '2963' && ($('#redirect_fpo').length > 0) && ($('#redirect_fpo').val() == 1)){
        showLoader();      
        window.location.href = '/en/action-rural-rejuvenation/fpo/donate';
      }

      document.getElementById('hidden_donation_amount').value='';
      var selectedDonationFor = document.getElementById("donation_for").options[document.getElementById("donation_for").selectedIndex].text;
      var selectedDonationForId = document.getElementById("donation_for").options[document.getElementById("donation_for").selectedIndex].value;
      var currency = document.getElementById('donation_currency').value;
      var showCustomAmountBlock = $('#donation_for option:selected').attr('show_custom_amount');
      var selectedValue = $('#donation_for option:selected').val();
      if($('.donate-toward').length > 0){
       var donatingFor = $('#donation_for option:selected').attr('donating_for');
       if(donatingFor == undefined || donatingFor == ''){
        $('#error_donation_msg').html('Please select donate towards');
        $('.currency').hide();
        $('.ammount-block').hide();
        document.getElementById('display_donation_msg').innerHTML='';
        return false;
      }
      document.getElementById('hidden_donate_purpose_id').value = donatingFor;
      var selectedDonationForId = document.getElementById("donation_for").options[document.getElementById("donation_for").selectedIndex].value;
      //  if(showCustomAmountBlock == 0){
      //   $('#donation_for_'+selectedDonationForId).find('.amount').hide();

      // }
      if(selectedDonationForId == undefined ||  selectedDonationForId == 0 || selectedDonationForId ==''){
        $('#display_donation_msg').css('display','none');
        $('.currency').hide();
        $('.ammount-block').hide();
      }
      $('.currency_donation_for_'+currency+'_'+selectedDonationForId).show();
      var currencyLoop = '.currency_donation_for_'+currency+'_'+selectedDonationForId;
    }else{
      var currencyLoop = '.currency_'+currency;
    }
    currencySelectedData(currencyLoop);
    document.getElementById('donation_id').value = donationId;
    document.getElementById('hidden_donation_for').value = selectedDonationFor ;
    if(donationId !=0 && donationId !=undefined){
      var externalUrl = document.getElementById("donate_redirect_url_"+donationId).value
      console.log(externalUrl);
      if(externalUrl!=''){
        $('#display_donation_msg').hide();
        $('.currency').hide();
        $('.ammount-block').hide();
      }else{
        $('#display_donation_msg').show();
        $('.currency').show();
        $('.ammount-block').hide();
        $('#donation_for_'+donationId).show();
      }
    }
  }
  /*this function is used to change amount for isha vidhya (multiple donation for)*/

  function customAmount(){
   $(".donation_amount").prop("checked", false);
 }

 function setCustomAmount(){
  var donationId = document.getElementById('donation_id').value;
  document.getElementById('custom_amount_'+donationId+'_'+0).focus();
  var radioValue = $("input[id=radio_amount]:checked").val();
  if(radioValue){
    $('#custom_amount_'+donationId+'_'+0).val('');
    $('#display_donation_msg').hide();
    $('#hidden_donation_msg').val('');
    $('#hidden_donation_amount').val('');

  }else{
    $('#display_donation_msg').show();
  }
}

function setCustomGTAmount(){
  $('.total-amount').removeClass('error');
  $('#display_donation_msg').html('');
  $('#recurring_donation_msg').html('');
  $('#hidden_donation_msg').val('');
  document.getElementById("custom_amount").focus();
  var radioValue = $("input[id=radio_amount]:checked").val();
  var isrecurring = $('#is_recurring').val();
  if(radioValue){
    $('#custom_amount').val('');
    //$('#display_donation_msg').hide();
    $('#display_donation_msg').html('');
    $('#hidden_donation_msg').val('');
    $('#hidden_donation_amount').val('');
    $('#hidden_donation_description').val('');
    if(isrecurring == 1){
      $('#recurring_donation_msg').html('');
      $('#hidden_donation_msg').val('');
    }
  }else{
    if(isrecurring == 1){
      $('#display_donation_msg').hide();
    }else{
      $('#display_donation_msg').show();
    }
  }
}

function setCustomSkipMealAmount(){
  document.getElementById("custom_amount").focus();
  var radioValue = $("input[id=radio_amount]:checked").val();
  if(radioValue){
    $('#custom_amount').val('');
    $('#display_donation_msg').hide();
    $('#hidden_donation_msg').val('');
    $('#hidden_donation_amount').val('');
    $('#hidden_donation_period').val('');

  }else{
    $('#display_donation_msg').show();
  }

}
function showOfflineDonationForm(){
  $('.offline-donate-form').show();
  $('html, body').animate({
    scrollTop: $('#offline-donate-form').offset().top
  }, 500);
}

function submitData(){
  document.getElementById('donate_steps').style.visibility ="hidden";
  document.getElementById('donate_block_personal').style.visibility ="visible";

  var currency = document.getElementById("donate_steps_currency").value;
  var amount = document.getElementById("donate_steps_amount").value;
  var donate_stepsType = document.getElementById("donate_steps_type").value;

  document.getElementById("amount").value = amount;
  document.getElementById("currency").value = currency;
  document.getElementById("type").value = donate_stepsType;
}




function continuePayment(){
  var initiativeName = $("#initiative").val();
  var isRecurring = $("input[name='freq']:checked").val();
       /*if(isSuccess == false){
        return false;
       }

       if(isSuccessM == false){
        return false;
       }
     }*/


   /* var banner = document.getElementById("banner");
    banner.parentNode.removeChild(banner);

    var donationSummary = document.getElementById("donation_summary");
    donationSummary.parentNode.removeChild(donationSummary);*/
/*
    var currency = document.getElementById('donation_currency');
    var selectedCurrency = currency.options[currency.selectedIndex].value;
    document.getElementById("hidden_donation_currency").value = selectedCurrency;
    var donationMesg = document.getElementById('display_donation_msg').innerHTML;
    document.getElementById("hidden_donation_msg").value = donationMesg;
    document.getElementById("donation_message").innerHTML = donationMesg;

    var donationId = document.getElementById("donation_id").value;

    var customAmount = document.getElementById('custom_amount_'+donationId+'_'+0).value;
     if(customAmount != ''){
            document.getElementById("hidden_donation_msg").value = " ";
            document.getElementById("hidden_donation_amount").value = customAmount;
    }
    var donationFor = document.getElementById('donation_for');
    if(donationFor != null){
        var selectedDonationFor = donationFor.options[donationFor.selectedIndex].value;
        document.getElementById("hidden_donation_for").value = selectedDonationFor;
    }

    var donationSteps = document.getElementById("donate_process");
    donationSteps.classList.remove("step-1");
    donationSteps.classList.add("step-2");

    if($('#donate_process').hasClass('step-2') == true){
        $(".donate-stepo").empty();
        $(".donate-stepo").html('<div class="title">Step 2 of 4 : <span>Personal Info</span></div>');
    }

    var donationTitle = document.getElementById('donation_title').innerHTML;
    document.getElementById('hidden_donation_title').value = donationTitle;
    */

    var donatePurposeId = $('#hidden_donate_purpose_id').val();
    isError = 0;
    if($('#donation_for').length > 0){
      if($('#donation_for').val() == ''){
        $('#error_donation_msg').html('Please select donate towards');
        return false;
      }else{
        $('#error_donation_msg').html()
      }
    }

    if(donatePurposeId == 'Radham-Yatra')
    {
    var hidden_region = $("#hidden_donation_region").val();
    if(hidden_region == ''){
     $('#error_region_msg').html('Please select Center');
       return false;
     }else{
      $('#error_region_msg').html()
     }
   }

    var hidden_amount = $("#hidden_donation_amount").val();
    if(hidden_amount == 0 || hidden_amount == ''){
      if(isRecurring == 1){
        $('html, body').animate({
          scrollTop: $('.amount-blog').offset().top
        }, 500);
        $('#recurring_amount_error_msg').html('Please enter Amount');
      }else{
        $('#error_donation_amt_msg').html('Please Enter Amount');
      }
      return false;
    }

    var currency = $('#donation_currency').val();
    if(isRecurring == 1 && (donatePurposeId == 'SGMT' || donatePurposeId == 'Program'))
    {
      if(donatePurposeId == 'SGMT'){
        if(currency == 'USD'){
          minAmt = 25;
          currencySymbol = currency;
        }else{
          minAmt = 112;
          currencySymbol = '₹';
        }
      }else if(donatePurposeId == 'Program'){  //Ishanga purpose id
        if(currency == 'USD'){
          minAmt = 25;
          currencySymbol = currency;
        }else{
          minAmt = 200;
          currencySymbol = '₹';
        }
      }
      if(hidden_amount < minAmt){
        $('html, body').animate({
          scrollTop: $('.amount-blog').offset().top
        }, 500);
        $('#recurring_amount_error_msg').html('Minimum amount must be '+currencySymbol+' '+minAmt);
        return false;
      }
   }else{
    if(donatePurposeId == 'Program'){
      if(currency == 'INR'){
        minAmt = 200;
        currencySymbol = '₹';
      }else{
        minAmt = 25;
        currencySymbol = currency;
      }
      if(hidden_amount < minAmt){
        $('#error_donation_amt_msg').html('Minimum amount must be '+currencySymbol+' '+minAmt);
        return false;
      }
    }

    if(donatePurposeId == 'RDS-TKB' || donatePurposeId == 'TKBP-MSRA'){
         minAmt = 25;
         currencySymbol = currency;
      
        if(hidden_amount < minAmt){
        $('#error_donation_amt_msg').html('Minimum amount must be '+currencySymbol+' '+minAmt);
        return false;
      }
    }

  }

   var donationId = document.getElementById('donation_id').value;
   var amountType = $("input[name='amount']:checked");
   var currency = document.getElementById('donation_currency').value;
   var donationType = document.getElementById("donation_type").value;
   if($('#hidden_add_custom_amount').length > 0){
    var addCustomAmount = document.getElementById("hidden_add_custom_amount").value;
  }

  var initiative = document.getElementById("initiative").value;
  if(initiative == 'contribute' && addCustomAmount == 1){

    if($(amountType).hasClass( "radio_custom_amount" ) || $('.currency_'+currency).length <= 0){
      var amountValue = $('#custom_amount_'+donationId+'_0').val();

      if(isRecurring == 1){
        var amountValue = $('#custom_amount_'+donationId+'_1').val();
        if(amountValue.length >0 && (amountValue == 0 || amountValue == '')){
          $('#recurring_amount_error_msg').html('Please enter Amount');
          return false;
        }
      }else{
        if(amountValue.length >0 && amountValue == 0){
          document.getElementById('invalidAmount_'+donationId).innerHTML = "Amount cannot be 0";
          return false;
        }
      }
        //return false;

        var regExAmtMessage = "Numbers allowed";
        if(isRecurring == 1){
          validateField('#custom_amount_'+donationId+'_1', '', '#invalidAmount_'+donationId, regexCustomAmount, 'Enter Amount', regExAmtMessage);
        }else{
          validateField('#custom_amount_'+donationId+'_0', '', '#invalidAmount_'+donationId, regexCustomAmount, 'Enter Amount', regExAmtMessage);
        }
        if(isError == 1){
          return false;
        }
      }
    }

    if(donatePurposeId == 'Program' && isRecurring != 1)
    {
      var reminder_months = $("#hidden_reminder_months").val();
      if(reminder_months  == '' || reminder_months == 0){
        $('#error_donation_amt_msg').html('Please select Email Reminder Months');
        return false;
      }else{
        $('#error_donation_amt_msg').html()
      }
    }

    if(isRecurring == 1)
    {
      var noOfMonths = document.getElementById('no_of_months').value;
      if(noOfMonths == ''){
        $('html, body').animate({
          scrollTop: $('.monthlyblog').offset().top
        }, 500);
        document.getElementById('installment_donation_msg').innerHTML = 'Please choose the number of months';
        return false;
      }
    }

    if(isRecurring == 1){
      if($("input[name='installments']:checked").hasClass("radio_custom_installments")){
        var installmentValue = $('#custom_installments').val();
        if(installmentValue < 2 || installmentValue == ''){
          $('html, body').animate({
            scrollTop: $('.monthlyblog').offset().top
          }, 500);
          $('#installment_donation_msg').html('Installment must be greater than 1 Month');
          return false;
        }
      }
    }

    var donationFor = document.getElementById('donation_for');
    var selectedDonationFor='';

    if(donationFor != null){
      var selectedDonationFor = document.getElementById("donation_for").options[document.getElementById("donation_for").selectedIndex].text;
    }

    var donateRedirecturl = document.getElementById("donate_redirect_url_"+donationId).value;
    if(donateRedirecturl!=''){
      window.location.href= donateRedirecturl;
    }else{
      if(donationType == 3){
        var lang = document.getElementById("lang").value;
        var campaignAlias = document.getElementById("campaign_alias").value;
        var url = '/'+lang+campaignAlias+'/personal-details';
        var donateForm ='<form class="hide" method="post" id="donate_form" name="donate_form" action="'+url+'">' +
        '<input type="text" name="hidden_donation_amount" value="'+document.getElementById('hidden_donation_amount').value+'">' +
        '<input type="text" name="hidden_donation_currency" value="'+document.getElementById('hidden_donation_currency').value+'">' +
        '<input type="text" name="hidden_donation_msg" value="'+document.getElementById('hidden_donation_msg').value+'">' +
        '<input type="text" name="hidden_donation_for" value="'+selectedDonationFor+'">' +
        '<input type="text" name="hidden_donation_title" value="'+document.getElementById('donation_title').innerHTML+'">' +
        '<input type="text" name="hidden_donate_purpose_id" value="'+document.getElementById("hidden_donate_purpose_id").value+'">' +
        '<input type="text" name="hidden_initiative_short_code" value="'+document.getElementById("initiative_short_code").value+'">' +
        '<input type="text" name="donation_id" value="'+document.getElementById("donation_id").value+'">' +
        '<input type="text" name="default_amount" value="'+document.getElementById("default_amount").value+'">' +
        '<input type="text" name="hidden_donation_type" value="'+document.getElementById("donation_type").value+'">' +
        "<input type='text' name='campaign_id' value='"+document.getElementById("hidden_campaign_id").value+"'>" +
        "<input type='text' name='campiagn_name' value='"+document.getElementById("hidden_campaign_name").value+"'>" +
        "<input type='text' name='parent_campaign_id' value='"+document.getElementById("parent_campaign_id").value+"'>" +
        '</form>';
      }else{
        var donateForm ='<form class="hide" method="post" id="donate_form" name="donate_form" action="'+window.location.href+'/personal-details">' +
        '<input type="text" name="hidden_donation_amount" value="'+document.getElementById('hidden_donation_amount').value+'">' +
        '<input type="text" name="hidden_donation_currency" value="'+document.getElementById('hidden_donation_currency').value+'">' +
        '<input type="text" name="hidden_donation_region" value="'+document.getElementById('hidden_donation_region').value+'">' +
        '<input type="text" name="hidden_donation_msg" value="'+document.getElementById('hidden_donation_msg').value+'">' +
        '<input type="text" name="hidden_donation_for" value="'+selectedDonationFor+'">' +
        '<input type="text" name="hidden_donation_title" value="'+document.getElementById('donation_title').innerHTML+'">' +
        '<input type="text" name="hidden_donate_purpose_id" value="'+document.getElementById("hidden_donate_purpose_id").value+'">' +
        '<input type="text" name="hidden_initiative_short_code" value="'+document.getElementById("initiative_short_code").value+'">' +
        '<input type="text" name="donation_id" value="'+document.getElementById("donation_id").value+'">' +
        '<input type="text" name="default_amount" value="'+document.getElementById("default_amount").value+'">' +
        '<input type="text" name="hidden_donation_type" value="'+document.getElementById("donation_type").value+'">' +
        '<input type="text" name="hidden_occassion_reason" value="'+document.getElementById("hidden_occassion_reason").value+'">' +
        '<input type="text" name="hidden_reminder_months" value="'+document.getElementById("hidden_reminder_months").value+'">' +
        "<input type='text' name='is_recurring' value='"+isRecurring+"'>";

        if(isRecurring == 1){
          donateForm += "<input type='text' name='no_of_months' value='"+document.getElementById("no_of_months").value+"'>" +
          "<input type='text' name='day_of_month' value='"+document.getElementById("day_of_month").value+"'>" +
          "<input type='text' name='until_cancelled_flag' value='"+document.getElementById("until_cancelled_flag").value+"'>";
        }

        donateForm += '</form>';
      }
      var isSessionSet = $('#session_set').val();

      donateFormCookie = encodeURI(donateForm);
      storeCookie('donation_post_data='+donateFormCookie);

      if(isRecurring == 1 && isSessionSet == 0 && donatePurposeId != 'Program'){
        storeCookie('donation_redirect_url='+window.location.href);
        setRedirectURL(window.location.href+'/personal-details');
        loginSignup(0);
        return;
      }else{
        $('#main-amount-div').append(donateForm);
      //console.log(donateForm);return false;
      $('#donate_form').submit();
    }
  }

}


function changeCustomAmount(donationId){
  var isRecurring = $('#is_recurring').val();
  var currency = document.getElementById('donation_currency').value;
 var donatePurposeId = $('#hidden_donate_purpose_id').val();
  if(isRecurring == 1){
    $('#recurring_amount_error_msg').html('');
    var customAmt = $('#custom_amount_'+donationId+'_'+1).val();
  }else{
    var customAmt = $('#custom_amount_'+donationId+'_'+0).val();
  }
  var initiative = $("#initiative_name").val();

  if(donatePurposeId == 'Program')
  {
  document.getElementById('amount-inwords-id').innerHTML = inWords(customAmt,currency,isRecurring);
  }
  
  if(initiative == 'contribute'){
    $('#hidden_add_custom_amount').val(1);
  }
  var hidden_amount = $("#hidden_donation_amount").val();
  if(hidden_amount >= 0 || hidden_amount != ''){
   $("#error_donation_amt_msg").html('');
 }

 if(customAmt == 0){
  if($('#custome_rupees').length > 0){
    $('#custome_rupees').html('');
  }
  document.getElementById('display_donation_msg').innerHTML='';
}
if(customAmt == ''){
  if($('#custome_rupees').length > 0){
    $('#custome_rupees').html('');
  }
  document.getElementById('display_donation_msg').style.display='none';
  var donationMsg = document.getElementById("default_donation_msg").value;
  var defaultAmount = document.getElementById("default_amount").value;
  document.getElementById("display_donation_msg").innerHTML='';
  document.getElementById("hidden_donation_msg").value = '';
  document.getElementById("hidden_donation_amount").value = '';
           // document.getElementById("donation_amount_"+donationId+'_'+0).checked = true;
           document.getElementById('invalidAmount_'+donationId).innerHTML='';
         }else{
          document.getElementById('display_donation_msg').style.display='block';
          if($("#donation_amount_"+donationId+'_'+0).length > 0){
            document.getElementById("donation_amount_"+donationId+'_'+0).checked = false;
          }
        }

        if(isRecurring == 1){
          if(regexCustomAmount.test($('#custom_amount_'+donationId+'_'+1).val()) == true){
            isSuccess = true;
          }else{
           isSuccess = false;
         }
       }else{
        if(regexCustomAmount.test($('#custom_amount_'+donationId+'_'+0).val()) == true){
          isSuccess = true;
        }else{
         isSuccess = false;
       }
     }

     if(customAmt!=0){
      var currency = document.getElementById('donation_currency').value;
      if(isRecurring == 1)
        {
          var donatePurposeId = $('#hidden_donate_purpose_id').val();
          donationMsg = '';
          var noOfMonths = document.getElementById('no_of_months').value;
          var dayOfMonth = document.getElementById('dayOfMonth').value;
          var currency = document.getElementById('donation_currency').value;
          if(currency == 'INR'){
              customAmt = parseInt(customAmt);
              var num = customAmt.toLocaleString('en-IN', {
              style: 'currency',
              currency: 'INR'
              });

            num = num.replace(".00", " ");
            num = num.replace("₹", " ");
            currencyAmount ='₹ '+num;
            }else{
              var nf = new Intl.NumberFormat();
            var num = nf.format(customAmt);
             currencyAmount = currency+" "+num;
            }
          if(customAmt > 0 && noOfMonths > 0 && dayOfMonth > 0)
          {
            var day = getGetOrdinal(dayOfMonth);

            untilCancelledFlag = $('#until_cancelled_flag').val();
            if(untilCancelledFlag == 1){
              donationMsg = "Donate "+currencyAmount+" monthly on the "+day+" of each month until cancelled by you";
            }else{
              var lastInstallment = getLastInstallmentMonth(noOfMonths, dayOfMonth);
              donationMsg = "Donate "+currencyAmount+" monthly on the "+day+" of each month until "+lastInstallment+".";
            }
          }
          if(donatePurposeId == 'Isha-Biksha'){
            $('#custome_rupees').html('<span>'+currencyAmount+'</span>');
          }
        }else{
          if(currency == 'INR'){
            customAmt = parseInt(customAmt);
            var num = customAmt.toLocaleString('en-IN', {
              style: 'currency',
              currency: 'INR'
            });

            num = num.replace(".00", " ");
            num = num.replace("₹", " ");
              var donationMsg = 'Your Contribution of ₹ '+num+' is greatly appreciated';
          }else if(currency == 'USD'){
            var nf = new Intl.NumberFormat();
            var num = nf.format(customAmt);
            var donationMsg = 'Your Contribution of $ '+num+' is greatly appreciated';
          }
        }
      document.getElementById("display_donation_msg").innerHTML=donationMsg;
      document.getElementById("hidden_donation_msg").value = donationMsg;
      document.getElementById("hidden_donation_amount").value = customAmt;

      if(isRecurring == 1 && $('#custome_rupees').length > 0){
        $('#custome_rupees').html(currencyAmount);
      }
        }/*else{
            document.getElementById("display_donation_msg").innerHTML='';
            document.getElementById("hidden_donation_msg").value = donationMsg;
          }*/

          return isSuccess;
    //customAmountBlur(donationId);
  }


  function customAmountBlur(donationId){

    if(regexCustomAmount.test($('#custom_amount_'+donationId+'_'+0).val()) == true){
     isSuccess = true;
   }else{
    isSuccess = false;
  }
     //$(this).val($(this).val().replace(/[^\d].+/, ""));
    /*$('#custom_amount_'+donationId+'_'+0).on("keypress blur",function (e) {
        $('#custom_amount_'+donationId+'_'+0).val($('#custom_amount_'+donationId+'_'+0).val().replace(/[^\d].+/, ""));
        if ((e.which < 48 || e.which > 57)) {
                    e.preventDefault();
            }
          });*/

          return isSuccess;
        }




        function fnNotAlphabet(e) {
         var code = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
       //Code Explanation{ 0-9, 45=Insert, 13=Enter, 08=Backspace, 09=Tab}
       if ((code >= 49 && code <= 57) || (code == 13 || code == 127 || code == 08 || code == 09 || code == 46))
       {
         checknos = true;
         return (checknos);
       }
       else
       {
         checknos = false;
           //alert("Only Number Allowed !");
           return (checknos);
         }
       }

       $(".allownumericwithoutdecimal").on("keypress keyup",function (e) {

        if (this.value.length == 0 && e.which == 48 ){
          return false;
        }
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((e.which < 48 || e.which > 57 )) {

          e.preventDefault();
        }else{
          if($('#donation_id').length > 0){
            var donationId = document.getElementById("donation_id").value;
            if($('#invalidAmount_'+donationId).length > 0){
              document.getElementById('invalidAmount_'+donationId).innerHTML='';
            }
          }else{
            document.getElementById('invalidAmount').innerHTML='';
          }
        }
            /*if($(this).val() === '0'){
                $(this).val('');
           document.getElementById("display_donation_msg").innerHTML='';
                 document.getElementById("hidden_donation_msg").value = '';
               }*/
             });



       function nameBlur() {
        var nameErrorMsg = ($("#first_name").val() == '') ? 'Please enter first name' : 'Minimum 2 & alphabat characters are allowed only.';
        if(regexName.test($("#first_name").val()) == false){
          $('#name_input').addClass('error');
          $('#name_error_msg').html(nameErrorMsg);
          isSuccessM = false;
        }else{
          $('#name_error_msg').empty();
          $('#name_input').removeClass('error');
        }
      }

      function fullNameBlur() {
        var fullNameErrorMsg = ($("#full_name").val() == '') ? 'Please enter full name' : 'Enter a valid name';
        if(regexName.test($("#full_name").val()) == false){ //console.log('false fname');
        $('#full_name_input').addClass('error');
        $('#full_name_error_msg').html(fullNameErrorMsg);
        isSuccessM = false;
      }else{
        $('#full_name_error_msg').empty();
        $('#full_name_input').removeClass('error');
      }
    }

    function lnameBlur() {

      var nameErrorMsg = ($("#last_name").val() == '') ? 'Please enter last name' : 'Minimum 2 & alphabat characters are allowed.';
        if(regexName.test($("#last_name").val()) == false){ //console.log('false lname');
        $('#lname_input').addClass('error');
        $('#lname_error_msg').html(nameErrorMsg);
        isSuccessM = false;
      }else{
        $('#lname_error_msg').empty();
        $('#lname_input').removeClass('error');
      }

    }

    function emailBlur() {
      var emailErrorMsg = ($("#email").val() == '') ? 'Please enter email id' : 'Enter valid email-id eg. email@abc.com';
      if(regexEmail.test($("#email").val()) == false){
        $('#email_input').addClass('error');
        $('#email_error_msg').html(emailErrorMsg);
        isSuccessM = false;
        return false;
      }else{
        $('#email_error_msg').empty();
        $('#email_input').removeClass('error');
      }
    }

    function addressBlur() {
      var addressErrorMsg = ($("#addessline1").val() == '') ? 'Please enter address' : 'Must contain atleast 10 characters.';
      if(regexAddress.test($("#addessline1").val()) == false){
        $('#address1_input').addClass('error');
        $('#address1_error_msg').html(addressErrorMsg);
        isSuccessM = false;
      }else{
       $('#address1_error_msg').empty();
       $('#address1_input').removeClass('error');
     }
   }

   function cityBlur() {
    var cityErrorMsg = ($("#city").val() == '') ? 'Please enter city' : 'Minimum 3 & alphabat characters are allowed only.';
    if(regexCity.test($("#city").val()) == false){
      $('#city_input').addClass('error');
      $('#city_error_msg').html(cityErrorMsg);
      isSuccessM = false;
    }else{
      $('#city_error_msg').empty();
      $('#city_input').removeClass('error');
    }
  }


  function contactNoBlur() {
    var contactErrorMsg = ($("#contact_no").val() == '') ? 'Please enter contact number' : 'Must contain atleast 10 digits.';
    if(regexContactNo.test($("#contact_no").val()) == false){
      $('#contact_no_input').addClass('error');
      $('#number_error_msg').html(contactErrorMsg);
      isSuccessM = false;
    }else{
      $('#number_error_msg').empty();
      $('#contact_no_input').removeClass('error');
    }
  }


  function pinZipBlur() {
    if($("input[name='countrycode']:checked").val() == 'IN'){
      var regexZipCode = /^(\+\d{1,3}[- ]?)?\d{6}$/;
    }else{
      var regexZipCode = /^(\+\d{1,3}[- ]?)?\d{3,10}$/;
    }
    var zipErrorMsg = ($("#pincode").val() == '') ? 'Please enter pin code' : 'Must contain atleast 3 digits.';


    if(regexZipCode.test($("#pincode").val()) == false){
     if($("input[name='countrycode']:checked").val() == 'IN'){
      zipErrorMsg = 'Must contain atleast 6 digits.';
    }
    $('#zip_code_input').addClass('error');
    $('#zip_error_msg').html(zipErrorMsg);
    isSuccessM = false;
  }else{
    $('#zip_error_msg').empty();
    $('#zip_code_input').removeClass('error');
  }
}



function countryChangeBlur() {
  if($("input[name='countrycode']:checked").length){
   var countrychage = $("input[name='countrycode']:checked").val();
   var ContryLable = $("#selected_country").text();
   if(countrychage ==''){
    $('#country_input').addClass('error');
    $('#country_error_msg').html('Please select country');
    isSuccessM = false;
  }else{
    $('#country_error_msg').empty();
    $('#country_input').removeClass('error');
  }
}else{
  $('#country_input').addClass('error');
  $('#country_error_msg').html('Please select country');
  isSuccessM = false;
}
}

function stateChangeBlur() {

  if($("input[name='state_name']:checked").length){
    var statechange = $("input[name='state_name']:checked").val();
    var stateLable = $("#selected_state").text();
    if(statechange ==''){
      $('#select_state').addClass('error');
      $('#state_error_msg').html('Please select state');
      isSuccessM = false;
    }else{
      $('#state_error_msg').empty();
      $('#select_state').removeClass('error');
    }
  }else{
    $('#select_state').addClass('error');
    $('#state_error_msg').html('Please enter state');
    isSuccessM = false;
  }
}

function stateChange() {
  return false;
  var stateErrorMsg = ($("#state_name").val() == '') ? 'Please enter a state' : 'Please enter a valid state';
  if($("#state_name").val() ==''){
    $('#state_input').addClass('error');
    $('#state_error_msg').html(stateErrorMsg);
    isSuccessM = false;
  }else{
    $('#state_error_msg').empty();
    $('#state_input').removeClass('error');
  }
}

function stateChangeText(obj){
  var textFieldVal = $(obj).val();
  if(textFieldVal == "" && textFieldVal.length < 2){
    $('#input_state').addClass('error');
    $('#state_error_msg_text').html('Please select state');
    isSuccessM = false;
  }else{
    $('#state_error_msg_text').empty();
    $('#input_state').removeClass('error');
  }
}



function isEmpty(){
    /*var INDIA_COUNTRY_ID = "IN";
    var USA_COUNTRY_ID = "US";*/

    var firstName = $('#first_name').val();
    var lastName = $('#last_name').val();
    var email = $('#email').val();
    var phoneCode = $("input[name='country_code']:checked").val();
    var contactNo = $('#contact_no').val();
    var address = $('#addessline1').val();
    //var country = $('#country').val();
    var country = $("input[name='countrycode']:checked").val();
    //var state = $('#state_name').val();
    var state = $("input[name='state_name']").val();
    var city = $('#city').val();
    var pincode = $('#pincode').val();
    var selectedCountry = $('#selected_country').text();

    isEmptyCheck = true;

    pinZipBlur();
    contactNoBlur();
    cityBlur();
    addressBlur();
    emailBlur();
    lnameBlur();
    nameBlur();
    if((INDIA_COUNTRY_ID == country || USA_COUNTRY_ID == country) || typeof country == "undefined"){
     var state = $("input[name='state_name']:checked").val();
   }else{
     var state = $('#state_name_text').val();
   }

   if(typeof phoneCode == "undefined"){
    var phoneCode = $("input[name='phonecode']").val("91");
    return;
  }else{
    var phoneCode = $("input[name='phonecode']:checked").val();
  }
  if(firstName == ''){
    $('#name_input').addClass('error');
    $('#name_error_msg').html('Please enter first Name');
    isEmptyCheck = false;
  }
  if(lastName == ''){
    $('#lname_input').addClass('error');
    $('#lname_error_msg').html('Please enter last Name');
    isEmptyCheck = false;
  }
  if(email == ''){
    $('#email_input').addClass('error');
    $('#email_error_msg').html('Please enter email');
    isEmptyCheck = false;
  }

  var emailErrorMsg = (email == '') ? 'Please enter email id' : 'eg. gmail@abc.com';
  if(regexEmail.test(email) == false){
    $('#email_input').addClass('error');
    $('#email_error_msg').html(emailErrorMsg);
    isSuccessM = false;
  }

  if(address == ''){
    $('#address1_input').addClass('error');
    $('#address1_error_msg').html('Please enter address');
    isEmptyCheck = false;
  }if(contactNo == ''){
   $('#contact_no_input').addClass('error');
   $('#number_error_msg').html('Please enter contact Number');
   isEmptyCheck = false;
 }

 if(typeof country == 'undefined'){
   $('#country_input').addClass('error');
   $('#country_error_msg').html('Please select country');
   isEmptyCheck = false;
 }else{
  $('#country_error_msg').empty();
  $('#country_input').removeClass('error');
}

    if(state == '' || typeof state == 'undefined'){ //console.log(state+ 'state');
    if(INDIA_COUNTRY_ID == country || USA_COUNTRY_ID == country || country=="" || typeof country=="undefined"){
      $('#state_input').addClass('error');
      $('#state_error_msg').html('Please select state');
    }else{
      $('#input_state').addClass('error');
      $('#state_error_msg_text').html('Please select state');
    }
    isEmptyCheck = false;
  }else{
    $('#state_error_msg').empty();
    $('#state_input').removeClass('error');
  }

  if(city == ''){
   $('#city_input').addClass('error');
   $('#city_error_msg').html('Please enter city');
   isEmptyCheck = false;
 }

 if(pincode == ''){
   $('#zip_code_input').addClass('error');
   $('#zip_error_msg').html('Please enter pincode');
   isEmptyCheck = false;
 }
 return isEmptyCheck;
}

function chkValid(){
  isSuccessM = true;
  nameBlur();
  lnameBlur();
  emailBlur();
  addressBlur();
  contactNoBlur();
  cityBlur();
  pinZipBlur();
  return isSuccessM;
}


function resetAllPersonalInfo(){
  $('#state_error_msg_text').empty();
  $('#input_state').removeClass('error');
  $('#state_error_msg').empty();
  $('#state_input').removeClass('error');
  $('#state_error_msg').empty();
  $('#state_input').removeClass('error');
  $('#name_error_msg').empty();
  $('#name_input').removeClass('error');
  $('#lname_error_msg').empty();
  $('#lname_input').removeClass('error');
  $('#email_error_msg').empty();
  $('#email_input').removeClass('error');
  $('#address1_error_msg').empty();
  $('#address1_input').removeClass('error');
  $('#city_error_msg').empty();
  $('#city_input').removeClass('error');
  $('#number_error_msg').empty();
  $('#contact_no_input').removeClass('error');
  $('#zip_error_msg').empty();
  $('#zip_code_input').removeClass('error');
  $('#country_error_msg').empty();
  $('#country_input').removeClass('error');

}



    // Validate Personal fields

    function validateDetails(){
    //isEmptyCheck = false;
    //resetPerInfoErrMsgs(); // reset all error first
    isError = 0; // set no errors
    validatePersonalInfoFields(); // validate  all fields
   // alert(isError);
   if(isError == 1){
    return false;
  }else if(isError == 0){
    return true;
  }else{
    return false;
  }
    //return isError;
  }

// to validate personal fields
function validatePersonalInfoFields(){
  validateFirstName();
  validateLastName();
  validateEmail();
  validatePhoneNo();
  validateAddress();
  validateCountry();
  validateState();
  validatecity();
  validatePincode();
  validatePassportImage();
}


// First Name
function validateFirstName(textId,divId,errorId){
  var donatePurpose = $("#hidden_donate_purpose_id").val();
  if(textId == undefined ||  divId == undefined || errorId == undefined){
    var textId = 'first_name';
    var divId = 'name_input';
    var errorId = 'name_error_msg';
  }

  if(donatePurpose == 'Program')
  {
      var fieldValue = $('#first_name').val();
     
      if(fieldValue.length < 3){
        $('#name_input').addClass('error');
        $('#name_error_msg').html('Please enter minimum 3 characters for first name');
        isError = 1;
        return false;
      }else if(regexFirstName.test(fieldValue) == false){
       
      $('#name_input').addClass('error');
      $('#name_error_msg').html('Please do not use special chracter except dot for last name');
        isError = 1;
      return false;
      }
    return true;
  }

  validateField('#'+textId, '#'+divId, '#'+errorId, regexFullName, 'Please enter first Name.', 'Please enter alphabets only.');
}

// Last Name
function validateLastName(textId,divId,errorId){
var donatePurpose = $("#hidden_donate_purpose_id").val();
var fieldValue = $('#last_name').val();
  if(textId == undefined ||  divId == undefined || errorId == undefined){
    var textId = 'last_name';
    var divId = 'lname_input';
    var errorId = 'lname_error_msg';
  }

  if(donatePurpose == 'Program')
  {
    if(fieldValue != '' && regexFirstName.test(fieldValue) == false){
      $('#lname_input').addClass('error');
      $('#lname_error_msg').html('Please do not use special chracter except dot for last name');
      isError = 1;
      return false;
    }
    return true;
}
  validateField('#'+textId, '#'+divId, '#'+errorId, regexFullName, 'Please enter last name.', 'Please enter alphabets only.');
}

// Email
function validateEmail(textId,divId,errorId){
  if(textId == undefined ||  divId == undefined || errorId == undefined){
    var textId = 'email';
    var divId = 'email_input';
    var errorId = 'email_error_msg';
  }
  validateField('#'+textId, '#'+divId, '#'+errorId, regexEmail, 'Please enter email.', 'Please enter valid email id.');
}

// Contact No
function validatePhoneNo(textId,divId,errorId){
  if(textId == undefined ||  divId == undefined || errorId == undefined){
    var textId = 'contact_no';
    var divId = 'contact_no_input';
    var errorId = 'number_error_msg';
  }
  if(textId != 'offline_contact'){
    var country = document.getElementById('country_code');
    var countryCode = country.options[country.selectedIndex].value;
    if(countryCode == 91){
      $('#contact_no').attr('maxlength','10');
      $('#contact_no').attr('minlength','10');
    }else{
      $('#contact_no').attr('maxlength','15');
      $('#contact_no').attr('minlength','6');
    }
  }
  validateField('#'+textId, '#'+divId, '#'+errorId, regexContactNo, 'Please enter contact no.', 'Please enter digits only.');
}
// Address
function validateAddress(){
  if($('#addessline1').val().length < 10){
    validateField('#addessline1', '#address1_input', '#address1_error_msg', regexAddress, 'Please enter address', 'Please enter minimum 10 characters');
  }else{
    validateField('#addessline1', '#address1_input', '#address1_error_msg', regexAddress, 'Please enter address', 'Only alphabets,numbers,(& - , .) characters allowed.');
  }
}

// Pincode
function validatePincode(){
  var pincode = $('#pincode').val();
    //var country = $("input[name='countrycode']:checked").val();

    var country = document.getElementById('selected_country');
    var selectedCountry = country.options[country.selectedIndex].value;

    var regExMessage = "Pincode should be alpha numeric and minimum 3 digit";
    var regExForZipCode = regexZipCodeGlobal;
    if(selectedCountry == INDIA_COUNTRY_ID){
      regExForZipCode = regexZipCodeIndia;
      regExMessage = "Pincode should be numeric and 6 digits only";
    }
    validateField('#pincode', '#zip_code_input', '#zip_error_msg', regExForZipCode, 'Please enter pin/zip code', regExMessage);
  }

  //occasion
  function validateOccasion(textId,divId,errorId){
    if(textId == undefined ||  divId == undefined || errorId == undefined){
      var textId = 'occasion';
      var divId = 'occasion_input';
      var errorId = 'occasion_error_msg';
    }
    validateField('#'+textId, '#'+divId, '#'+errorId, regexOccasion, 'Please enter occasion.', 'Please enter alphabets only.');
  }

   //validateDateOfOccasion
   function validateDateOfOccasion(){
    if($("#dateOfOccasion").val() == '' || $("#dateOfOccasion").val() == '0000-00-00'){
      $('#occasion_date_input').addClass('error');
      $('#date_of_occasion_error_msg').html('Please Select Date of occasion.');
      setError();
      return false;
    }else{
      $('#date_of_occasion_error_msg').empty();
      $('#occasion_date_input').removeClass('error');
    }
  }

  //HonouredPerson
  function validateHonouredPersons(textId,divId,errorId){

    if(textId == undefined ||  divId == undefined || errorId == undefined){
      var textId = 'honouredPersons';
      var divId = 'honoured_input';
      var errorId = 'honoured_error_msg';
    }
    validateField('#'+textId, '#'+divId, '#'+errorId, regexhonouredPersons, 'Please enter honoured name.', 'Please enter alphabets and commas.');
  }

  function validatePassportImage(){

   var isChecked = $("input[name='nationality']:checked").val();
   var country = document.getElementById('selected_country');
   var selectedCountry = country.options[country.selectedIndex].value;
   var initiativeName = document.getElementById('initiative').value;
   var currency = $('#hidden_donation_currency').val();

   if(initiativeName=='cauvery-calling' || initiativeName == 'save-soil' || initiativeName =='project-greenhands' || initiativeName == 'annadanam-online' || initiativeName == 'contribute' || initiativeName == 'action-rural-rejuvenation')
   {
    var exemptionType = $("input[name='exemption']:checked").val();
    if(isChecked == 'yes' && (exemptionType == 'indian' || exemptionType == 'other' || typeof exemptionType == 'undefined')){
      if(selectedCountry != INDIA_COUNTRY_ID && country.selectedIndex!=0)
      {
        var selectedFile = $("#passport_image").val();

        if(selectedFile=='')
        {
         addErrorClass('#passport_image_input');
         setErrMsg("#passport_error_msg", 'Please select Passport Image');
         setError();
       }else if(regexPassportImage.test(selectedFile) == false)
       {
        addErrorClass('#passport_image_input');
        $("#passport_size_msg").addClass("error-msg");
        setError();
      }else
      {

        var fileSize = document.getElementById('passport_image').files[0].size/1024;

        if(fileSize > 500)
        {
         addErrorClass('#passport_image_input');
         $("#passport_size_msg").addClass("error-msg");
         setError();
       }
       else
       {
        removeErrorClass("#passport_size_msg");
        setErrMsg("#passport_error_msg", '');
      }

    }
  }
}
}

if(initiativeName=='isha-vidhya')
{
  var selectedDonationCurrency = document.getElementById('hidden_donation_currency').value;

  if(isChecked == 'yes' && selectedDonationCurrency=='INR'){
    if(selectedCountry != INDIA_COUNTRY_ID && country.selectedIndex!=0)
    {
      var selectedFile = $("#passport_image").val();

      if(selectedFile=='')
      {
       addErrorClass('#passport_image_input');
       setErrMsg("#passport_error_msg", 'Please select Passport Image');
       setError();
     }else if(regexPassportImage.test(selectedFile) == false)
     {
      addErrorClass('#passport_image_input');
      $("#passport_size_msg").addClass("error-msg");
      setError();
    }else
    {

      var fileSize = document.getElementById('passport_image').files[0].size/1024;

      if(fileSize > 500)
      {
       addErrorClass('#passport_image_input');
       $("#passport_size_msg").addClass("error-msg");
       setError();
     }
     else
     {
      removeErrorClass("#passport_size_msg");
      setErrMsg("#passport_error_msg", '');
    }

  }
}
}
}


}

function validatePassportImageFileSize(file)
{
  if(file.files.length==0)
  {
    $("#choosePassportFile").show();
    $("#replacePassportFile").hide();
    addErrorClass('#passport_image_input');
    setErrMsg("#passport_error_msg", 'Passport copy is required');
    setError();
    $("#passportImageName").val('');
    return;
  }
  else
  {
    setErrMsg("#passport_error_msg", '');
    removeErrorClass("#passport_image_input");
  }

  $("#passportImageName").val(file.files[0].name);


  $("#choosePassportFile").hide();
  $("#replacePassportFile").show();

    var fileSize = file.files[0].size / 1024; // in KB
    if (fileSize > 500) {
      addErrorClass('#passport_image_input');
      // addErrorClass('#passport_size_msg');
      $("#passport_size_msg").addClass("error-msg");
      setError();
    } else {
     removeErrorClass('#passport_image_input');
      // addErrorClass('#passport_size_msg');
      $("#passport_size_msg").removeClass("error-msg");
    }
  }

// Country
function validateCountry(){
  setErrMsg("#country_error_msg", '');
  removeErrorClass("#country_input");
  var country = $("input[name='countrycode']:checked").val();
  if(typeof country == 'undefined'){
    addErrorClass('#country_input');
    setErrMsg("#country_error_msg", 'Please select country');
    setError();
  }
}

// State
function validateState(){
  setErrMsg("#state_error_msg", '');
  removeErrorClass("#state_input");
  setErrMsg("#state_error_msg_text", '');
  removeErrorClass("#input_state");
  var country = $("input[name='countrycode']:checked").val();
  var state = "";
  var stateValidCond = 0;

  if((INDIA_COUNTRY_ID == country || USA_COUNTRY_ID == country) || typeof country == "undefined"){
   var state = $("input[name='state_name']:checked").val();
   stateValidCond = 1;
 }else{
   var state = $('#state_name_text').val();
   stateValidCond = 2;
 }
   // alert(state);

   if(stateValidCond == 1){
    if(state == "" || typeof state == 'undefined'){
      addErrorClass('#state_input');
      setErrMsg("#state_error_msg", 'Please select state');
      setError();
    }

  }else if(stateValidCond == 2){
    if(state == ""){
      addErrorClass('#input_state');
      setErrMsg("#state_error_msg_text", 'Please select state');
      setError();
    }else if(regexState.test(state) == false){
      addErrorClass('#input_state');
      setErrMsg("#state_error_msg_text", 'Please enter valid state, alphabets and space is allowed.');
      setError();
           // alert("here");
         }
       }
     }

     function stateChangeTextBlur(){
      var textFieldVal = $('#state_name_text').val();
      if(textFieldVal == ""){
        $('#input_state').addClass('error');
        $('#state_error_msg_text').html('Please Enter state');
        isSuccessM = false;
      }else if(regexState.test($('#state_name_text').val())){
        $('#input_state').addClass('error');
        $('#state_error_msg_text').html('Please Enter Valid state');
      }else{
        $('#state_error_msg_text').empty();
        $('#input_state').removeClass('error');
      }
    }
// City
function validatecity(){
  var fieldValue = $('#city').val();
  if(fieldValue.trim().length < 3 && fieldValue !== ""){
    $('#city_input').addClass('error');
    $('#city_error_msg').html('Please Enter 3 characters in city');
    setError();
  }else{
    validateField('#city', '#city_input', '#city_error_msg', regexCity, 'Please enter city', onlyAlphabets);
  }
}


//pan card
function validatePanCard(){
  var is80Gexemtion = $("input[name='want_80G']:checked").val();
  var isChecked = $("input[name='nationality']:checked").val();
  var installmentVal = $("#hidden_donation_amount").val();
  var isRecurring = $('#is_recurring').val();
  var donatePurposeId = document.getElementById('hidden_donate_purpose_id').value;
  var currency = $('#hidden_donation_currency').val();
  if(isRecurring == 1 && (donatePurposeId == 'SGMT')){
    if(currency == 'INR'){
      var installmentVal = $("#hidden_donation_amount").val();
      var NoOfInstallments = $("#no_of_months").val();
      var finalAmount = parseInt(installmentVal) * parseInt(12);
    }else{
      var convertedAmount = $('#converted_amount').val();
      var finalAmount = parseInt(convertedAmount) * parseInt(12);
    }
    if(finalAmount >= 50000 && isChecked == 'yes'){
        $('#adharcard_error_msg').html('');
        validateField('#pancard', '#pancard_input', '#pancard_error_msg', regPanCard, 'Please enter PAN number', "Please enter 10 alphanumeric characters in UPPERCASE");
    }else{
      if(is80Gexemtion == "yes" && (finalAmount < 50000 || isChecked == 'no')){
        validatePancardAadharFor80G();
      }else{
        if($('#pancard').val() != '' && regPanCard.test($('#pancard').val()) == false){
          $('#adharcard_error_msg').html('');
          $('#pancard_input').addClass('error');
          $('#pancard_error_msg').html("Please enter 10 alphanumeric characters in UPPERCASE");
          setError();
        }else{
          $('#pancard_input').removeClass('error');
          $('#pancard_error_msg').html("");
          return true;
        }
      }
    }
  }else{
    if(donatePurposeId == 'CVC-IOR' || donatePurposeId == 'BGLDON'){
      if(currency == 'INR'){
        var installmentVal = parseInt(installmentVal) * parseInt(12);
      }else{
        var convertedAmount = $('#converted_amount').val();
        var installmentVal = parseInt(convertedAmount) * parseInt(12);
      }
    }
    if(currency != 'INR'){
      installmentVal = $('#converted_amount').val();
    }
    if(is80Gexemtion == "yes" && (installmentVal < 50000 || isChecked == 'no')){
      validatePancardAadharFor80G();
    }else{
      $('#adharcard_error_msg').html('');
      validateField('#pancard', '#pancard_input', '#pancard_error_msg', regPanCard, 'Please enter PAN number', "Please enter 10 alphanumeric characters in UPPERCASE");
    }  
  }
}

function validateFCRNationality(){
     setErrMsg("#fcra_nationality_error_msg", '');
     removeErrorClass("#fcra_nationality_input");
    var defaultfcranationality = document.getElementById('default_fcra_nationality').innerHTML;
    var fcra_nationality = document.getElementById('selected_fcra_nationality');
    var selectedFcraNationality = fcra_nationality.options[fcra_nationality.selectedIndex].value;
    var initiativeName = document.getElementById('initiative').value;
    var language = document.getElementById('lang').value;
     if(selectedFcraNationality == '' || selectedFcraNationality == defaultfcranationality){
        addErrorClass('#fcra_nationality_input');
        setErrMsg("#fcra_nationality_error_msg", 'Please select nationality');
        setError();
     }else{
      $('#nationality_country').val(fcra_nationality.options[fcra_nationality.selectedIndex].innerHTML);
     }
  }

  function validatePassportNumber(){
     var passportNumber = $('#passport_number').val();
     if(passportNumber != '' && regexPassportNumber.test(passportNumber) == false){
      console.log('inside error');
        $('#passport_number_input').addClass('error');
        $('#passport_number_error_msg').html("Please enter valid passport number with charactors in capital");
        setError();
        return false;
      }else{
        console.log('here');
        $('#passport_number_input').removeClass('error');
        $('#passport_number_error_msg').html("");
        return true;
      }
  }

function checkNationality(){

  $('#nation_error_msg').html('');
  $('#exemption_error_msg').html('');
  var hiddenDonationNationality = $("#hidden_donation_nationality").val();
  var amount = document.getElementById('hidden_donation_amount').value;
  var convertedAmount = 0;
  var selectedDonationCurrency = document.getElementById('hidden_donation_currency').value;
  var isChecked = $("input[name='nationality']:checked").val();
  var country = document.getElementById('selected_country');
  var selectedCountry = country.options[country.selectedIndex].value;
  var initiativeName = document.getElementById('initiative').value;
  var currency = $('#hidden_donation_currency').val();
  var isRecurring = $('#is_recurring').val();
  var donatePurposeId = document.getElementById('hidden_donate_purpose_id').value;

  var is80Gexemtion = $("input[name='want_80G']:checked").val();

  if(isChecked == 'no'){
    if(is80Gexemtion == 'no'){
      $('#agree_80g_tax_div').show();
    }
    $('#fcra_nationality_input').css('display','block');
    $('#passport_number_input').css('display','block');
  }else{
    $('#fcra_nationality_input').css('display','none');
    $('#passport_number_input').css('display','none');
    if(is80Gexemtion == 'no'){
      $('#agree_80g_tax_div').show();
    }
  }

  if(isChecked == 'no'){
    $("#selected_fcra_nationality option[value='IN']").remove();
  }

  if(hiddenDonationNationality!=isChecked && initiativeName == 'cauvery-calling')
  {
   $('.tax .tax-block .tax-option .tax-amt .option').removeClass('active');
   $("#hidden_donation_nationality").val(isChecked);
 }

 if(initiativeName == 'cauvery-calling'){
  var trees = document.getElementById('donation_description').value;
  trees = trees.replace(/Trees/ig, " ");
  var inrAmount = Math.ceil(trees * 42);
  $('#converted_amount').val(inrAmount);
  $('#converted_currency').val('INR');
  if(trees > 1){
    var treeString = 'Trees';
  }else{
    var treeString = 'Tree';
  }
}

// if((isChecked == 'yes' || isChecked == 'no') && initiativeName == 'cauvery-calling' && isRecurring != 1){
//  $('#tax_check').show();
// }

  if(isChecked == 'yes'){  //indian

    if(selectedDonationCurrency == 'INR'){
      convertedAmount = amount;
    }else if(selectedDonationCurrency == 'USD'){
      var fromCurrencyValue = document.getElementById('from_currency_value').value;
      convertedAmount = amount * fromCurrencyValue;
      convertedAmount = Math.ceil(convertedAmount);
      $('#converted_amount').val(inrAmount);
      $('#converted_currency').val('INR');
    }

      $('#show_address_msg').html('Entering an Indian address is recommended');


    if(isRecurring == 1 && initiativeName == 'cauvery-calling'){
      if(selectedDonationCurrency == 'INR')
      {
        $("#selected_country").prop("selectedIndex", 0);
        $("#selected_country #country").each(function() {
          $(this).remove();
        });
        $('#show_address_msg').html('Entering an Indian address is mandatory');
      }else{
        $('#show_address_msg').html('Entering an Indian address is recommended');
      }
       
    }

      var exists = false;
      $('#selected_country  option').each(function(){
          if (this.value == 'IN') {
            exists = true;
          }
        });

      if(exists == false){
        var myDdl = document.getElementById("selected_country");
        myDdl.options.add(new Option("India", "IN"), myDdl.options[1]);
        $('#selected_country  option[value=IN]').attr('name','countrycode');
        $('#selected_country  option[value=IN]').attr('id','country');
      }

    if(initiativeName == 'cauvery-calling'){
      if(isRecurring != 1)
      {
        $('#show_address_msg').html('Entering an Indian address is recommended');
      }
      $('#show_us_address_msg').hide();

      if(isRecurring == 1){
        var installmentVal = $("#hidden_donation_amount").val();
        var NoOfInstallments = $("#no_of_months").val();
        var finalAmount = parseInt(installmentVal) * parseInt(12);
      }else{
        var finalAmount = inrAmount;
      }

      if(finalAmount >= 50000 || is80Gexemtion == 'yes'){
        document.getElementById('pancard_input').style.display = "block";
      }
      else
      {
        document.getElementById('pancard_input').style.display = "none";
      }

    if(isRecurring != 1){
      if(currency == 'INR'){
        var donationMsg = $('#hidden_donation_msg').val();
        $('#conversion_msg').html('');
        $('#conversion_amount_msg').html('You are contributing ₹ <span class="">'+amount+'</span> for <span class="">'+trees+'</span> <span class="text-bold">'+treeString+'</span>.');
      }else{
       $('#conversion_msg').html('We will receive your contribution in Indian Rupees.');
       $('#conversion_amount_msg').html('You are contributing ₹ <span class="">'+inrAmount+'</span> for <span class="">'+trees+'</span> <span class="text-bold">'+treeString+'</span>.');

     }
   }

    if(finalAmount >= 50000 && is80Gexemtion == 'yes'){
      document.getElementById('aadhar_checkbox').style.display = "none";
      document.getElementById('aadhar_input').style.display = "none";
      $("input[name=show_aadhar]").attr('checked', false);
      $('#aadhar_card').val('');
    }

     if(selectedCountry != INDIA_COUNTRY_ID && country.selectedIndex!=0)
     {
      $("#passport_image_input").show();
      $("#passport_info_msg").show();
    }
    else
    {
     $("#passport_image_input").hide();
     $("#passport_info_msg").hide();
   }
 }
 else if(initiativeName == 'project-greenhands' || initiativeName == 'save-soil' || initiativeName == 'annadanam-online' || initiativeName == 'action-rural-rejuvenation' || initiativeName == 'contribute')
 {
  $('#converted_amount').val(convertedAmount);
  $('#converted_currency').val('INR');

  if(isRecurring == 1){
    if(currency == 'INR'){
      var installmentVal = $("#hidden_donation_amount").val();
      var NoOfInstallments = $("#no_of_months").val();
      var finalAmount = parseInt(installmentVal) * parseInt(12);
    }else{
      var finalAmount = parseInt(convertedAmount) * parseInt(12);
    }
  }else{
    var finalAmount = convertedAmount;
  }

  if(finalAmount >= 50000 || donatePurposeId == 'SGMT' || donatePurposeId == 'BGLDON' || is80Gexemtion == 'yes'){
    document.getElementById('pancard_input').style.display = "block";
  }
  else
  {
    document.getElementById('pancard_input').style.display = "none";
  }

    if(finalAmount >= 50000 && is80Gexemtion == 'yes'){
      document.getElementById('aadhar_checkbox').style.display = "none";
      document.getElementById('aadhar_input').style.display = "none";
      $("input[name=show_aadhar]").attr('checked', false);
      $('#aadhar_card').val('');
    }

    if(selectedCountry != INDIA_COUNTRY_ID && country.selectedIndex!=0)
    {
      $("#passport_image_input").show();
      $("#passport_info_msg").show();
    }
    else
    {
      $("#passport_image_input").hide();
      $("#passport_info_msg").hide();
    }
}
else if(initiativeName == 'isha-vidhya')
{
  if((convertedAmount >= 50000 && currency == 'INR') || is80Gexemtion == 'yes'){
    $('#converted_amount').val(convertedAmount);
    $('#converted_currency').val('INR');
    document.getElementById('pancard_input').style.display = "block";
  }
  else
  {
    document.getElementById('pancard_input').style.display = "none";
  }

  if(convertedAmount >= 50000 && is80Gexemtion == 'yes'){
    document.getElementById('aadhar_checkbox').style.display = "none";
    document.getElementById('aadhar_input').style.display = "none";
    $("input[name=show_aadhar]").attr('checked', false);
    $('#aadhar_card').val('');
  }

  if(currency == 'INR' && selectedCountry != INDIA_COUNTRY_ID && country.selectedIndex!=0)
  {
    $("#passport_image_input").show();
    $("#passport_info_msg").show();
  }
  else
  {
   $("#passport_image_input").hide();
   $("#passport_info_msg").hide();
 }
}
else if(initiativeName == 'annadanam-online')
{
 if(selectedCountry != INDIA_COUNTRY_ID && country.selectedIndex!=0)
 {
  $("#passport_image_input").show();
  $("#passport_info_msg").show();
}
else
{
 $("#passport_image_input").hide();
 $("#passport_info_msg").hide();
}
}

else if(initiativeName == 'mahashivratri-contribution' || initiativeName == 'rudraksha-seva' || initiativeName == 'online-contribution' || initiativeName == "syt-online-contribution")
{
  $('#converted_amount').val(convertedAmount);
  $('#converted_currency').val('INR');
  if(convertedAmount >= 50000){
    document.getElementById('pancard_input').style.display = "block";
  }
  else
  {
    document.getElementById('pancard_input').style.display = "none";
  }

}

$('.recomend-add').show();


}else if(isChecked == 'US'){
  if(initiativeName != 'project-greenhands' || initiativeName != 'annadanam-online'){
    $('#converted_amount').val('');
    $('#converted_currency').val('');
  }
  //$('#tax_check').hide();
  $('#show_address_msg').show();
  $('#show_address_msg').html('Entering a Non-Indian address is mandatory');
  $("#selected_country").prop("selectedIndex", 0);
  $("#selected_country option[value='IN']").each(function() {
    $(this).remove();
  });
  $("#selected_state #state_name").each(function() {
    $(this).remove();
  });
  $('#selected_state').prop('disabled', true);
  $('#show_us_address_msg').show();
  // document.getElementById("tax_exemption").checked = false;
  // $('.tax .tax-block .tax-option .tax-amt .option').removeClass('active')
  // $('#avail_exemption').hide();
  // $('#show_for_501_c').hide();
  usdAmount = trees * 0.7;
  usdAmount = usdAmount.toFixed(2);
  usdAmount = usdAmount.replace(".00", " ");
  $('#conversion_msg').html('We will receive your contribution in US Dollars.');
  $('#conversion_amount_msg').html('You are contributing <span class="">USD '+usdAmount+'</span> for <span class="">'+trees+'</span> <span class="text-bold">'+treeString+'</span>.');
  //$('.recomend-add').hide();
  $("#passport_image_input").hide();
  $("#passport_info_msg").hide();
  document.getElementById('pancard_input').style.display = "none";
  document.getElementById('pancard').value='';
}else{
  if(initiativeName != 'project-greenhands' || initiativeName != 'save-soil' || initiativeName != 'annadanam-online' || initiativeName != 'action-rural-rejuvenation'){
    $('#converted_amount').val('');
    $('#converted_currency').val('');
  }
  $("#passport_image_input").hide();
  $("#passport_info_msg").hide();
  $('#show_address_msg').show();
  $('#show_address_msg').html('Entering a Non-Indian address is mandatory');
  if(isRecurring == 1 && initiativeName == 'cauvery-calling'){
      //add countries here
      getcountryList();
    }else{
      $("#selected_country").prop("selectedIndex", 0);
      $("#selected_country option[value='IN']").each(function() {
        $(this).remove();
      });
    }
    // $("#selected_state #state_name").each(function() {
    //   $(this).remove();
    // });
    // $('#selected_state').prop('disabled', true);
    if(initiativeName == 'cauvery-calling' && isRecurring != 1){
      $('#show_us_address_msg').hide();
      $('#conversion_msg').html('');
      if(currency =='INR')
      {

        $('#conversion_amount_msg').html('You are contributing <span class="text-bold">₹</span> <span class="">'+amount+'</span> for <span class="">'+trees+'</span> <span class="text-bold">'+treeString+'</span>.');
      }
      else{

       $('#conversion_amount_msg').html('You are contributing <span class="text-bold">'+currency+'</span> <span class="">'+amount+'</span> for <span class="">'+trees+'</span> <span class="text-bold">'+treeString+'</span>.');
     }
   }
//$('.recomend-add').hide();
$("#passport_image_input").hide();
$("#passport_info_msg").hide();
 if(is80Gexemtion == 'yes'){
    document.getElementById('pancard_input').style.display = "block";
    document.getElementById('aadhar_checkbox').style.display = "block";
  }else{
   document.getElementById('pancard_input').style.display = "none";
   document.getElementById('pancard').value='';
  }
}

}


function getcountryList(){
  showLoader();

  $("#selected_country").empty();
  var html = '<option id="default_country" value="Select Country">Select Country</option>';
  html += '<option name="countrycode" id="country" value="US">United States</option>';
        //$('#selected_country').text('Select State');
        countryList = $('#country_list').val();
        var country = JSON.parse(countryList);
        console.log(country);
        for(i=0; i< country.length; i++){
          if(country[i]["sortname"] != 'US' && country[i]["sortname"] != 'IN')
            html += '<option name="countrycode" id="country" value="'+country[i]["sortname"]+'">'+country[i]["name"]+'</option>';
        }

        $("#selected_country").html(html);
        hideLoader();

      }


      function showExemptionDiv(){
        var eCheckBox = document.getElementById("tax_exemption").checked;
        if(eCheckBox == true){
          $('#avail_exemption').show();
        }else{
          $('#show_for_501_c').hide();
          $('#avail_exemption').hide();
          $("input[name='exemption']:checked").value = '';
          $('.tax .tax-block .tax-option .tax-amt .option').removeClass('active')
        }

        checkNationality();
      }

      function changeAmountOn501Exemption(){
        $('#exemption_error_msg').html('');
        var trees = document.getElementById('donation_description').value;
        trees = trees.replace(/Trees/ig, " ");
        if(trees > 1){
          var treeString = 'Trees';
        }else{
          var treeString = 'Tree';
        }

        $("#passport_image_input").hide();
        $("#passport_info_msg").hide();
  //$('#hidden_donation_currency').val('USD');
  usdAmount = trees * 0.7;
  usdAmount = usdAmount.toFixed(2);
  usdAmount = usdAmount.replace('.00','');
  //$('#hidden_donation_amount').val(usdAmount);
  $('#conversion_msg').html('We will receive your contribution in US Dollars.');
  $('#conversion_amount_msg').html('You are contributing <span class="">USD '+usdAmount+'</span> for <span class="">'+trees+'</span> <span class="text-bold">'+treeString+'</span>.');
  $('#show_for_501_c').show();
}

function changeAmountOnExemption(){
  $('#exemption_error_msg').html('');
  $('#show_for_501_c').hide();
  var currency = $('#hidden_donation_currency').val();
  var trees = document.getElementById('donation_description').value;
  var country = document.getElementById('selected_country');
  var selectedCountry = country.options[country.selectedIndex].value;

  trees = trees.replace(/Trees/ig, " ");
  var inrAmount = Math.ceil(trees * 42);
  if(trees > 1){
    var treeString = 'Trees';
  }else{
    var treeString = 'Tree';
  }
  var isChecked = $("input[name='nationality']:checked").val();
  var exemptionType = $("input[name='exemption']:checked").val();
  if(currency == 'INR'){
    $('#conversion_msg').html('');
    $('#conversion_amount_msg').html('You are contributing ₹ <span class="">'+inrAmount+'</span> for <span class="">'+trees+'</span> <span class="text-bold">'+treeString+'</span>.');
  }else if(currency != 'INR' && isChecked == 'yes'){
    $('#conversion_msg').html('We will receive your contribution in Indian Rupees.');
    $('#conversion_amount_msg').html('You are contributing ₹ <span class="">'+inrAmount+'</span> for <span class="">'+trees+'</span> <span class="text-bold">'+treeString+'</span>.');
  }else{
    var amount = document.getElementById('hidden_donation_amount').value;
    $('#conversion_msg').html('');
    $('#conversion_amount_msg').html('You are contributing <span class="">'+currency+' '+amount+'</span> for <span class="">'+trees+'</span> <span class="text-bold">'+treeString+'</span>.');
  }


  if(exemptionType == 'indian' || exemptionType == 'other')
  {
    var isChecked = $("input[name='nationality']:checked").val();


    if(isChecked == 'yes' && selectedCountry != INDIA_COUNTRY_ID && country.selectedIndex!=0)
    {
      $("#passport_image_input").show();
      $("#passport_info_msg").show();
    }
    else
    {
      $("#passport_image_input").hide();
      $("#passport_info_msg").hide();
    }
  }
}

// Common validate field function
function validateField(actualfield, errorFieldDiv, errMsgField, fieldregex, emptyMsg, regexMsg){
  var fieldValue = $(actualfield).val();

  setErrMsg(errMsgField, '');
  removeErrorClass(errorFieldDiv);
  if(fieldValue == ''){
    addErrorClass(errorFieldDiv);
    setErrMsg(errMsgField, emptyMsg);
    setError();
  } else if(fieldregex.test(fieldValue) == false){
    addErrorClass(errorFieldDiv);
    setErrMsg(errMsgField, regexMsg);
    setError();
  }
}

// set error
function addErrorClass(fieldName){
  $(fieldName).addClass('error');
}
// remove erorr class
function removeErrorClass(fieldName){
  $(fieldName).removeClass('error');
}

// set error message
function setErrMsg(fieldName, msg){
  $(fieldName).html(msg);
}

// set is error
function setError(){
  isError = 1;
}
function goBack(backUrl){
  window.location.href = backUrl;
}

function countryChange(){
  countryChangeBlur();
  var country = $("input[name='countrycode']:checked").val();
  var language = $('#lang').val();
  var initiativeName = $('#initiative').val();
  if(country){
    document.getElementById("selected_state").style = '';

    url = '/'+language+'/'+initiativeName+'/donate/country-states';
    $.ajax({
     type:'post',
     data: {country_code : country},
     dataType:'json',
     url: url,
     success:function(resp)
     {

      if (resp=='' || resp == null) {
        $('#state_name_text').val('');
        $('#input_state').show();
        $('#select_state').hide();
         $('#is_structured').val(0);
      }else{
        $('#input_state').hide();
        $('#select_state').show();
        $('#is_structured').val(1);
        $("#state_name").empty();
        var html = '';
        $('#selected_state').text('Select State');
        for(i=0; i< resp.length; i++){
          html += '<label class="value"><input onChange=" stateChangeBlur()" type="radio" class="target" name="state_name" value="'+resp[i]['name']+'"><span onclick="stateSelect(this)">'+resp[i]['name']+'</span></label>';
        }

        $("#state_name").html(html);
      }
    }

  });
  }
}


/************ Skip A Meal functions starts here **************/

function hideDivsSkipAMeal(uniqueKey) {
  var uri = window.location.toString();
  if (uri.indexOf("?") > 0) {
   var clean_uri = uri.substring(0, uri.indexOf("?"));
   window.history.replaceState({}, document.title, clean_uri);
 }
 var paymentType = document.getElementById('payment_type').value;
 if(document.getElementById("error_donation_msg").innerHTML!= "") {
  $('html, body').animate({
    scrollTop: $('#donation_title').offset().top
  }, 500);

  fadeOutEffect('error_donation_msg');
}
if(paymentType == 'online'){
 document.getElementById("donation_summary").style.display = "none";
 document.getElementById('offline-donate-form').style.display='none';
 var donateStep = document.getElementById('hidden_donation_step').value;
 if(donateStep == 1){

  if($('#donate_for').length > 0){
     var donate_for = $('#donate_for').val();
     if(donate_for == 'skip-a-meal-1'){
      document.getElementById("donation_currency").value = "USD";
      document.getElementById("hidden_donation_currency").value = currency;
      $('.rupees').html('$');
     }
   }
  var currency = document.getElementById('donation_currency').value;

  $('.currency-blocks').hide();
  $('.currency_'+currency).show();
  var donationMsg = document.getElementById("default_donation_msg").value;
  var defaultAmount = document.getElementById("default_amount").value;
  var defaultPeiod = document.getElementById("default_donation_period").value;
  var donationTitle = document.getElementById('donation_title').innerHTML;
  document.getElementById("hidden_donation_currency").value = currency;
  document.getElementById("display_donation_msg").innerHTML=donationMsg;
  document.getElementById("hidden_donation_msg").value = donationMsg;
  document.getElementById("hidden_donation_amount").value = defaultAmount;
  document.getElementById("hidden_donation_period").value = defaultPeiod;
  document.getElementById("hidden_donation_title").value = donationTitle;
  if(currency == 'INR'){
    $('.rupees').html('₹');
  }else if(currency == 'USD'){
    $('.rupees').html('$');
  }

  if($('.currency_'+currency).length <= 0){
    $('#display_donation_msg').html('');
    $('#hidden_donation_msg').val('');
    $('#hidden_donation_amount').val('');
    $('#amt-block').addClass('amt-block');
  }

}else if(donateStep == 2){
 $('.offline-donate').hide();
 $('html, body').animate({
  scrollTop: $('.title').offset().top
}, 500);


 document.getElementById("donation_title").innerHTML = document.getElementById("hidden_donation_title").value;
 document.getElementById("selected_state").disabled = true;

 var selectedDonationCurrency = document.getElementById('hidden_donation_currency').value;
 if(selectedDonationCurrency == 'INR'){
   var currencySymbol = '₹';
 }else if(selectedDonationCurrency == 'USD'){
  var currencySymbol = '$';
}
var amount = document.getElementById('hidden_donation_amount').value;
document.getElementById('donation_message').innerHTML ='Your Contribution of '+currencySymbol+' '+amount+' is greatly appreciated';
                //document.getElementById('show_address_msg').style.display='block';
                document.getElementById('pancard_input').style.display = "none";
                $("#selected_country option[value='IN']").show();
                if(initiativeName != "isha-vidhya"){
                  var selectedDonationCurrency = document.getElementById('hidden_donation_currency').value;
                  var amount = document.getElementById('hidden_donation_amount').value;
                  if(selectedDonationCurrency == 'USD'){
                   var fromCurrencyValue = document.getElementById('from_currency_value').value;
                   var convertedAmount = amount * fromCurrencyValue;
                   convertedAmount = Math.ceil(convertedAmount);
                   var changedDonationMsg = 'We have converted your donation amount of ' + amount +
                   ' US Dollars (USD) to ' +convertedAmount+' Indian Rupees (INR). You will see this INR value in your receipt and the payment screens.';
                   document.getElementById('donation_message').innerHTML = changedDonationMsg;
                   document.getElementById('hidden_donation_msg').value = changedDonationMsg;
                 }else{
                   $('#donation_message').html($('#hidden_common_donation_msg').val());
                   $('#hidden_donation_msg').val($('#hidden_common_donation_msg').val());
                 }
               }

             }else if(donateStep == 3){
              $('.offline-donate').hide();
              $('html, body').animate({
                scrollTop: $('.title').offset().top
              }, 500);
              // document.getElementById("banner").style.display = "none";
              // document.getElementById("donation_summary").style.display = "none";
                //document.getElementById("donation_title").innerHTML = document.getElementById("hidden_donation_title").value;
                //document.getElementById("selected_state").disabled = true;
              }
            }

            if(paymentType == 'offline'){
              document.getElementById('offline-donate-form').style.display='block';
              fadeOutEffect('offline_error_msg');
            }

          }

          function changeCurrency(){

            $('#display_donation_msg').html('');
            $('#hidden_donation_amount').val('');
            $('#error_donation_amt_msg').html('');
            $(".donation_amount").prop("checked", false);

            var initiativeAlias = document.getElementById('initiative').value;
            var lang = document.getElementById('lang').value;
            var isRecurring = document.getElementById('is_recurring').value;
            var donatePurposeId = document.getElementById('hidden_donate_purpose_id').value;
            var currency = document.getElementById('donation_currency').value;
            var donate_for = $('#donate_for').val();
             
              if(donate_for == 'skip-a-meal'){
                showLoader();
                 window.location = 'skip-a-meal-1';
               }else if(donate_for == 'skip-a-meal-1'){
                showLoader();
                 window.location = 'skip-a-meal';
               }

            if(isRecurring == 1){
              if(donatePurposeId == 'SGMT' || donatePurposeId == 'Program' || donatePurposeId == 'BGLDON'){
                $('#custome_rupees').html('');
                $('input:radio[name=amount]').each(function () { $(this).prop('checked', false); });
                $('input:radio[name=installments]').each(function () { $(this).prop('checked', false); });

                if(currency == 'USD'){
                  var today = new Date();
                  var dd = today.getDate();
                  $("#dayOfMonth").val(dd).change();
                  $("#day_of_month").val(dd);
                  $("#dayOfMonth").css('pointer-events', 'none');
                  $(".DayBlock").hide();
                }else{
                  $("#dayOfMonth").css('pointer-events', 'auto');
                  $(".DayBlock").show();
                }

                $('#recurring_amount_error_msg').html('');
              }else if(donatePurposeId == 'CVC-IOR'){
                donate_for = $('#donate_for').val();
                if(currency == 'USD' && donate_for == 'plant-trees-1'){
                  var today = new Date();
                  var dd = today.getDate();
                  $("#dayOfMonth").val(dd).change();
                  $("#day_of_month").val(dd);
                  $("#dayOfMonth").css('pointer-events', 'none');
                }
              }
            }

            if(donatePurposeId == 'Program'){
              $('#income').val('');
              $('#income_precent').html('');
            }

            $(".donation_trees"). prop("checked", false);
            $("#amt-block").removeClass('active');
            if($("#donation_id").length > 0){
              var donationId = document.getElementById("donation_id").value;
              if(donationId != '' && $('#invalidAmount_'+donationId) > 0 ){
                document.getElementById('invalidAmount_'+donationId).innerHTML='';
              }
            }
            var currency = document.getElementById('donation_currency').value;

            var donationType = document.getElementById('donation_type').value;

            if(initiativeAlias =='isha-vidhya' && currency == 'USD')
            {
              document.getElementById('skipAMealIntro').style.display='none';
            }
            else if(initiativeAlias =='isha-vidhya' && currency == 'INR')
            {
              document.getElementById('skipAMealIntro').style.display='block';
            }

            if(initiativeAlias == 'cauvery-calling'){
              $('.currency_'+currency).removeClass('active');
            }
            if($('.currency_'+currency).length <= 0){
              $('#display_donation_msg').html('');
              $('#hidden_donation_msg').val('');
              $('#hidden_donation_amount').val('');
              $('#amt-block').addClass('amt-block');
            }else{
              //$('#amt-block').removeClass('amt-block');
            }
            var donationType = document.getElementById('donation_type').value;
  //  if($('.currency_'+currency).length <= 0){
  //   if(donationType == 1 || donationType == 2){
  //     $('#radio_amount').trigger('click');
  //   }
  // }

  $('.donation_custom_amount').val('');
  $('#invalidAmount').html('');
  if(donationType == 0 || donationType == 2 || (donationType == 3 && initiativeAlias == 'action-rural-rejuvenation')){
    if(currency == 'INR'){
      if(donatePurposeId == 'Program'){
        $('.rupees').html('₹');
        $('.orange-rupee').html('₹');
      }else{
        $('.rupees').html('₹');
      }
    }else if(currency == 'USD' && initiativeAlias != 'cauvery-calling'){
      if(donatePurposeId == 'Program'){
        $('.rupees').html('$');
        $('.orange-rupee').html('$');
      }else{
        $('.rupees').html('$');
      }
    }
  }else if(donationType == 1 || donationType == 3){
   //document.getElementById('amount-span').innerHTML = '<span class=""></span>';
 }

 document.getElementById("hidden_donation_currency").value = currency;
 $('.currency-blocks').hide();
 $('.currency_'+currency).show();
 if($('.donate-toward').length > 0){
  var selectedDonationForId = document.getElementById("donation_for").options[document.getElementById("donation_for").selectedIndex].value;
  $('.currency_donation_for_'+currency+'_'+selectedDonationForId).show();
  var currencyLoop = '.currency_donation_for_'+currency+'_'+selectedDonationForId;
}else{
  var currencyLoop = '.currency_'+currency;
}
currencySelectedData(currencyLoop);
if(initiativeAlias == 'cauvery-calling'){
  var saplingCost = $('#currency_'+currency).attr('sapling-cost');
  if(currency == 'INR'){
    document.getElementById('amount-span').innerHTML = "x ₹ "+saplingCost+" per tree";
  }else{
    document.getElementById('amount-span').innerHTML = "x "+currency+" "+saplingCost+" per tree";
  }
  //set cookie for currency
  var path = $('#cookie_path').val();
  storeCookie('currency='+currency, path);
  var saplingCost = $('#currency_'+currency).attr('sapling-cost');
  if(currency == 'INR'){
    document.getElementById('per_tree_msg').innerHTML = '₹ <span class="">'+saplingCost+'</span> per Tree';
  }else{
    document.getElementById('per_tree_msg').innerHTML = '<span class="">'+saplingCost+'</span> '+currency+ ' per Tree';
  }
  document.getElementById("hidden_donation_amount").value = '';
  document.getElementById('display_donation_msg').innerHTML = '';
  document.getElementById('hidden_donation_msg').value = '';
}else{
  if($('#amount-span').length > 0){
   document.getElementById('amount-span').innerHTML = " ";
 }
}

}

function currencySelectedData(currencyLoop){
  var initiativeAlias = '';
  var currency = document.getElementById('donation_currency').value;
  if($('#initiative').length > 0){
    var initiativeAlias = $('#initiative').val();
  }
  $(currencyLoop).each(function( index ) {
    var donationType = document.getElementById('donation_type').value;
    // if((initiativeAlias == 'annadanam-online' || initiativeAlias == 'mahashivratri-contribution') && (donationType == 0 || donationType == 3)){
    //   if(index === 1){
    //     document.getElementById($(this).find('.donation_amount').attr('id')).checked = true;
    //     document.getElementById("hidden_donation_amount").value = document.getElementById($(this).find('.donation_amount').attr('id')).value;
    //     document.getElementById('display_donation_msg').innerHTML = document.getElementById($(this).find('.donation_msg').attr('id')).value;
    //     document.getElementById('hidden_donation_msg').value = document.getElementById($(this).find('.donation_msg').attr('id')).value;
    //   }
    // }
    if(donationType == 0){
      // if(index === 2){

      //   document.getElementById($(this).find('.donation_amount').attr('id')).checked = true;
      //   document.getElementById("hidden_donation_amount").value = document.getElementById($(this).find('.donation_amount').attr('id')).value;

      //   document.getElementById('display_donation_msg').innerHTML = document.getElementById($(this).find('.donation_msg').attr('id')).value;
      //   document.getElementById('hidden_donation_msg').value = document.getElementById($(this).find('.donation_msg').attr('id')).value;
      // }
      // else
      //   if( index === 0){
      //   document.getElementById($(this).find('.donation_amount').attr('id')).checked = true;
      //   document.getElementById("hidden_donation_amount").value = document.getElementById($(this).find('.donation_amount').attr('id')).value;

      //   document.getElementById('display_donation_msg').innerHTML = document.getElementById($(this).find('.donation_msg').attr('id')).value;
      //   document.getElementById('hidden_donation_msg').value = document.getElementById($(this).find('.donation_msg').attr('id')).value;
      // }
    }else if((donationType == 1 || donationType == 3) && initiativeAlias != 'action-rural-rejuvenation'){
      if(currency == 'INR'){
        var currencySymbol = '₹';
      }else if(currency == 'USD' && initiativeAlias != 'cauvery-calling'){
       var currencySymbol = '$';
     }else{
      var currencySymbol = currency;
    }
    if(initiativeAlias == 'cauvery-calling'){
      if(currency == 'INR'){
       document.getElementById($(this).find('.rupees').attr('id')).innerHTML = currencySymbol+' '+document.getElementById($(this).find('.gift_donation_amount').attr('id')).value;
     }else{
      document.getElementById($(this).find('.rupees').attr('id')).innerHTML = document.getElementById($(this).find('.gift_donation_amount').attr('id')).value+' '+currencySymbol;
    }
  }else{
   if($('.gift_donation_amount').length > 0){
    document.getElementById($(this).find('.rupees').attr('id')).innerHTML = currencySymbol + ' ' +document.getElementById($(this).find('.gift_donation_amount').attr('id')).value
  }
}
if(index === 2){
  if(initiativeAlias != 'mahashivratri-contribution'  && initiativeName != 'rudraksha-seva' && initiativeAlias != 'annadanam-online' && initiativeName != 'online-contribution' && initiativeName != "syt-online-contribution"){
    document.getElementById($(this).find('.donation_trees').attr('id')).checked = true;
    document.getElementById("hidden_donation_amount").value = document.getElementById($(this).find('.gift_donation_amount').attr('id')).value;
    document.getElementById("hidden_donation_description").value = document.getElementById($(this).find('.gift_donation_trees').attr('id')).value;
    document.getElementById('display_donation_msg').innerHTML = document.getElementById($(this).find('.donation_msg').attr('id')).value;
    document.getElementById('hidden_donation_msg').value = document.getElementById($(this).find('.donation_msg').attr('id')).value;
  }
}
else if( index === 0){
  if(initiativeAlias != 'mahashivratri-contribution'  && initiativeName != 'rudraksha-seva' && initiativeAlias != 'annadanam-online' && initiativeName != 'online-contribution' && initiativeName != "syt-online-contribution"){
    document.getElementById($(this).find('.donation_trees').attr('id')).checked = true;
    document.getElementById("hidden_donation_amount").value = document.getElementById($(this).find('.gift_donation_amount').attr('id')).value;
    document.getElementById("hidden_donation_description").value = document.getElementById($(this).find('.gift_donation_trees').attr('id')).value;
    document.getElementById('display_donation_msg').innerHTML = document.getElementById($(this).find('.donation_msg').attr('id')).value;
    document.getElementById('hidden_donation_msg').value = document.getElementById($(this).find('.donation_msg').attr('id')).value;
  }
}
if(initiativeAlias == 'mahashivratri-contribution' || initiativeAlias == 'annadanam-online' || initiativeName == 'rudraksha-seva' || initiativeName == 'online-contribution' || initiativeName == "syt-online-contribution"){
  $('.rupees').html(currencySymbol);
}
}else if(donationType == 2){
  if(index === 2){
    document.getElementById($(this).find('.skip_donation_amount').attr('id')).checked = true;
    document.getElementById("hidden_donation_amount").value = document.getElementById($(this).find('.skip_donation_amount').attr('id')).value;
    document.getElementById('display_donation_msg').innerHTML = document.getElementById($(this).find('.skip_a_meal_message').attr('id')).value;
    document.getElementById('hidden_donation_msg').value = document.getElementById($(this).find('.skip_a_meal_message').attr('id')).value;
    document.getElementById('hidden_donation_period').value = document.getElementById($(this).find('.skip_a_meal_period').attr('id')).value;
  }
  else if( index === 0){
    document.getElementById($(this).find('.skip_donation_amount').attr('id')).checked = true;
    document.getElementById("hidden_donation_amount").value = document.getElementById($(this).find('.skip_donation_amount').attr('id')).value;
    document.getElementById('display_donation_msg').innerHTML = document.getElementById($(this).find('.skip_a_meal_message').attr('id')).value;
    document.getElementById('hidden_donation_msg').value = document.getElementById($(this).find('.skip_a_meal_message').attr('id')).value;
    document.getElementById('hidden_donation_period').value = document.getElementById($(this).find('.skip_a_meal_period').attr('id')).value;
  }
}

});
}
function changeCustomAmountSkipAMeal(){
  var customAmt = $('#custom_amount').val();
  if(customAmt == 0){
    document.getElementById('display_donation_msg').innerHTML='';
  }
  if(customAmt == ''){
    document.getElementById('display_donation_msg').style.display='none';
    var donationMsg = document.getElementById("default_donation_msg").value;
    var defaultAmount = document.getElementById("default_amount").value;
    document.getElementById("display_donation_msg").innerHTML=donationMsg;
    document.getElementById("hidden_donation_msg").value = donationMsg;
    document.getElementById("hidden_donation_amount").value = defaultAmount;
    document.getElementById('invalidAmount').innerHTML='';
            //document.getElementById("donation_trees").checked = true;
          }else{

            document.getElementById('display_donation_msg').style.display='block';
          //  document.getElementById("donation_amount").checked = false;
        }
        if(regexCustomAmount.test($('#custom_amount').val()) == true){
          isSuccess = true;
        }else{
         isSuccess = false;
       }
       if(customAmt!=0){
        var currency = document.getElementById('donation_currency').value;
        if(currency == 'INR'){
          var donationMsg = 'Your Contribution of ₹ '+customAmt+' is greatly appreciated';
        }else if(currency == 'USD'){
          var donationMsg = 'Your Contribution of $ '+customAmt+' is greatly appreciated';
        }
        document.getElementById("display_donation_msg").innerHTML=donationMsg;
        document.getElementById("hidden_donation_msg").value = donationMsg;
        document.getElementById("hidden_donation_amount").value = customAmt;
        document.getElementById("hidden_donation_period").value = '';
      }
      return isSuccess;
    }

    function changeAmountSkipAMeal(donationAmount,donationMsg,donationPeriod){
      document.getElementById('display_donation_msg').style.display='block';
      document.getElementById("custom_amount").value = '';
      document.getElementById('invalidAmount').innerHTML='';
      document.getElementById("display_donation_msg").innerHTML= donationMsg;
      document.getElementById("hidden_donation_msg").value = donationMsg;
      document.getElementById("hidden_donation_amount").value = donationAmount;
      document.getElementById("hidden_donation_period").value = donationPeriod;
    }

    function continueSkipMealPayment(){
    isError = 0; // set no errors
    var amountType = $("input[name='amount']:checked");
    var currency = document.getElementById('donation_currency').value;
    /*if($('#amount_block').length == 0){
      console.log('ansns');
      var amountValue = $('#custom_amount').val();
      if(amountValue == ''){
        document.getElementById('invalidAmount').innerHTML = "Please enter amount";
        return false;
      }
    }*/
    if($(amountType).hasClass( "radio_custom_amount" ) || $('.currency_'+currency).length <= 0){
      var amountValue = $('#custom_amount').val();
      var amountLimit;
      var amountLimitMsg;
      // if(currency == 'INR'){
      //   amountLimit = 2400;
      //   amountLimitMsg = "Amount must be more than ₹ 2400";
      //   document.getElementById("display_donation_msg").innerHTML='';
      // }else if(currency== 'USD'){
      //   amountLimit = 50;
      //   amountLimitMsg = "Amount must be more than $50";
      //   document.getElementById("display_donation_msg").innerHTML='';
      // }

      if(amountValue.length > 0 && amountValue == 0){
        document.getElementById('invalidAmount').innerHTML = "Amount cannot be 0";
        return false;
      }
      // }else if(amountValue.length > 0 && amountValue < amountLimit){
      //   document.getElementById('invalidAmount').innerHTML = amountLimitMsg;
      //   return false;
      // }
      if($('.currency_'+currency).length <= 0){
        $('#display_donation_msg').html('');
      }
        //return false;

        var regExAmtMessage = "Numbers allowed";
        validateField('#custom_amount', '', '#invalidAmount', regexCustomAmount, 'Enter Amount', regExAmtMessage);
        if(isError == 1){
          return false;
        }
      }

      var skipDonateForm ="<form class='hide' method='post' id='donate_form' name='donate_form' action='"+window.location.href+"/personal-details'>" +
      "<input type='text' name='hidden_donation_amount' value='"+document.getElementById("hidden_donation_amount").value+"'>" +
      "<input type='text' name='hidden_donation_msg' value='"+document.getElementById("hidden_donation_msg").value+"'>" +
      "<input type='text' name='hidden_donation_currency' value='"+document.getElementById("hidden_donation_currency").value+"'>" +
      "<input type='text' name='hidden_donation_period' value='"+document.getElementById("hidden_donation_period").value+"'>" +
      "<input type='text' name='hidden_donate_purpose_id' value='"+document.getElementById("hidden_donate_purpose_id").value+"'>" +
      "<input type='text' name='hidden_initiative_short_code' value='"+document.getElementById("initiative_short_code").value+"'>" +
      "<input type='text' name='hidden_donation_type' value='"+document.getElementById("donation_type").value+"'>" +
      "<input type='text' name='hidden_donation_title' value='"+document.getElementById("hidden_donation_title").value+"'>" +
      "</form>";
      $('#main-amount-div').append(skipDonateForm);
    //console.log(skipDonateForm);
    $('#donate_form').submit();
  }

  function scrollDown(){
    $('html, body').animate({
      scrollTop: $('#donation_title').offset().top
    }, 3500);
  }
  /************ Skip A Meal functions ends here **************/

  function countryChangeDonation(){
    validateCountryDetails();
    var country = document.getElementById('selected_country');
    var selectedCountry = country.options[country.selectedIndex].value;
    var initiativeName = document.getElementById('initiative').value;
    var language = document.getElementById('lang').value;
    var amount = document.getElementById('hidden_donation_amount').value;
    var convertedAmount = 0;
    var selectedDonationCurrency = document.getElementById('hidden_donation_currency').value;
    var isRecurring = $('#is_recurring').val();

    var isIndianChecked = $("input[name='nationality']:checked").val();
    var defaultCountryVal = document.getElementById('default_country').innerHTML;

    if(initiativeName=='cauvery-calling')
    {
      var exemptionType = $("input[name='exemption']:checked").val();

      if(isIndianChecked == 'yes' && selectedCountry != INDIA_COUNTRY_ID && (exemptionType == 'indian' || exemptionType == 'other' || typeof exemptionType == 'undefined'))
      {
        $("#passport_image_input").show();

        if(selectedCountry!=defaultCountryVal)
        {
          $("#passport_info_msg").show();
        }

      }
      else
      {
       $("#passport_image_input").hide();
       $("#passport_info_msg").hide();
     }

   }
   if(initiativeName == 'project-greenhands' || initiativeName == 'save-soil' || initiativeName == 'annadanam-online' || initiativeName == 'action-rural-rejuvenation' || initiativeName == 'contribute')
   {
    
      if(isIndianChecked == 'yes' && selectedCountry != INDIA_COUNTRY_ID)
      {
        $("#passport_image_input").show();

        if(selectedCountry!=defaultCountryVal)
        {
          $("#passport_info_msg").show();
        }

      }
      else
      {
       $("#passport_image_input").hide();
       $("#passport_info_msg").hide();
     }

 }

 if(initiativeName == 'isha-vidhya'){
  var donation_type = $('#donation_type').val();
  if(selectedDonationCurrency == 'USD'){
   $("#passport_image_input").hide();
   $("#passport_info_msg").hide();
   convertedAmount = amount;
   if(donation_type == 3){
    $('#donation_message').html($('#hidden_common_donation_msg').val());
  }else{
    $('#donation_message').html('Your Contribution of $ '+amount+' is greatly appreciated');
  }
}else{
  if(selectedDonationCurrency == 'INR'){
    convertedAmount = amount;

    if(isIndianChecked == 'yes' && selectedCountry != INDIA_COUNTRY_ID)
    {
      $("#passport_image_input").show();

      if(selectedCountry!=defaultCountryVal)
      {
        $("#passport_info_msg").show();
      }

    }
    else
    {
     $("#passport_image_input").hide();
     $("#passport_info_msg").hide();
   }

   if(donation_type == 3){
    $('#donation_message').html($('#hidden_common_donation_msg').val());
  }else{
    $('#donation_message').html('Your Contribution of ₹ '+amount+' is greatly appreciated');
  }
}
}
}else{
 convertedAmount = amount;
}

document.getElementById('donation_message').style.display="block";
document.getElementById('hidden_donation_amount').value = amount;

var isChecked = $("input[name='nationality']:checked").val();
console.log("==="+selectedCountry+"==="+convertedAmount+"isChecked");


if(selectedCountry == ''){
  document.getElementById('donation_message').innerHTML= '';
}

if(selectedCountry == INDIA_COUNTRY_ID){
  $("#pincode").attr('minlength','6');
}else{
  $("#pincode").attr('minlength','3');
}

if(country){
  showLoader();
  document.getElementById("selected_state").style = '';

  url = '/'+language+'/'+initiativeName+'/donate/country-states';
  $.ajax({
   type:'post',
   data: {country_code : selectedCountry},
   dataType:'json',
   url: url,
   success:function(resp)
   {

    if (resp=='' || resp == null) {
      $('#state_name_text').val('');
      $('#input_state').show();
      $('#select_state').hide();
      $('#is_structured').val(0);
      hideLoader();
    }else{
      $('#input_state').hide();
      $('#select_state').show();
      $('#is_structured').val(1);
      $("#state_name").empty();
      var html = '';
      $('#selected_state').text('Select State');
      html += '<option id="state_val">Select State</option>';
      for(i=0; i< resp.length; i++){
        html += '<option id="state_name" value="'+resp[i]['name']+'">'+resp[i]['name']+'</option>';
      }
      $("#selected_state").css('pointer-events', 'auto');
      $('#selected_state').prop('disabled', false);
      $("#selected_state").append(html);
      hideLoader();
    }
  }

});
}
}


// function countryBlur() {
//         if($("input[name='countrycode']:checked").length){
//             var countrychage = $("input[name='countrycode']:checked").val();
//             var ContryLable = $("#selected_country").text();
//             if(countrychage ==''){
//                 $('#country_input').addClass('error');
//                 $('#country_error_msg').html('Please select country');
//                 isSuccessM = false;
//             }else{
//                 $('#country_error_msg').empty();
//                 $('#country_input').removeClass('error');
//             }
//         }else{
//             $('#country_input').addClass('error');
//             $('#country_error_msg').html('Please select country');
//                 isSuccessM = false;
//         }
//     }


/************ Gift A Tree functions starts here***********/

function hideDivsGiftATree(uniqueKey) {

 if($('#initiative').length > 0){
  var initiativeName = document.getElementById('initiative').value;
  if(initiativeName == 'cauvery-calling'){
    $('html, body').animate({
      scrollTop: $('#donation_title').offset().top
    }, 500);

    var donationType = $('#donation_type').val();
      // if(donationType == 1 && $('#country_ip').length > 0){
      //     var countryIp = $('#country_ip').val();
      //     if(countryIp == 1){
      //       $('#us_canada_country').show();
      //   }
      // }
    }
  }

  var uri = window.location.toString();
  if (uri.indexOf("?") > 0) {
   var clean_uri = uri.substring(0, uri.indexOf("?"));
   window.history.replaceState({}, document.title, clean_uri);
 }
 var paymentType = document.getElementById('payment_type').value;
 if(document.getElementById("error_donation_msg").innerHTML!= "") {
  $('html, body').animate({
    scrollTop: $('#donation_title').offset().top
  }, 500);

  fadeOutEffect('error_donation_msg');
}

if(paymentType == 'online'){
  var donateStep = document.getElementById('hidden_donation_step').value;
  if(donateStep == 1){
    if(initiativeName == 'cauvery-calling'){

      $("#freq").val(0).change();

      var cookieCurrency = getCookie('currency');
      var isRecurring = $('#is_recurring').val();

      if(donationType != 3){
        if(cookieCurrency != '' && cookieCurrency != undefined){
          //set cookie currency
          $('#donation_currency option[value='+cookieCurrency+']').attr('selected','selected');
        }
      }
    }
    var currency = document.getElementById('donation_currency').value;
    var saplingCost = $('#currency_'+currency).attr('sapling-cost');
    $('.currency-blocks').hide();
    if(initiativeName == 'cauvery-calling'){
     document.getElementById("gift_check").checked = false;
     $('input:radio[name=mail_me]').each(function () { $(this).prop('checked', false); });
     document.getElementById("txt_question").value= '';
     document.getElementById("donor_name").value = '';
     document.getElementById("full_name").value = '';
     document.getElementById("certi_email").value = '';
     if(currency == 'INR'){
       document.getElementById('amount-span').innerHTML = "x ₹ "+saplingCost+" per tree";
     }else{
       document.getElementById('amount-span').innerHTML = "x "+currency+" "+saplingCost+" per tree";
     }
   }
   $('.currency_'+currency).show();

    //document.getElementById('gift_custom_amount').style.visibility='hidden';
    var donationMsg = document.getElementById("donation_msg_id").value;
    var donationAmount = document.getElementById("default_amount").value;
    var donationTrees = document.getElementById("default_donation_tree").value;
    var donationTitle = document.getElementById('donation_title').innerHTML;

    document.getElementById("hidden_donation_currency").value = currency;
    document.getElementById("display_donation_msg").innerHTML=donationMsg;
    document.getElementById("hidden_donation_msg").value = donationMsg;
    document.getElementById("hidden_donation_amount").value = donationAmount;
    document.getElementById("hidden_donation_description").value = donationTrees;
    document.getElementById("hidden_donation_title").value = donationTitle;

    if(initiativeName == 'cauvery-calling'){
      var saplingCost = $('#currency_'+currency).attr('sapling-cost');
      if(currency == 'INR'){
        document.getElementById('per_tree_msg').innerHTML = '₹ <span class="">'+saplingCost+'</span> per Tree';
      }else{
        document.getElementById('per_tree_msg').innerHTML = '<span class="">'+saplingCost+'</span> '+currency+ ' per Tree';
      }
    }
    if($('#main_div').length > 0){
      $('#main_div').show();
    }

    isRecurring = $("input[name='freq']:checked").val();
    var i = 0;
    if(isRecurring == 1)
    {
      $('.donation_trees').each(function(){
        var treestr = $(this).val();
        trees = treestr.match(/(\d+)/);
        if(parseInt(trees[0]) > 2380){
          $('.'+i+'_trees').hide();
        }
        i = parseInt(i) + parseInt(1);
      });

      /* By default monthly selected for sanghamitra */
      if($('#freq').length > 0 && initiativeName == 'cauvery-calling'){
        $("input[name=freq][value='1']").attr('checked', true);
        $('#amount_package').show();
        changePaymentType();
      }
      
    }else{
      donate_for = $('#donate_for').val();
      if(donate_for == 'plant-trees-1'){
        $("#donation_currency").val('USD').change();
        $("#donation_currency").css('pointer-events', 'none');
      }
      $('#amount_package').show();
    }

    if($('.currency_'+currency).length <= 0){
      $('#display_donation_msg').html('');
      $('#hidden_donation_msg').val('');
      $('#hidden_donation_amount').val('');
      $('#amt-block').addClass('amt-block');
    }
  }else if(donateStep == 2){
    $('html, body').animate({
      scrollTop: $('#donation_title').offset().top
    }, 500);
    document.getElementById("banner").style.display = "none";
    document.getElementById("donation_summary").style.display = "none";
    document.getElementById("donation_title").innerHTML = document.getElementById("hidden_donation_title").value;
    document.getElementById("gift_donation_message").innerHTML = document.getElementById("hidden_donation_msg").value;
  }else if(donateStep == 3){
    $('html, body').animate({
      scrollTop: $('#donation_title').offset().top
    }, 500);
    document.getElementById("banner").style.display = "none";
    document.getElementById("donation_summary").style.display = "none";
    document.getElementById("donation_title").innerHTML = document.getElementById("hidden_donation_title").value;
    var isRecurring = $('#is_recurring').val();
    if(isRecurring != 1){
      document.getElementById("selected_state").disabled = true;
      document.getElementById('pancard_input').style.display = "none";
    }

    if(isRecurring == 1){
      $("#selected_country option[value='IN']").prop('selected',true);
      $("#is_structured").val(1);
      //$("#selected_country").css('pointer-events', 'none');
      var donationVal = $("#hidden_donation_amount").val();
      $('#converted_amount').val(donationVal);
      $('#converted_currency').val('INR');
      if(donationVal >= 50000){
        document.getElementById('pancard_input').style.display = "block";
      }else{
        document.getElementById('pancard_input').style.display = "none";
      }

      var donationMsg = $("#hidden_donation_msg").val();
      $('#conversion_amount_msg').html(donationMsg);
    }


                //document.getElementById('show_address_msg').style.display='block';
                document.getElementById('donation_message').innerHTML='';
                $("#selected_country option[value='IN']").show();

                /* this code is used to display donation message for pgh */
                // var initiativeName = document.getElementById('initiative').value;
                var selectedDonationCurrency = document.getElementById('hidden_donation_currency').value;
                var amount = document.getElementById('hidden_donation_amount').value;
                if(initiativeName == 'cauvery-calling'){
                  $('#donation_message').html('');
                 // $('#conversion_amount_msg').html('Your contribution of '+amount+' '+currency+' for '+trees+' '+treeString+' is greatly appreciated');
               }else{
                if(selectedDonationCurrency == 'USD'){
                  var fromCurrencyValue = document.getElementById('from_currency_value').value;
                  var convertedAmount = amount * fromCurrencyValue;
                  convertedAmount = Math.ceil(convertedAmount);
                  var changedDonationMsg = 'We have converted your donation amount of ' + amount +
                  ' US Dollars (USD) to ' +convertedAmount+' Indian Rupees (INR). You will see this INR value in your receipt and the payment screens.';
                  document.getElementById('donation_message').innerHTML = changedDonationMsg;
                  document.getElementById('hidden_donation_msg').value = changedDonationMsg;
                }else{
                  $('#donation_message').html($('#hidden_common_donation_msg').val());
                  $('#hidden_donation_msg').val($('#hidden_common_donation_msg').val());
                }
              }
              /* this code is used to display donation message for pgh */

            }else if(donateStep == 4){
              document.getElementById("donation_summary").style.display = "none";
            }
          }
        }

        function changeAmountGiftATree(donationMsg,donationAmount,donationdescription){
          var currency = document.getElementById('donation_currency').value;
          $('.total-amount').removeClass('error');
            //document.getElementById('gift_custom_amount').style.display = "none";
            //document.getElementById('amount-span').innerHTML = "<span class=''></span>";
            document.getElementById('invalidAmount').innerHTML='';
            document.getElementById('display_donation_msg').style.display='block';
            var initiativeName = document.getElementById('initiative').value;
            if(initiativeName == "cauvery-calling"){

              var isRecurring = $('#is_recurring').val();
              if(isRecurring == 1)
              {
                $('#display_donation_msg').hide();
                donationMsg = diaplayDonationMsg = '';
                  //var amount = document.getElementById('hidden_donation_amount').value;
                  var NoOfInstallment = document.getElementById('no_of_months').value;
                  var dayOfMonth = document.getElementById('dayOfMonth').value;
                  if(donationAmount > 0 && NoOfInstallment > 0 && dayOfMonth > 0)
                  {
                    if(currency == 'INR'){
                      currencySymbol = '₹';
                    }
                    var day = getGetOrdinal(dayOfMonth);
                    //var lastInstallment = getLastInstallmentMonth(NoOfInstallment, dayOfMonth);

                    var num = donationAmount.toLocaleString('en-IN', {
                      style: 'currency',
                      currency: 'INR'
                    });
                    num = num.replace(".00", " ");
                    num = num.replace("₹", "");
                    untilCancelledFlag = $('#until_cancelled_flag').val();
                    if(untilCancelledFlag == 1){
                      Msg = "Donate "+currencySymbol+" "+num+" monthly on the "+day+" of each month until cancelled by you";
                    }else{
                      var lastInstallment = getLastInstallmentMonth(NoOfInstallment, dayOfMonth);
                      Msg = "Donate "+currencySymbol+" "+num+" monthly on the "+day+" of each month until "+lastInstallment+".";
                    }
                    $('#recurring_donation_msg').html(Msg);
                    $('#hidden_donation_msg').val(Msg);
                  }else{
                    $('#recurring_donation_msg').html('');
                    $('#hidden_donation_msg').val('');
                  }
                }

                var num = donationAmount.toLocaleString('en-IN', {
                  style: 'currency',
                  currency: 'INR'
                });
                num = num.replace(".00", " ");
                if(currency != 'INR'){
                  num = num.replace("₹", '');
                  num = num+'</span> '+currency;
                }
                donationMsg = 'Your contribution of '+num+' for '+donationdescription+' is greatly appreciated';
                diaplayDonationMsg = '<div class="title">Total Amount: </div> <div class="grand-amt"> <span class="">'+num+'</div>';
              }
              else{
                diaplayDonationMsg = donationMsg;
              }
              document.getElementById("display_donation_msg").innerHTML=diaplayDonationMsg;
              document.getElementById("hidden_donation_msg").value = donationMsg;
              document.getElementById("hidden_donation_amount").value = donationAmount;
              document.getElementById("hidden_donation_description").value = donationdescription;
            }

            function continueCertificateGiftATree(){

    isError = 0; // set no errors
    var isRecurring = $("input[name='freq']:checked").val();
    var amountType = $("input[name='donation_trees']:checked");
    var currency = document.getElementById('donation_currency').value;

    var initiativeAlias = document.getElementById('initiative').value;

    if($(amountType).hasClass( "radio_custom_amount") || $('.currency_'+currency).length <= 0){
      var amountValue = $('#custom_amount').val();
      var amountLimit;
      var amountLimitMsg;

      // if(isRecurring == 1 && amountValue > 2380){
      //   $('html, body').animate({
      //       scrollTop: $('.amount-package').offset().top
      //   }, 500);
      //   $('#invalidAmount').css("bottom","-30px");
      //   $('#invalidAmount').html('Maximum 2380 trees are allowed');
      //   return false;
      // }

      if(currency == 'INR'){
        var initiativeAlias = document.getElementById('initiative').value;
        if(initiativeAlias != 'cauvery-calling'){
          amountLimit = 100;
          document.getElementById('amount-span').innerHTML = '';
          amountLimitMsg = "Amount must be more than ₹ "+amountLimit;
        }
      }else if(currency== 'USD' && initiativeAlias != 'cauvery-calling'){
        amountLimit = 2;
        document.getElementById('amount-span').innerHTML = '';
        amountLimitMsg = "Amount must be more than $ "+amountLimit;
      }

      if(amountValue.length > 0 && amountValue == 0){
        var initiativeAlias = document.getElementById('initiative').value;
        if(initiativeAlias == 'cauvery-calling'){
          document.getElementById('invalidAmount').innerHTML = "Trees cannot be 0";
          $('html, body').animate({
            scrollTop: $('.amount-package').offset().top
          }, 500);
          return false;
        }else{
          document.getElementById('invalidAmount').innerHTML = "Amount cannot be 0";
          return false;
        }

      }else if(amountValue.length > 0 && amountValue < amountLimit){
        document.getElementById('invalidAmount').innerHTML = amountLimitMsg;
        //document.getElementById('amount-span').innerHTML = '<span class=""></span>';
        return false;
      }

      var regExAmtMessage = "Numbers allowed";
      var errorMsg = '';
      if(initiativeAlias == 'cauvery-calling'){
        errorMsg = 'Enter number of trees';
      }else{
        errorMsg = 'Enter Amount';
      }
      validateField('#custom_amount', '', '#invalidAmount', regexCustomAmount, errorMsg, regExAmtMessage);
      if(isError == 1 && isRecurring == 0){
        if(initiativeAlias == 'cauvery-calling'){
          $('html, body').animate({
            scrollTop: $('.amount-package').offset().top
          }, 500);
        }
        return false;
      }
    }

    if(initiativeAlias == 'cauvery-calling' && $(amountType).hasClass( "radio_custom_amount") == false){
      var amount = document.getElementById('hidden_donation_amount').value;
      var isRecurring = $("input[name='freq']:checked").val();
      if(amount == ''){
        $('.total-amount').addClass('error');
        if(isRecurring == 1)
        {
          $('#display_donation_msg').show();
        }
        document.getElementById('display_donation_msg').innerHTML = '<div class="text error">Please choose the number of trees you would like to plant</div>';

        $('html, body').animate({
          scrollTop: $('.amount-package').offset().top
        }, 500);
        isError = 1;
      }
      if(isRecurring == 1)
      {
        var noOfMonths = document.getElementById('no_of_months').value;
        if(noOfMonths == ''){
          document.getElementById('installment_donation_msg').innerHTML = 'Please choose the number of months';
          isError = 1;
        }
      }
      if(isError == 1){
        return false;
      }
    }


    if(initiativeAlias == 'cauvery-calling'){
      var donationTye = $('#donation_type').val();
      var isRecurring = $("input[name='freq']:checked").val();
      if((isRecurring == '' || isRecurring == undefined) && donationTye == 1 && currency == 'INR'){
        $('.total-amount').addClass('error');
        document.getElementById('display_donation_msg').innerHTML = '<div class="text error">Please select Payment Frequency</div>';
        return false;
      }else if(isRecurring == 1 && donationTye == 1 && currency == 'INR'){
        validateRecurringPaymentDetails();
        if(isError == 1){
          return false;
        }else if($("input[name='installments']:checked").hasClass("radio_custom_installments")){
          var installmentValue = $('#custom_installments').val();
          if(installmentValue == 0 || installmentValue == ''){
            $('#installment_donation_msg').html('Installment must be greater than 1 Month');
            $('html, body').animate({
              scrollTop: $('.monthly-block').offset().top
            }, 500);
            return false;
          }
        }

      }else{
        isGift = document.getElementById("gift_check").checked;
        if(isGift == true){
          validateCertificateDetails();
          if(isError == 1){
            return false;
          }
        }
      }
    }


    var initiativeName = document.getElementById('initiative').value;
    if(initiativeName == 'cauvery-calling'){
      var donationType = document.getElementById("donation_type").value;
      var str = document.getElementById("hidden_donation_msg").value.replace(/<\/?span[^>]*>/g,"");
      var personalMessage = document.getElementById("txt_question").value;
      var personalMessage = personalMessage.replace(/[']/gi,'&apos');
      var personalMessage = personalMessage.replace(/["]/gi,'&quote');
      var isGift = document.getElementById("gift_check").checked;
      if(isGift == true){
        giftCheck = 1;
      }else{
        giftCheck = 0;
      }

      if(donationType == 3){
        var lang = document.getElementById("lang").value;
        var campaignAlias = document.getElementById("campaign_alias").value;
        var url = '/'+lang+'/'+initiativeName+'/campaigns/'+campaignAlias+'/personal-details';
        var donateForm ="<form class='hide' method='post' id='donate_form' name='donate_form' action='"+url+"'>" +
        "<input type='text' name='donation_amount' value='"+document.getElementById("hidden_donation_amount").value+"'>" +
        "<input type='text' name='donation_msg' value='"+str+"'>" +
        "<input type='text' name='donation_currency' value='"+document.getElementById("hidden_donation_currency").value+"'>" +
        "<input type='text' name='donation_trees' value='"+document.getElementById("hidden_donation_description").value+"'>" +
        "<input type='text' name='donation_purpose_id' value='"+document.getElementById("hidden_donate_purpose_id").value+"'>" +
        "<input type='text' name='initiative_short_code' value='"+document.getElementById("initiative_short_code").value+"'>" +
        "<input type='text' name='donation_type' value='"+document.getElementById("donation_type").value+"'>" +
        "<input type='text' name='hidden_donation_title' value='"+document.getElementById("hidden_donation_title").value+"'>" +
        "<input type='text' name='campaign_id' value='"+document.getElementById("hidden_campaign_id").value+"'>" +
        "<input type='text' name='campiagn_name' value='"+document.getElementById("hidden_campaign_name").value+"'>" +
        "<input type='text' name='parent_campaign_id' value='"+document.getElementById("parent_campaign_id").value+"'>" +
        "<input type='text' name='donor_image' value='"+document.getElementById("donor_image").value+"'>" +
        "<input type='text' name='gift_check' value='"+document.getElementById("gift_check").value+"'>" +
        "<input type='text' name='full_name' value='"+document.getElementById("full_name").value+"'>" +
        "<input type='text' name='donor_name' value='"+document.getElementById("donor_name").value+"'>" +
        "<input type='text' name='message' value='"+personalMessage+"'>" +
        "<input type='text' name='mail_me' value='"+$("input[id=mail_me]:checked").val()+"'>" +
        "<input type='text' name='certi_email' value='"+document.getElementById("certi_email").value+"'>" +
        "<input type='text' name='donate-for' value='"+document.getElementById("donate_for").value+"'>" +
        "</form>";
      }else{
       var url = window.location.href+"/personal-details";
       var donateForm ="<form class='hide' method='post' id='donate_form' name='donate_form' action='"+url+"'>" +
       "<input type='text' name='hidden_donation_amount' value='"+document.getElementById("hidden_donation_amount").value+"'>" +
       "<input type='text' name='hidden_donation_msg' value='"+str+"'>" +
       "<input type='text' name='hidden_donation_currency' value='"+document.getElementById("hidden_donation_currency").value+"'>" +
       "<input type='text' name='hidden_donation_description' value='"+document.getElementById("hidden_donation_description").value+"'>" +
       "<input type='text' name='hidden_donate_purpose_id' value='"+document.getElementById("hidden_donate_purpose_id").value+"'>" +
       "<input type='text' name='hidden_initiative_short_code' value='"+document.getElementById("initiative_short_code").value+"'>" +
       "<input type='text' name='hidden_donation_type' value='"+document.getElementById("donation_type").value+"'>" +
       "<input type='text' name='is_recurring' value='"+isRecurring+"'>";

       if(isRecurring == 0){
        donateForm += "<input type='text' name='gift_check' value='"+document.getElementById("gift_check").value+"'>" +
        "<input type='text' name='full_name' value='"+document.getElementById("full_name").value+"'>" +
        "<input type='text' name='donor_name' value='"+document.getElementById("donor_name").value+"'>" +
        "<input type='text' name='message' value='"+personalMessage+"'>" +
        "<input type='text' name='mail_me' value='"+$("input[id=mail_me]:checked").val()+"'>" +
        "<input type='text' name='certi_email' value='"+document.getElementById("certi_email").value+"'>";
      }else if(isRecurring == 1){
        donateForm += "<input type='text' name='no_of_months' value='"+document.getElementById("no_of_months").value+"'>" +
        "<input type='text' name='day_of_month' value='"+document.getElementById("day_of_month").value+"'>";
      }

      donateForm +="</form>";
    }
  }else{
    var donateForm ="<form class='hide' method='post' id='donate_form' name='donate_form' action='"+window.location.href+"/certificate'>" +
    "<input type='text' name='hidden_donation_amount' value='"+document.getElementById("hidden_donation_amount").value+"'>" +
    "<input type='text' name='hidden_donation_msg' value='"+document.getElementById("hidden_donation_msg").value+"'>" +
    "<input type='text' name='hidden_donation_currency' value='"+document.getElementById("hidden_donation_currency").value+"'>" +
    "<input type='text' name='hidden_donation_description' value='"+document.getElementById("hidden_donation_description").value+"'>" +
    "<input type='text' name='hidden_donate_purpose_id' value='"+document.getElementById("hidden_donate_purpose_id").value+"'>" +
    "<input type='text' name='hidden_initiative_short_code' value='"+document.getElementById("initiative_short_code").value+"'>" +
    "<input type='text' name='hidden_donation_type' value='"+document.getElementById("donation_type").value+"'>" +
    "<input type='text' name='hidden_donation_title' value='"+document.getElementById("hidden_donation_title").value+"'>" +
    "</form>";
  }

  var isSessionSet = $('#session_set').val();

  donateFormCookie = encodeURI(donateForm);
  storeCookie('donation_post_data='+donateFormCookie);

  if(isRecurring == 1 && isSessionSet == 0){
    storeCookie('donation_redirect_url='+window.location.href);
    setRedirectURL(url);
    loginSignup(0);
    return;
  }else{
    $('#main-amount-div').append(donateForm);
    $('#donate_form').submit();
  }

}

function goBackFromCertificateGiftATree(){
  var donationSteps = document.getElementById("donate_process");
  donationSteps.classList.remove("step-2");
  donationSteps.classList.add("step-1");

  document.getElementById("hidden_donation_amount").value = '';

  document.getElementById("banner").style.visibility='visible';
  document.getElementById("donation_summary").style.visibility='visible';
}

function validatePersonalDetails(){
    isError = 0; // set no errors
    isCheckboxError = 0;
    isPanAadharError = 0;
    validatePersonalDetailsFields(); // validate  all fields

    if(isCheckboxError == 1 && isError == 0){
        setError();
         $('html, body').animate({
        scrollTop: $('.terms-message').offset().top
      }, 500);
      return false;
    }else if(isError == 1){
      if(isPanAadharError == 1){
        $('html, body').animate({
          scrollTop: $('#pancard_input').offset().top
        }, 500);
      }else{
        $('html, body').animate({
          scrollTop: $('.perosnla_details .error').offset().top
        }, 500);
      }
      return false;
    }else if(isError == 0){
      showLoader();
      return true;
    }else{
      return false;
    }
  }

  function validatePersonalDetailsFields(){
    var initiativeName = document.getElementById('initiative_name').value;
    var isRecurring = $('#is_recurring').val();
    var isChecked = $("input[name='nationality']:checked").val();
    var is80Gexemtion = $("input[name='want_80G']:checked").val();

    validateFirstName();
    validateLastName();
    validateEmail();
    validatePhoneNo();
    validateAddress();
    if(initiativeName != "mahashivratri-contribution" && initiativeName != 'rudraksha-seva' && isRecurring != 1 && initiativeName != 'online-contribution' && initiativeName != "syt-online-contribution"){
      validateNationality();
    }
    validateCountryDetails();
    validatecity();
    validatePincodeBlur();

    validatePassportImage();


    //============================
    var donatePurposeId = $('#hidden_donate_purpose_id').val();

    if(isRecurring == 1){
      validateNationality();
    }

    if(initiativeName != 'rudraksha-seva' && initiativeName != 'rudraksha-diksha' && initiativeName != 'mahashivratri-contribution' && initiativeName != 'online-contribution' && initiativeName != "syt-online-contribution")
    {   
      validate80GExemtion();
    }

    if((initiativeName == 'contribute' && (donatePurposeId == 'Isha-Biksha' || donatePurposeId == 'IYC-Annadhanam')) || (initiativeName == 'syt-online-contribution' && donatePurposeId == 'SYT-GAUDN')){
      validateOccasion();
      validateDateOfOccasion();
      validateHonouredPersons();
    }
    //==============================

    var country = document.getElementById('selected_country');
    var selectedCountry = country.options[country.selectedIndex].value;
    //if(selectedCountry == INDIA_COUNTRY_ID || selectedCountry == USA_COUNTRY_ID){
      validateStateDetails();
    //}
    var amount = document.getElementById('converted_amount').value;
    var isChecked = $("input[name='nationality']:checked").val();
    var hidden_donation_currency =$("#hidden_donation_currency").val();

    if(isChecked == 'no' && ((initiativeName != 'isha-vidhya') ||(initiativeName == 'isha-vidhya' && hidden_donation_currency != 'USD'))){
      validateFCRNationality();
      validatePassportNumber();
    }
    
    if(amount >= 50000 && isChecked == 'yes'){
      validatePanCard();
    }
    if((initiativeName == "mahashivratri-contribution" || initiativeName == 'rudraksha-seva' || isRecurring == 1 || initiativeName == 'online-contribution' || initiativeName == "syt-online-contribution") && amount >= 50000){
      validatePanCard();
    }

    if(isRecurring == 1 && (donatePurposeId == 'Isha' || donatePurposeId == 'SGMT' || donatePurposeId == 'BGLDON' || donatePurposeId == 'CVC-IOR') && isChecked == 'yes'){
      var currency = $('#hidden_donation_currency').val();
      if(currency == 'INR'){
        var installmentVal = $("#hidden_donation_amount").val();
        var NoOfInstallments = $("#no_of_months").val();
        var finalAmount = parseInt(installmentVal) * parseInt(12);
      }else{
        var convertedAmount = $('#converted_amount').val();
        var finalAmount = parseInt(convertedAmount) * parseInt(12);
      }
      if(finalAmount >= 50000 && (donatePurposeId == 'CVC-IOR' || donatePurposeId == 'BGLDON')){
        validatePanCard();
      }else if(donatePurposeId == 'SGMT'){
        validatePanCard();
      }
    }

    if(is80Gexemtion == 'yes' && initiativeName != 'rudraksha-seva' && initiativeName != 'rudraksha-diksha' && initiativeName != 'mahashivratri-contribution' && initiativeName != 'online-contribution' && initiativeName != "syt-online-contribution")
    {   
      validatePancardAadharFor80G();
    }

    // var exemptionCheck = document.getElementById("tax_exemption").checked;
    // if($('#avail_exemption').length > 0 && exemptionCheck == true){
    //   validateTaxExemptionCheck();
    // }
    if(initiativeName == "mahashivratri-contribution" || initiativeName == 'rudraksha-seva' || initiativeName == 'online-contribution' || initiativeName == "syt-online-contribution" || (initiativeName == 'contribute' && donatePurposeId == 'ISHA')){
      validateTaxMessageCheck();
    }

    validateAgreeCheck();

    if(donatePurposeId == 'Donation'){
      validateIndianCitizenAgreeCheck();
    }

    if(is80Gexemtion == 'no' && initiativeName != 'rudraksha-seva' && initiativeName != 'rudraksha-diksha' && initiativeName != 'mahashivratri-contribution' && initiativeName != 'online-contribution' && initiativeName != "syt-online-contribution")
    {   
      validateNo80GConsentCheck();
    }
    
  }

  function validateTaxMessageCheck(){
    var isChecked = $("input[name='msr_tax_msg']:checked").length;
    if(isChecked == 0){
      setErrMsg("#msr_tax_msg_error_msg", 'Please select tax exemption message');
      isCheckboxError = 1;
    }else{
      $('#msr_tax_msg_error_msg').html('');
      return true;
    }
  }

  function validateAgreeCheck(){
    var isChecked = $("input[name='agree_tnc']:checked").length;
    if(isChecked == 0){
      isCheckboxError = 1;
      setErrMsg("#agree_tnc_error_msg", 'Please agree to terms and conditions');
      //setError();
    }else{
      $('#agree_tnc_error_msg').html('');
      return true;
    }
  }

  function validateTaxExemptionCheck(){
    var isChecked = $("input[name='exemption']:checked").length;
    if(isChecked == 0){
      setErrMsg("#exemption_error_msg", 'Selection is mandatory');
      setError();
    }
  }

  function validateNationality(){
    var isChecked = $("input[name='nationality']:checked").length;
    if(isChecked == 0){
      addErrorClass('#nation_input');
      setErrMsg("#nation_error_msg", 'Selection is mandatory');
      setError();
      if($('#nation_check').hasClass('chk-nationality')){
        $('html, body').animate({
          'scrollTop' : $(".chk-nationality").position().top
        });
      }
    }
  }

  function validate80GExemtion(){
    var isChecked = $("input[name='want_80G']:checked").length;
    if(isChecked == 0){
      isCheckboxError = 1;
      addErrorClass('#tax_80g_input');
      setErrMsg("#want_80G_error_msg", 'Selection is mandatory');
      setError();
        // $('html, body').animate({
        //   'scrollTop' : $("#tax_80g_input").position().top
        // });
    }
  }

  function validateNo80GConsentCheck(){
    var isChecked = $("input[name='no_80G_consent']:checked").length;
    if(isChecked == 0){
      isCheckboxError = 1;
      setErrMsg("#agree_no80g_consent_error_msg", 'Please select declaration');
    }else{
      $('#agree_no80g_consent_error_msg').html('');
      return true;
    }
  }

  function validatePancardAadharFor80G(){
    $('#pancard_input').removeClass('error');
    $('#pancard_error_msg').html("");
    var pancard = $('#pancard').val();
    var aadhar = $('#aadhar_card').val();
    var donationAmount = $('#hidden_donation_amount').val();
    var isRecurring = $('#is_recurring').val();
    var currency = $('#hidden_donation_currency').val();
    var isChecked = $("input[name='nationality']:checked").val();
    var showAadhar = $("input[name='show_aadhar']:checked").val();
    if(isRecurring == 1){
      if(currency == 'INR'){
        var donationAmount = parseInt(donationAmount) * parseInt(12);
      }else{
        var convertedAmount = $('#converted_amount').val();
        var donationAmount = parseInt(convertedAmount) * parseInt(12);
      }
    }else{
      if(currency != 'INR'){
        donationAmount = $('#converted_amount').val();
      }
    }

    var is80Gexemtion = $("input[name='want_80G']:checked").val();

    if(is80Gexemtion == 'yes'){
      if(showAadhar == 'on' && pancard == "" && aadhar == "" && (donationAmount < 50000 || isChecked == 'no')){
        //$('#pancard_adhar_error_msg').html("Please enter pancard number or adharcard");
        $('#pancard_input').addClass('error');
        $('#aadhar_input').addClass('error');
        $('.desktop-aadhar').css('left','-164px');
        $('#pancard_error_msg').html("");
        $('#adharcard_error_msg').html("Please enter PAN or Aadhaar number");
        if(isError == 0){
          isPanAadharError = 1;
        }
          setError();
      }else{
        //if(isRecurring != 1){
          if((donationAmount < 50000 || isChecked == 'no')){
            $('#pancard_input').removeClass('error');
          }
          $('#aadhar_input').removeClass('error');
          $('#adharcard_error_msg').html("");
        //}
      }

      if(showAadhar != 'on'){
        if(pancard == "" || pancard == undefined){
          $('#pancard_input').addClass('error');
          $('#pancard_error_msg').html("Please enter PAN number");
          if(isError == 0){
            isPanAadharError = 1;
          }
          setError();
        }else if(regPanCard.test(pancard) == false){
          $('#pancard_input').addClass('error');
          $('#pancard_error_msg').html("Please enter 10 alphanumeric characters in UPPERCASE");
          if(isError == 0){
            isPanAadharError = 1;
          }
          setError();
        }else{
          $('#pancard_input').removeClass('error');
          $('#pancard_error_msg').html("");
          $('#aadhar_input').removeClass('error');
          $('#adharcard_error_msg').html("");
        }
      }
      if(aadhar != "" && aadhar != undefined){
        if(regAadhar.test(aadhar) == false || aadhar.length != 12){
          $('#aadhar_input').addClass('error');
          $('.desktop-aadhar').css('left','6px');
          $('#adharcard_error_msg').html("Please enter 12 digit numeric Aadhaar number");
          if(isError == 0){
            isPanAadharError = 1;
          }
          setError();
        }else{
          $('#aadhar_input').removeClass('error');
          $('#adharcard_error_msg').html("");
        }
      }else if(donationAmount >= 50000 && isChecked == 'yes'){
        $('#aadhar_input').removeClass('error');
        $('#adharcard_error_msg').html("");
      }
    }
  }

// Country
function validateCountryDetails(){
  setErrMsg("#country_error_msg", '');
  removeErrorClass("#country_input");
  //$("#passport_info_msg").hide();
  var flag = 0;
  var country = document.getElementById('selected_country');
  var selectedCountry = country.options[country.selectedIndex].value;
  var defaultCountryVal = document.getElementById('default_country').innerHTML;
  var isChecked = $("input[name='nationality']:checked").val();
  var initiativeName = document.getElementById('initiative').value;
  var selectedDonationCurrency = document.getElementById('hidden_donation_currency').value;
  var isRecurring = $('#is_recurring').val();

  if(selectedCountry == defaultCountryVal){
    flag = 1;
    addErrorClass('#country_input');
    setErrMsg("#country_error_msg", 'Please select country');
    setError();
  }

  if(initiativeName=='cauvery-calling' || initiativeName == 'save-soil' || initiativeName == 'project-greenhands' || initiativeName == 'action-rural-rejuvenation')
  {

    var exemptionType = $("input[name='exemption']:checked").val();

    if(isChecked == 'yes' && selectedCountry != INDIA_COUNTRY_ID && country.selectedIndex!=0 &&
     (exemptionType == 'indian' || exemptionType == 'other' || typeof exemptionType == 'undefined')){
      if(flag==0)
      {
        $("#passport_info_msg").show();
      }
    }
  }

  if(initiativeName == 'isha-vidhya')
  {
    if(selectedDonationCurrency == 'INR' & isChecked== 'yes' && selectedCountry != INDIA_COUNTRY_ID && country.selectedIndex!=0)
    {
     $("#passport_info_msg").show();
   }
 }
 else if(initiativeName == 'annadanam-online' || initiativeName == 'contribute')
 {
   if(selectedDonationCurrency == 'INR' & isChecked== 'yes' && selectedCountry != INDIA_COUNTRY_ID && country.selectedIndex!=0)
   {
    if(isRecurring != 1){
      $("#passport_info_msg").show();
    }
  }
}

}

// State
function validateStateDetails(){
  setErrMsg("#state_error_msg", '');
  removeErrorClass("#select_state");
  setErrMsg("#state_error_msg_text", '');
  removeErrorClass("#input_state");
  var country = document.getElementById('selected_country');
  var selectedCountry = country.options[country.selectedIndex].value;
  var is_structured = $('#is_structured').val();
  var state = "";
  var stateValidCond = 0;


  if(is_structured == 1){
     var state = document.getElementById('selected_state');
       var selectedState = state.options[state.selectedIndex].value;
       var defaultStateVal = document.getElementById('state_val').innerHTML;
       if(selectedState == defaultStateVal){
        stateValidCond = 1;
      }
      stateValidCond = 1;
    }else{
       var selectedState = $('#state_name_text').val();
       stateValidCond = 2;
    }

if(stateValidCond == 1){
  if(selectedState == "" || typeof selectedState == 'undefined' || selectedState=='Select State'){
    addErrorClass('#select_state');
    setErrMsg("#state_error_msg", 'Please select state');
    setError();
  }

}else if(stateValidCond == 2){
  if(selectedState != '' && regexState.test(selectedState) == false){
    addErrorClass('#input_state');
    setErrMsg("#state_error_msg_text", 'Please enter only alphabets');
    setError();
  }
}
}

// Pincode
function validatePincodeBlur(){
  var pincode = $('#pincode').val();
  var country = document.getElementById('selected_country');
  var selectedCountry = country.options[country.selectedIndex].value;
  var regExMessage = "Pincode should be numeric and minimum 3 digit";
  var regExForZipCode = regexZipCodeGlobal;
  if(selectedCountry == INDIA_COUNTRY_ID){
    regExForZipCode = regexZipCodeIndia;
    regExMessage = "Pincode should be numeric and 6 digits only";
  }
  validateField('#pincode', '#zip_code_input', '#zip_error_msg', regExForZipCode, 'Please enter pin/zip code', regExMessage);
}


// to validate certificate fields
function validateCertificateDetails(){
    isError = 0; // set no errors
    validateCertificateFields(); // validate  all field
    if(isError == 1){
      return false;
    }else if(isError == 0){
      return true;
    }else{
      return false;
    }
  }

  function validateCertificateFields(){
    var initiativeAlias = document.getElementById('initiative').value;
    validateFullName();
    if(initiativeAlias == 'cauvery-calling'){
      validateMailCheck();
      var mailMe = $("input[id=mail_me]:checked").val();
      if(mailMe == 0){
        validateCertificateEmail();
      }
    }else{
      validateCertificateEmail();
      validateCertificateMessage();
    }
    validateDonorName();
  }

  function validateMailCheck(){
    var mailMe = $("input[id=mail_me]:checked").val();
    if(mailMe == undefined){
      $('#mail_check_error_msg').html('Selection is mandatory');
      $('#certi_email_input').addClass('error');
      setError();
      return false;
    }
  }

  function manageMailRadioCheck(){
    var mailMe = $("input[id=mail_me]:checked").val();
    if(mailMe == 0){
      $('#certi_email_div').show();
      $('#mail_check_error_msg').html('');
      $('#certi_email_input').removeClass('error');
    }else{
      $('#certi_email_div').hide();
      $('#certi_email').val('');
      $('#mail_check_error_msg').html('');
      $('#certi_email_input').removeClass('error');
    }
  }

  $("#txt_question").on('input',function(e){
    var certificateMessage = $("#txt_question").val();

    if(certificateMessage.length==350)
    {
      e.preventDefault();
      $('#message_error_msg').html('Only 350 Characters allowed');
      $('#message_input').addClass('error');
      setError();
      // $('#message_error_msg').html('Only 350 Characters allowed');
    }
    else if(certificateMessage.length>350)
    {
      this.value = this.value.substring(0, 350);
      $('#message_error_msg').html('Only 350 Characters allowed');
      $('#message_input').addClass('error');
      setError();
    }
    else
    {
      $('#message_error_msg').html('');
      $('#message_input').removeClass('error');
      setError();
    }
  })

  function showGiftForm(){
    var giftCheck = document.getElementById("gift_check").checked;
    if(giftCheck == true){
      $('#gift_details').show();
    }else{
      $('.personal-gifts .error-msg').html('');
      $('.personal-gifts').removeClass('error');
      $('#full_name').val('');
      $('#donor_name').val('');
      $('#txt_question').val('');
      $('#certi_email').val('');
      $('#gift_details').hide();
    }
  }

  function validateFullName(){
    validateField('#full_name', '#full_name_input', '#full_name_error_msg', regexFullName, 'Please enter full name.', 'Please enter alphabets only.');
  }

  function validateCertificateEmail(){
    validateField('#certi_email', '#certi_email_input', '#certi_email_error_msg', regexEmail, 'Please enter email.', 'Please enter valid email id.');
  }

  function validateCertificateMessage(){
    validateField('#txt_question', '#message_input', '#message_error_msg',regexCertificate, 'Please enter message.', 'Please enter valid message.');
  }

  function validateDonorName(){
    validateField('#donor_name', '#donors_name_input', '#donor_name_error_msg', regexFullName, 'Please enter donor name.', 'Please enter alphabets only.');
  }
  function goBackFromPaymentGiftATree(){
    var donationSteps = document.getElementById("donate_process");
    donationSteps.classList.remove("step-3");
    donationSteps.classList.add("step-2");
  }

  //function changeCustomAmountGiftATree(){
    $('#custom_amount').on('keyup', function () {
      var initiativeAlias = document.getElementById('initiative').value;
      var isRecurring = $('#is_recurring').val();
      if(initiativeAlias != 'isha-vidhya'){
        var customAmt = $('#custom_amount').val();

          // if(initiativeAlias == 'cauvery-calling')
          // {
            if(customAmt == 0){
              document.getElementById('display_donation_msg').innerHTML='';
              if(isRecurring == 1){
                $('#recurring_donation_msg').html('');
                $('#hidden_donation_msg').val('');
              }
          //document.getElementById('amount-span').innerHTML='<span class=""></span>';
        }
        var totalTreesPlanted = 0;
        if(customAmt == ''){
            //document.getElementById('display_donation_msg').style.display='none';
            document.getElementById('display_donation_msg').innerHTML = '';
            var donationMsg = document.getElementById("donation_msg_id").value;
            var defaultAmount = document.getElementById("default_amount").value;
            document.getElementById("display_donation_msg").innerHTML=donationMsg;
            document.getElementById("hidden_donation_msg").value = '';
            document.getElementById("hidden_donation_amount").value = '';
            document.getElementById('invalidAmount').innerHTML='';
            //document.getElementById('gift_custom_amount').style.visibility='hidden';
            document.getElementById('invalidAmount').innerHTML='';
            if(isRecurring == 1){
              $('#recurring_donation_msg').html('');
              $('#hidden_donation_msg').val('');
            }
          }else{
            if($('#gift_custom_amount').length > 0){
              document.getElementById('gift_custom_amount').style.display='block';
            }
            document.getElementById('display_donation_msg').style.display='block';
            //document.getElementById("donation_trees_0").checked = false;
          }
          if(regexCustomAmount.test($('#custom_amount').val()) == true){
            isSuccess = true;
          }else{
           isSuccess = false;
         }
         if(customAmt!=0){
          var currency = document.getElementById('donation_currency').value;
          var saplingCost = $('#currency_'+currency).attr('sapling-cost');
          var currencyRate = $('#currency_'+currency).attr('data-rate');
          var currencyName = $('#currency_'+currency).html();
          if(saplingCost !=null && saplingCost !=0 && saplingCost !=undefined){
            if(initiativeAlias == 'cauvery-calling'){
              var customTrees = customAmt;
              if(customTrees > 1){
                var treeVar = 'trees';
              }else{
                var treeVar = 'tree';
              }
              totalTreesPlanted = customTrees;
              var totalTreeCost = customTrees*saplingCost;
              totalTreeCost = Math.round(totalTreeCost * 100) / 100;
            }else{
              totalTreesPlanted = Math.floor(customAmt/saplingCost);
            }
          }
          if(initiativeAlias == 'cauvery-calling'){
            var num = totalTreeCost.toLocaleString('en-IN', {
              style: 'currency',
              currency: 'INR'
            });
            num = num.replace(".00", " ");
            var nf = new Intl.NumberFormat();
            var numTree = nf.format(customTrees);
          }
          if(currency == 'INR'){
            if(initiativeAlias == 'cauvery-calling'){
              var donationMsg = "Your contribution of "+num+" for "+numTree+" "+treeVar+" is greatly appreciated";
              // var displayDonationMsg = '<div class="text">Your contribution of <span class="dark-black "> '+num+'</span> for <span class="dark-black ">'+numTree+' '+treeVar+'</span> is greatly appreciated</div>';
              var displayDonationMsg = '<div class="title">Total Amount: </div><div class="grand-amt"> <span class="">'+num+'</span></div>';
            }else{
              var donationMsg = 'Your Contribution of ₹ '+customAmt+' will help us to plant '+totalTreesPlanted+' trees';
              var displayDonationMsg = 'Your Contribution of ₹ <span class="">'+customAmt+'</span> will help us to plant <span class="">'+totalTreesPlanted+'</span> trees';
            }
          }else if(currency == 'USD' && initiativeAlias != 'cauvery-calling'){
            var donationMsg = 'Your Contribution of $ '+customAmt+' will help us to plant '+totalTreesPlanted+' trees';
            var displayDonationMsg = 'Your Contribution of $ <span class="">'+customAmt+'</span> will help us to plant <span class="">'+totalTreesPlanted+'</span> trees';
          }else{
           num = num.replace(".00", " ");
           num = num.replace("₹", " ");
           var donationMsg = "Your contribution of "+num+" "+currency+" for "+numTree+" "+treeVar+" is greatly appreciated";
           var displayDonationMsg = "Your contribution of <span class='dark-black '>"+num+" "+currency+"</span> for <span class='dark-black '>"+numTree+" "+treeVar+"</span> is greatly appreciated";

           if(initiativeAlias == 'cauvery-calling'){
            var displayDonationMsg = "<div class='text'>Your contribution of <span class='dark-black '>"+num+" "+currency+"</span> for <span class='dark-black '>"+numTree+" "+treeVar+"</span> is greatly appreciated</div>";
            var displayDonationMsg = '<div class="title">Total Amount: </div><div class="grand-amt"> <span class="">'+num+'</span> '+currency+'</div>';
          }
            //var displayDonationMsg = '<div class="text">Your contribution of <span class="dark-black"> '+num+'</span> for <span class="dark-black">'+numTree+' '+treeVar+'</span> is greatly appreciated</div>';
          }

          if(isRecurring == 1 && initiativeAlias == 'cauvery-calling')
          {
            $("#display_donation_msg").hide();
            var noOfMonths = document.getElementById('no_of_months').value;
            var dayOfMonth = document.getElementById('dayOfMonth').value;
            var currency = document.getElementById('donation_currency').value;
            if(totalTreeCost > 0 && noOfMonths > 0 && dayOfMonth > 0)
            {
              if(currency == 'INR'){
                currencySymbol = '₹';
              }
              var day = getGetOrdinal(dayOfMonth);
                  // var lastInstallment = getLastInstallmentMonth(noOfMonths, dayOfMonth);

                  var num = totalTreeCost.toLocaleString('en-IN', {
                    style: 'currency',
                    currency: 'INR'
                  });
                  num = num.replace(".00", " ");
                  num = num.replace("₹", "");
                  untilCancelledFlag = $('#until_cancelled_flag').val();
                  if(untilCancelledFlag == 1){
                    donationMsg = diaplayDonationMsg = "Donate "+currencySymbol+" "+num+" monthly on the "+day+" of each month until cancelled by you";
                  }else{
                    var lastInstallment = getLastInstallmentMonth(noOfMonths, dayOfMonth);
                    donationMsg = diaplayDonationMsg = "Donate "+currencySymbol+" "+num+" monthly on the "+day+" of each month until "+lastInstallment+".";
                  }
                  $('#recurring_donation_msg').html(donationMsg);
                  $('#hidden_donation_msg').val(donationMsg);
                }else{
                  $('#recurring_donation_msg').html('');
                  $('#hidden_donation_msg').val('');
                }
              }

              document.getElementById("display_donation_msg").innerHTML=displayDonationMsg;
              document.getElementById("hidden_donation_msg").value = donationMsg;

              if(initiativeAlias == 'cauvery-calling'){
                var hiddenAmount = totalTreeCost;
              }else{
                var hiddenAmount = customAmt;
              }
              document.getElementById("hidden_donation_amount").value = hiddenAmount;

            //document.getElementById("hidden_donation_amount").value = customAmt;
           // var donationTrees = parseInt(customAmt)/parseInt(100);
           if($('#hidden_donation_description').length > 0){
            document.getElementById("hidden_donation_description").value = totalTreesPlanted;
            document.getElementById('gift_custom_amount').style.visibility='visible';
          }
          var currency = document.getElementById('donation_currency').value;

          if(initiativeAlias == 'cauvery-calling'){
            var nf = new Intl.NumberFormat();
            var numTree = nf.format(totalTreeCost);
            if(currency== 'INR')
            {
                //document.getElementById('amount-span').innerHTML = "<span class=''>"+num+"</span> ";
              }
              else
              {
                //document.getElementById('amount-span').innerHTML = "<span class=''>"+num+"</span> "+currency;
              }

            }else{
              if($('#amount-span').length > 0){
                if(currency == 'INR'){
                 document.getElementById('amount-span').innerHTML = "₹ &nbsp; <span class=''>"+customAmt+"</span>";
               }else if(currency == 'USD'){
                 document.getElementById('amount-span').innerHTML = "$ &nbsp; <span class=''>"+customAmt+"</span>";
               }
             }
           }

         }
         return isSuccess;
       }
     });

function disableRadio(){
 $(".donation_trees").prop("checked", false);
}

function Count(){
  var text_max = 200;
  var i = document.getElementById("txt_question").value.length;
  var text_remaining = text_max - i;
  if(text_remaining < 0){
    $('#message_input').addClass('error');
    $('#message_error_msg').html('Message Length Exceeds');
    return false;
  }else{
    $('#message_error_msg').empty();
    $('#message_input').removeClass('error');
    document.getElementById("textarea_feedback").innerHTML = text_remaining + ' /200';
  }
}

/************ Gift A Tree functions ends here***********/



$('.select-drop .option .value').on('click', function(){
  $(this).parents('.select-drop').find('.selected').html($(this).find('span').text());
});


$(".select-drop .selected").click(function(e) {
  $('.select-drop .option').not($(this).parent().find('.option')).hide();
  $(this).parent().find('.option').toggle();
  $(this).parent().toggleClass('active');
});
$(".select-drop .option").click(function(e) {
    //return false;
  });
$(document).mouseup(function(e) {
  if($(e.target).parent(".selected").length==0) {
    $('.select-drop .option').hide();
    $('.select-drop').removeClass('active');
  }
});


//Offline Donation Form validation:-
function chkValidOfflineDonation(){
  validateFirstName('offline_first_name','offline_first_name_input','offline_first_name_error_msg');
  validateLastName('offline_last_name','offline_last_name_input','offline_last_name_error_msg');
  validateEmail('offline_email','offline_email_id_input','offline_email_id_error_msg');
  validatePhoneNo('offline_contact','offline_contact_input','offline_contact_error_msg');
}

function offlineDonationValidate(){
  showLoader();
      isError = 0; // set no errors
      chkValidOfflineDonation(); // validate  all fields

      if(isError == 1){
        hideLoader();
        return false;
      }else if(isError == 0){
        return true;
      }else{
        hideLoader();
        return false;
      }
    }

    function stateSelect(ev){
      var state = $(ev).text();
      $('#selected_state').text(state);
    }

    function closeOfflineDonation(){
      $('#offline-donate-form').hide();
    }

    $(".banner .img-slot .img .banner-info .button.primary").click(function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $('#cont').offset().top
      }, 100);

   //jQuery("#cont").animate({ scrollTop: 0 }, 100);
 });

    /******** campaign donation starts here **********/

    function hideDivsCampaign(uniqueKey){
      var initiativeName = document.getElementById('initiative_name').value;
      var uri = window.location.toString();
      if (uri.indexOf("?") > 0) {
        var clean_uri = uri.substring(0, uri.indexOf("?"));
        window.history.replaceState({}, document.title, clean_uri);
      }
      var paymentType = document.getElementById('payment_type').value;
      if(document.getElementById("error_donation_msg").innerHTML!= "") {
        $('html, body').animate({
          scrollTop: $('#donation_title').offset().top
        }, 3500);

        fadeOutEffect('error_donation_msg');
      }
      if(paymentType == 'online'){
        var donateStep = document.getElementById('hidden_donation_step').value;
        if(donateStep == 1){
          var defaultAmount = document.getElementById("default_amount").value;
          document.getElementById("hidden_donation_amount").value = defaultAmount;
        }else if(donateStep == 2){
          $('html, body').animate({
            scrollTop: $('#donation_title').offset().top
          }, 500);

          document.getElementById("selected_state").disabled = true;
                //document.getElementById('show_address_msg').style.display='block';
                document.getElementById('donation_message').style.display='none';
                document.getElementById('pancard_input').style.display = "none";
                $("#selected_country option[value='IN']").show();

                /* this code is used to display donation message for pgh */
                if(initiativeName != "isha-vidhya"){
                  var selectedDonationCurrency = document.getElementById('hidden_donation_currency').value;
                  var amount = document.getElementById('hidden_donation_amount').value;
                  if(initiativeName == 'cauvery-calling'){
                    $('#donation_message').html('');
                  }else{
                    if(selectedDonationCurrency == 'USD'){
                      var fromCurrencyValue = document.getElementById('from_currency_value').value;
                      var convertedAmount = amount * fromCurrencyValue;
                      convertedAmount = Math.ceil(convertedAmount);
                      var changedDonationMsg = 'We have converted your donation amount of ' + amount +
                      ' US Dollars (USD) to ' +convertedAmount+' Indian Rupees (INR). You will see this INR value in your receipt and the payment screens.';
                      document.getElementById('donation_message').innerHTML = changedDonationMsg;
                      document.getElementById('donation_message').style.display='block';
                      document.getElementById('hidden_donation_msg').value = changedDonationMsg;
                    }else{
                      $('#donation_message').html($('#hidden_donation_msg').val());
                      $('#donation_message').show();
                    }
                  }
                }else{
                  $('#donation_message').html($('#hidden_donation_msg').val());
                  $('#donation_message').show();
                }
                /* this code is used to display donation message for pgh */

              }else if(donateStep == 3){
                $('html, body').animate({
                  scrollTop: $('#donation_title').offset().top
                }, 500);
              }
            }
          }

          function loadGatwayData(gatewayType,url){
            if(gatewayType == 2){
              var orderId = document.getElementById('order_id').value;
              var language = $('#lang').val();
              var initiativeName = $('#initiative').val();
              var paymentStatus = document.getElementById('payment_status').value;


              if(orderId!=0 && orderId !=null && paymentStatus  == 'success'){

                showLoader();
                $('.head').hide();
                $('.access-point').hide();
                $('.text').html('Your Transaction is Processing......');

                setInterval(function() {
                  $.ajax({
                   url: url,
                   type:'get',
                   data: {order_id : orderId},
                   dataType:'json',
                   success:function(resp){
                    if(resp.payment_type == 'Complete' || resp.payment_type == 'Failure' || resp.payment_type == 'success'|| resp.payment_type == 'Success' || resp.payment_type == 'Failed'){
                      hideLoader();
                      $('.head').show();
                      $('.title').html('Thank You...');
                      $('.access-point').show();
                      $('.text').html(resp.thankyou_msg);
                      $('#order_id').val(0);
                    }
              //console.log(JSON.stringify(resp));
            }
          });
                },5000);

              }
            }
          }

          function changeContactNoLength(){
            $('#contact_no').val('');
            var country = document.getElementById('country_code');
            var countryCode = country.options[country.selectedIndex].value;
            if(countryCode == 91){
              $('#contact_no').attr('maxlength','10');
              $('#contact_no').attr('minlength','10');
            }else{
              $('#contact_no').attr('maxlength','15');
              $('#contact_no').attr('minlength','6');
            }
          }

          function hideIshaDivs(uniqueKey) {
    //changeIvAmountBlock();
    var uri = window.location.toString();
    var initiativeImgPath = document.getElementById("initiative_wise_assets_path").value;
    if (uri.indexOf("?") > 0) {
      var clean_uri = uri.substring(0, uri.indexOf("?"));
      window.history.replaceState({}, document.title, clean_uri);
    }
    if ($('#donate_process').hasClass('step-1') == true) {
      $(".donate-stepo").empty();
      $(".donate-stepo").html('<div class="title">Step 1 of 4 : <span>Donation</span></div>');
    }
    if($('#donate_for').length > 0){ 
    var donateFor = $('#donate_for').val();
      if(donateFor != 'donate-1'){
        $('.currency_img').replaceWith('<img src="' + initiativeImgPath + '/img/black-rupee.svg" class="rupe currency_img">');
      }
    }

    $('.rupe_icon').replaceWith('<img src="' + initiativeImgPath + '/img/black-rupee.svg" class="rupe-icon rupe_icon">');
    //$(".ed-block .currency_INR").addClass('div-count-inr');

    if ($('#donation_for').length > 0) {

      if (document.getElementById("error_donation_msg").innerHTML != "") {
        $('html, body').animate({
          scrollTop: $('#donation_title').offset().top
        }, 500);

        fadeOutEffect('error_donation_msg');
      }
    }
    var paymentType = document.getElementById('payment_type').value;
    if (paymentType == 'online') {
      var donateStep = document.getElementById('hidden_donation_step').value;
      document.getElementById('offline-donate-form').style.display = 'none';

      if (donateStep == 1) {
        var initiativeName = document.getElementById('initiative').value;

        $('html, body').animate({
          scrollTop: $('#donation_title').offset().top
        }, 500);
        var currency = document.getElementById('donation_currency').value;
            // var currency = $('#donation_currency').val();
            $('.grand-amt').html(0);
            console.log(currency);

            //$('.currency-blocks').hide();
            $('.currency_' + currency).show();
            var donationMsg = document.getElementById("default_donation_msg").value;
            var defaultAmount = document.getElementById("default_amount").value;
            //  document.getElementById("display_donation_msg").innerHTML=donationMsg;
            document.getElementById("hidden_donation_msg").value = donationMsg;
            document.getElementById("hidden_donation_amount").value = defaultAmount;
            document.getElementById("hidden_donation_currency").value = currency;
            /*this part is used to hide multiple amount blocks(isha-vidhya) */
            var donationId = document.getElementById("donation_id").value;
            if (donationId != 0) {
                // var externalUrl = document.getElementById("donate_redirect_url_"+donationId).value

                $('#display_donation_msg').show();
                $('.currency').show();
                if (currency == 'INR') {
                  $('.rupees').html('₹');
                  $('.rupes').html('₹');
                    //$('.hido-amt').html('<span class="hido hido-amt"><img class="rupes">₹ Other Amount</span>');
                  } else if (currency == 'USD') {
                    $('.rupees').html('$');
                    $('.dolar-icons').html('$');
                  }
                // ivCurrencySelectedData('.currency_'+currency);
                $('#donation_for_' + donationId).show();
                //$('.ammount-block').hide();
              }
              if ($('.donate-toward').length > 0) {
                $('#display_donation_msg').hide();
                $('.currency').hide();
                $('.ammount-block').hide();

                var selectedDonationFor = document.getElementById("donation_for").options[document.getElementById("donation_for").selectedIndex].text;
                var selectedDonationForId = document.getElementById("donation_for").options[document.getElementById("donation_for").selectedIndex].value;
                if (selectedDonationForId > 0) {
                  changeAmountBlock(selectedDonationForId);
                }
              }

              if ($('.currency_' + currency).length <= 0) {
                $('#display_donation_msg').html('');
                $('#hidden_donation_msg').val('');
                $('#hidden_donation_amount').val('');
                $('#amt-block').addClass('amt-block');
              }

            } else if (donateStep == 2) {
              $('.offline-donate').hide();
              $('html, body').animate({
                scrollTop: $('#donation_title').offset().top
              }, 500);
              document.getElementById('donation_message').innerHTML = '';
              var selectedDonationCurrency = document.getElementById('hidden_donation_currency').value;
              var amount = document.getElementById('hidden_donation_amount').value;
              if(selectedDonationCurrency == 'INR'){
                var currencySymbol = '₹';
              }else if(selectedDonationCurrency == 'USD'){
                var currencySymbol = '$';
              }
              document.getElementById('donation_message').innerHTML ='Your Contribution of '+currencySymbol+' '+amount+' is greatly appreciated';
              document.getElementById("selected_state").disabled = true;
              document.getElementById("banner").style.display = "none";
              document.getElementById("donation_summary").style.display = "none";
              document.getElementById("donation_title").innerHTML = document.getElementById("hidden_donation_title").value;

              document.getElementById('show_address_msg').style.display = 'none';
              document.getElementById('pancard_input').style.display = "none";
              $("#selected_country option[value='IN']").hide();

              /* this code is used to display donation message for pgh */
              var initiativeName = document.getElementById('initiative').value;
              if (initiativeName == "project-greenhands") {
                var selectedDonationCurrency = document.getElementById('hidden_donation_currency').value;
                var amount = document.getElementById('hidden_donation_amount').value;
                if (selectedDonationCurrency == 'USD') {
                  var fromCurrencyValue = document.getElementById('from_currency_value').value;
                  var convertedAmount = amount * fromCurrencyValue;
                  convertedAmount = Math.ceil(convertedAmount);
                  var changedDonationMsg = 'We have converted your donation amount of ' + amount +
                  ' US Dollars (USD) to ' + convertedAmount + ' Indian Rupees (INR). You will see this INR value in your receipt and the payment screens.';
                  document.getElementById('donation_message').innerHTML = changedDonationMsg;
                  document.getElementById('hidden_donation_msg').value = changedDonationMsg;
                } else {
                  $('#donation_message').html($('#hidden_common_donation_msg').val());
                  $('#hidden_donation_msg').val($('#hidden_common_donation_msg').val());
                }
              }
              /* this code is used to display donation message for pgh */

            } else if (donateStep == 3) {
              $('.offline-donate').hide();
            }

            /*this part is used to hide multiple amount blocks(isha-vidhya) */
            var donationSteps = document.getElementById("donate_process");
            if (uniqueKey == 'isha_post') {
              var banner = document.getElementById("banner");
              banner.parentNode.removeChild(banner);

              var donationSummary = document.getElementById("donation_summary");
              donationSummary.parentNode.removeChild(donationSummary);

              donationSteps.classList.remove("step-1");
              donationSteps.classList.add("step-3");

            } else if (uniqueKey == 'isha_payment_gateway') {
              donationSteps.classList.remove("step-1");
              donationSteps.classList.add("step-4");
            }
          }

          if (paymentType == 'offline') {
            document.getElementById('offline-donate-form').style.display = 'block';
            fadeOutEffect('offline_error_msg');
          }
        }


        function ivCurrencySelectedData(currencyLoop) {
          var currency = document.getElementById('donation_currency').value;
          $(currencyLoop).each(function(index) {
            var donationType = document.getElementById('donation_type').value;
            if (donationType == 0) {
              if (index === 2) {

                document.getElementById($(this).find('.donation_amount').attr('id')).checked = true;
                document.getElementById("hidden_donation_amount").value = document.getElementById($(this).find('.donation_amount').attr('id')).value;

              } else if (index === 0) {
                document.getElementById($(this).find('.donation_amount').attr('id')).checked = true;
                document.getElementById("hidden_donation_amount").value = document.getElementById($(this).find('.donation_amount').attr('id')).value;

              }
            }

          });
        }


//=============ISha vidya designer js===================
$(document).ready(function() {
  $('#num_value').val('0');
  var donationForId = $("#donation_for_id").val();
  if (window.innerWidth <= 768) {
    $("#show_total_amount_" + donationForId).removeClass('show');
  }

});


if (window.innerWidth <= 768) {

  $('.cash').on('click', function(e) {
    if ($(this).hasClass('show')) {
      $(this).parents('.ed-block').find('.no-children, .amount-block').hide();
      $(this).removeClass('show');
    } else {
      $('.ed-block .no-children, .amount-block').hide();
      $('.ed-block .total-amount .cash').removeClass('show');
      $(this).parents('.ed-block').find('.no-children, .amount-block').show();
      $(this).addClass('show');
    }

        //$('.no-children').show();
      });

}
//===================isha vidya designer js end here===================

//========================================================================
//ISHA vidya new js start here
//========================================================================

$(document).ready(function() {
    /* donationCurrency = document.getElementById("donation_currency").value;
    if(donationCurrency == 'INR'){*/
    // $('.currency_'+donationCurrency).show();
    $('.currency_USD').hide();
    $('.rupe').html('₹');

      if($('#donate_for').length > 0){ 
     var donate_for = $('#donate_for').val();
    if(donate_for === 'donate-1'){
       $('#main-amount-div').css('display', 'block');
       $('#donate_msg_iv').css('display', 'block');
       changeIvAmountBlock();
    }
  }
   
    //}
    //$('.currency_'+changeCurrency).show();
  });

function changeIvAmountBlock() {
  donationCurrency = document.getElementById("donation_currency").value;
  initiativeImgPath = document.getElementById("initiative_wise_assets_path").value;

  var lang = $('#lang').val();
  var initiative_alias = $('#initiative_name').val();

  if($('#donate_for').length > 0){ 
    var donate_for = $('#donate_for').val();
    var donation_type = $('#donation_type').val();
    
    var campaign_alias = $('#campaign_alias').val();
    if(donation_type == '0'){
       if(donate_for == 'donate-1'){
           var display = 'none';
           var url = "/"+lang+"/"+initiative_alias+"/donate";
     }else{
        var display = 'block';
        var url="/"+lang+"/"+initiative_alias+"/donate-1";
     }
 }else if(donation_type == '3'){
   if(donate_for == 'donate-1'){
           var display = 'none';
           var url = "/"+lang+campaign_alias+"/donate";
     }else{
        var display = 'block';
        var url = "/"+lang+campaign_alias+"/donate-1";
     }
 }
}

    //Reset all values below
    $(".count-value").html(0);
    $(".cash").html(0);
    $("#chkbox_loop_total").val(0);
    $("#hidden_final_amount").val(0);
    $("#grand_amt").html(0);
    $("#all_grand_total").val(0);
    $(".addition").data('id', 0);
    $(".substract").data('id', 0);
    $(".donation_custom_amount").val('');
    $("#error_donation_grand_total").html('');

    if (donationCurrency == 'INR') {
      changeCurrency = 'USD';
      $('#donate_msg_iv').html('If you are NOT a US resident please <a class="click-btn"  href="'+url+'">click here</a>');
      $('.currency_' + donationCurrency).hide();
      $('.currency_' + changeCurrency).show();
      $('.currency_img').replaceWith('<img src="' + initiativeImgPath + '/img/dollar-icon.svg" class="dolar-icon currency_img">');
      $('.rupees_icon').replaceWith('<label class="rupees_icon"> $ </label>');
      $('.curr_img').replaceWith('<img src="' + initiativeImgPath + '/img/dollar-icon.svg" class="usa-dolar curr_img">');
        //$('.rupes').replaceWith('<img src="'+initiativeImgPath+'/img/dollar-icon.svg" class="dolar-icon">');
        $('.dolar-icon').css('display', 'block');
        $('.usa-dolar').css('display', 'block');
        //$('.rupes').html('$');
        $('#hidden_donation_currency').val(changeCurrency);
        $('.access-point').removeClass("error");
        ///$('.hido-amt').html('<img src='+initiativeImgPath+'/img/dollar-icon.svg class="dolar-icon"> Other Amount');
      } else if (donationCurrency == 'USD') {
        changeCurrency = 'INR';
        $('.currency_' + changeCurrency).show();
        $('#donate_msg_iv').html('If you are a US resident, please <a class="click-btn"  href="'+url+'">click here</a>');
        $('.currency_' + donationCurrency).hide();
        $('.currency_img').replaceWith('<img src="' + initiativeImgPath + '/img/black-rupee.svg" class="rupe currency_img">');
        $('.rupees_icon').replaceWith('<label class="rupees_icon"> ₹ </label>');
        $('.curr_img').replaceWith('<img src="' + initiativeImgPath + '/img/black-rupee.svg" class="rupes curr_img">');
        //$('.rupes').replaceWith('<img src="'+initiativeImgPath+'/img/black-rupee.svg" class="rupes">');
        //$('.rupe').html('₹');
        //$('.rupes').html('₹');
        $('.dolar-icon').css('display', 'block');
        console.log($('.dolar-icon').length);
        $('#hidden_donation_currency').val(changeCurrency);
        $('.access-point').removeClass("error");
        //$('.hido-amt').html('<img src='+initiativeImgPath+'/img/black-rupee.svg class="rupes"> Other Amount');
      }

      $('#donation_currency').val(changeCurrency);

    $('label.amount').each(function(){ //to unset selected input box on click here
      if(document.getElementById($(this).find('input').attr('id')).checked == true){
        document.getElementById($(this).find('input').attr('id')).checked = false;
      }
    });
  }


//onclick add button
function addAmount(donateFor) {
  var grandAmt = $("#total_amount_donation").val();
  var donationCurrency = document.getElementById("donation_currency").value;
    //var donationAmt = $('#hidden_donation_amount_'+donateFor).val();
    var currentCurrency = $("#hidden_donation_currency").val();
    var donationAmt = $('.currency_' + currentCurrency).find('#hidden_donation_amount_' + donateFor).val();
    var addData = $("#addition_" + donateFor).data('id'); //getter
    var setData = parseInt(addData) + 1;
    /* console.log(addData+"addData");
     console.log(setData+"setData");
     console.log(currentCurrency+"currentCurrency");*/


    $("#addition_" + donateFor).data('id', setData); //setter
    var totalAmt = donationAmt * setData;
    $(".currency_" + currentCurrency).find('#count_value_' + donateFor).text(setData);
    $(".currency_" + currentCurrency).find('#show_total_amount_' + donateFor).text(totalAmt);

    // $('#count_value_'+donateFor).text(setData);
    //$('#show_total_amount_'+donateFor).html(totalAmt);

    //==============Grand Total================
    var total_amount = 0;
    var amount = 0;
    var total_no_donations = $('#total_div_of_donation').val(); //div count upper loop
    var grandTotal = $('#all_grand_total').val();
    for (i = 1; i <= total_no_donations; i++) {
      console.log(totalAmt);
      amount = $('.sub_total_' + i).html();
      amount = parseInt(amount);
      total_amount += parseInt(amount);
    }

    $('#all_grand_total').val(total_amount);
    if ($('#chkbox_loop_total').val() != '') {
      total_amount = parseInt(total_amount) + parseInt($('#chkbox_loop_total').val());
    }
    var from_currency_value = $('#from_currency_value').val();
    var is_mobile = $('#is_mobile').val();
    if(from_currency_value != "" && total_amount != '0'){
      if(donationCurrency != 'INR'){
        $('#grand_amt').html(total_amount); 
      }else{
       from_currency_value = total_amount/from_currency_value;
       from_currency_value = from_currency_value.toFixed(2);
       if(is_mobile != '1'){
        $('#grand_amt').html(total_amount+" ($"+from_currency_value+" Approx.)");
      }else{
        $('#grand_amt').html(total_amount+"<br> ($"+from_currency_value+" Approx.)");
      }


    }

  }else{
    $('#grand_amt').html(total_amount);
  }
    $('#hidden_final_amount').val(total_amount);


    //To hide error message:
    if(total_amount > 0){
      $('.access-point').removeClass("error");
      $("#error_donation_grand_total").html('');
    }

  }


//onclick substract button
function subAmount(donateFor) {
  var donationCurrency = document.getElementById("donation_currency").value;
  var donationAmt = $("#show_total_amount_" + donateFor).html();
    //var donationForAmt = $('#hidden_donation_amount_'+donateFor).val();
    var currentCurrency = $("#hidden_donation_currency").val();
    var donationForAmt = $('.currency_' + currentCurrency).find('#hidden_donation_amount_' + donateFor).val();
    var addData = $(".currency_" + currentCurrency).find('#count_value_' + donateFor).text(); //getter
    // console.log(addData+" addData");
    if (addData == 0 && addData <= 0) {
      return false;
    }

    var setData = parseInt(addData) - 1;
    var totalAmt = donationForAmt * setData;

    $("#substract_" + donateFor).data('id', setData); //setter //reset values
    $("#addition_" + donateFor).data('id', setData); //reset values
    $(".currency_" + currentCurrency).find('#count_value_' + donateFor).text(setData);
    $(".currency_" + currentCurrency).find('#show_total_amount_' + donateFor).text(totalAmt);

    //==========================================
    var total_amount = 0;
    var total_no_donations = $('#total_div_of_donation').val();
    var grandTotal = $('#all_grand_total').val();
    var amount = 0;
    for (i = 1; i <= total_no_donations; i++) {
      amount = $('.sub_total_' + i).html();
      amount = parseInt(amount);
      total_amount += parseInt(amount);
    }

    $('#all_grand_total').val(total_amount);

    if ($('#chkbox_loop_total').val() != '') {
      total_amount = parseInt(total_amount) + parseInt($('#chkbox_loop_total').val());
    }
    var from_currency_value = $('#from_currency_value').val();
    var is_mobile = $('#is_mobile').val();
    if(from_currency_value != "" && total_amount != '0'){
     if(donationCurrency != 'INR'){

      $('#grand_amt').html(total_amount); 
    }else{
     from_currency_value = total_amount/from_currency_value;
     from_currency_value = from_currency_value.toFixed(2);
     if(is_mobile != '1'){
      $('#grand_amt').html(total_amount+" ($"+from_currency_value+" Approx.)");
    }else{
      $('#grand_amt').html(total_amount+"<br> ($"+from_currency_value+" Approx.)");
    }
  }
}else{
  $('#grand_amt').html(total_amount);
}
    $('#hidden_final_amount').val(total_amount);
  }



  function donationAmountIV(id, donationForId, key, key1) {
    var donationCurrency = document.getElementById("donation_currency").value;
    $('.access-point').removeClass("error");
    $("#error_donation_grand_total").html('');
    var initiativeImgPath = document.getElementById("initiative_wise_assets_path").value;
    var currentCurrency = $("#hidden_donation_currency").val();

    var customAmt = $('#custom_amount_' + donationForId).val();
    $('#custom_amount_'+donationForId).removeClass('active');
    console.log('customAmt='+customAmt);
    $('#amount_input_' + donationForId).prop("checked", false);
    $(".amount_" + donationForId).css("background-color", "");

    if(currentCurrency == "INR"){
      $('.amount_' + donationForId).html('<span class="hido hido-amt amount_'+donationForId+'"><img src="' + initiativeImgPath + '/img/black-rupee.svg" class="rupes curr_img"> Other Amount</span>');
    }else{
      $('.amount_' + donationForId).html('<span class="hido hido-amt amount_'+donationForId+'"><img src="' + initiativeImgPath + '/img/dollar-icon.svg" class="usa-dolar curr_img"> Other Amount</span>');
    }
    var selectedAmt = parseInt($("#" + id).val());
    console.log('selectedAmt='+selectedAmt);
    //For Mobile Only//
    var mobile_amount = $('#select_amt_' + donationForId + '_' + key).html();
    var mobile_amount = mobile_amount.replace('<img class="rupe">₹', '');
    var mobile_amount = mobile_amount.replace('<img class="rupe">$', '');
    $('#mobile-amt_' + key1).html(mobile_amount);
    // $('#select_amt_'+donationForId+'_'+key).closest('#mobile-amt').html(mobile_amount);
    //$("#mobile-amt_"+key).find($("#"+id)).html(selectedAmt);
    //$('#mobile-amt_'+key).html(selectedAmt);

    if (customAmt != '') {
      $('#custom_amount_' + donationForId).val('');
        //$('input#custom_amount_'+donationForId).blur();
        //$('#custom_amount_'+donationForId).css('background-color','');
        //$('#custom_amount_'+donationForId).focusout();
        //document.getElementById('custom_amount_'+donationForId).focusout;
      }

    //=============Code for check box addition========================
    var ar = [];
    $('.amount').each(function() {
      var xid = $(this).find('input')[0];

      var inputId = $(xid).attr('id');
      $('#' + inputId).removeClass('active');

      if (document.getElementById($(xid).attr('id')) != null) {

        if (document.getElementById($(xid).attr('id')).checked == true) {

          var id = $(xid).attr('id');
          if ($('#' + id).hasClass('active')) {
            $('#' + id).removeClass('active');
          }

          $('#' + id).addClass('active');
          ar.push(document.getElementById($(xid).attr('id')).value);

        }
      }

    });

    //=========To remove "on" word from total===============
    var total = ar.reduce(function(acc, val) {
     if(val=='on'){
      var val = 0;
      return parseInt(acc) + parseInt(val);
    }else if(acc=='on'){
      var acc = 0
      return parseInt(acc) + parseInt(val);
    }else{
      return parseInt(acc) + parseInt(val);
    }
  });


    $('#chkbox_loop_total').val(total);
    //===============Code for check box addition End here===================================

    var total_amount = $('#all_grand_total').val();
    total_amount = parseInt(total) + parseInt(total_amount);

    if (Number.isNaN(total_amount)){
     total_amount = 0;
   }

   var from_currency_value = $('#from_currency_value').val();
   var is_mobile = $('#is_mobile').val();
   if(from_currency_value != "" && total_amount != '0'){
     if(donationCurrency != 'INR'){
      $('#grand_amt').html(total_amount); 
    }else{
     from_currency_value = total_amount/from_currency_value;
     from_currency_value = from_currency_value.toFixed(2);
     if(is_mobile != '1'){
      $('#grand_amt').html(total_amount+" ($"+from_currency_value+" Approx.)");
    }else{
      $('#grand_amt').html(total_amount+"<br> ($"+from_currency_value+" Approx.)");
    }
  }
}else{
 $('#grand_amt').html(total_amount);
}

   
    $('#hidden_final_amount').val(total_amount);

   
   }

   function customAmountValue(id, donateForId, val, key) {

    var donationCurrency = document.getElementById("donation_currency").value;
    $('.access-point').removeClass("error");
    $("#error_donation_grand_total").html('');

    $('#chkbox_loop_total').val(0);
    $('#custom_amount_'+donateForId).addClass('active');
    var selectedAmount = $("#custom_amount_" + donateForId).val();
    var xx = "amount_input_" + donateForId;
    document.getElementById(xx).value = val;

  /*  $('label.currency-blocks').each(function(){ //currency_donation_for_INR_91
        console.log(11);
        // if(document.getElementById($(this).find('input').attr('id')).checked == true){
        //      var val = document.getElementById($(this).find('input').attr('id')).value;
        //      console.log(val);
        //     //document.getElementById($(this).find('input').attr('id')).checked = false;
        // }
      });*/

      var ar = [];
      $('.amount').each(function() {
        var xid = $(this).find('input')[0];

        var inputId = $(xid).attr('id');
        $('#' + inputId).removeClass('active');

        if (document.getElementById($(xid).attr('id')) != null) {
          if (document.getElementById($(xid).attr('id')).checked == true) {

            var id = $(xid).attr('id');
            if ($('#' + id).hasClass('active')) {
              $('#' + id).removeClass('active');
            }
            $('#' + id).addClass('active');
            $("#select_amt_" + donateForId).html("");

            ar.push(document.getElementById($(xid).attr('id')).value);

          }
        }

      });

      var total = ar.reduce(function(acc, val) {
        if(val =='' ||  val==undefined){
          console.log(11);
          var val = 0;
          return parseInt(acc) + parseInt(val);
        }else if(acc =='' ||  acc==undefined){
          console.log(22);
          var acc = 0;
          return parseInt(acc) + parseInt(val);
        }else{
          console.log(33);
          return parseInt(acc) + parseInt(val);
        }
      });
      $('#mobile-amt_' + key).html(selectedAmount);
    //console.log(total + "hththt");

    $('#chkbox_loop_total').val(total);
    //$('#custom_amt_loop_total').val(total);
    //===============Code for check box addition End here===================================
    /*
      var total_amount = $('#all_grand_total').val();
      total_amount = parseInt(total) + parseInt(total_amount);
      $('#grand_amt').html(total_amount);
      $('#hidden_final_amount').val(total_amount);
      */
    /* var customAmt = $("#"+id).val();
     // console.log(customAmt+ "============"+ id);
     if(customAmt != ''){
       $(".amount_"+donateForId).html(customAmt);
       $(".amount_"+donateForId).css("background-color","#d06b11");
     }*/

     var total_amount = $('#all_grand_total').val();
     total_amount = parseInt(total) + parseInt(total_amount);
    if (Number.isNaN(total_amount)){
       total_amount = 0;
     }
     var from_currency_value = $('#from_currency_value').val();
     var is_mobile = $('#is_mobile').val();
     if(from_currency_value != "" && total_amount != '0'){
      if(donationCurrency != 'INR'){
        $('#grand_amt').html(total_amount); 
      }else{
       from_currency_value = total_amount/from_currency_value;
       from_currency_value = from_currency_value.toFixed(2);
       if(is_mobile != '1'){
        $('#grand_amt').html(total_amount+" ($"+from_currency_value+" Approx.)");
      }else{
        $('#grand_amt').html(total_amount+"<br> ($"+from_currency_value+" Approx.)");
      }
    }

  }else{
    $('#grand_amt').html(total_amount);
  }
    $('#hidden_final_amount').val(total_amount);
    //console.log($('#hidden_final_amount').val() + "total_amount");return;

  }

  function setIvCustomAmount(id) {
    var donationCurrency = document.getElementById("donation_currency").value;
    $('#chkbox_loop_total').val(0);
    $('#custom_amount_'+id).addClass('active');
    document.getElementById('custom_amount_' + id).focus();
    $(".donation_amount_" + id).removeClass('active');
    $(".donation_amount_" + id).prop("checked", false);
    var radioValue = $("input[id=radio_amount]:checked").val();
    if (radioValue) {
      $('#custom_amount_' + id).val('');
      $('#hidden_donation_amount_' + id).val('');

    }

    var selectedAmount = $("#custom_amount_" + id).val();
    var xx = "amount_input_" + id;
    document.getElementById(xx).value = 0;



    var ar = [];
    $('.amount').each(function() {
      var xid = $(this).find('input')[0];

      var inputId = $(xid).attr('id');
      $('#' + inputId).removeClass('active');

      if (document.getElementById($(xid).attr('id')) != null) {
        if (document.getElementById($(xid).attr('id')).checked == true) {

          var id = $(xid).attr('id');
          if ($('#' + id).hasClass('active')) {
            $('#' + id).removeClass('active');
          }
          $('#' + id).addClass('active');
          $("#select_amt_" + id).html("");

          ar.push(document.getElementById($(xid).attr('id')).value);

        }
      }

    });

    var total = ar.reduce(function(acc, val) {
      if(val =='' ||  val==undefined){
        var val = 0;
        return parseInt(acc) + parseInt(val);
      }else if(acc =='' ||  acc==undefined){
       var acc = 0;
       return parseInt(acc) + parseInt(val);
     }else{
       return parseInt(acc) + parseInt(val);
     }
   });
    var allGrandTotal = $('#all_grand_total').val();
    total_amount = parseInt(allGrandTotal) + parseInt(total);
    if (Number.isNaN(total_amount)){
     total_amount = 0;
   }
   var from_currency_value = $('#from_currency_value').val();
   var is_mobile = $('#is_mobile').val();

   if(from_currency_value != "" && total_amount != '0'){
    if(donationCurrency != 'INR'){
      $('#grand_amt').html(total_amount); 
    }else{
     from_currency_value = total_amount/from_currency_value;
     from_currency_value = from_currency_value.toFixed(2);
     if(is_mobile != '1'){
      $('#grand_amt').html(total_amount+" ($"+from_currency_value+" Approx.)");
    }else{
      $('#grand_amt').html(total_amount+"<br> ($"+from_currency_value+" Approx.)");
    }
  }

}else{
  $('#grand_amt').html(total_amount);
} 
    $('#hidden_final_amount').val(total);
  }

  function customAmountReset(id) {
    var customAmt = $('#' + id).val();
    if (customAmt != 0) {
      var customAmt = $("#" + id).val('');
    } else {
      var customAmt = $("#" + id).val();
    }
  }

  function currencyConversion(amount) {
    if (amount != '') {
      var currentCurrency = $("#hidden_donation_currency").val();
      if (currentCurrency != '' && currentCurrency == 'INR') {
        return parseInt(amount);
      } else if (currentCurrency != '' && currentCurrency == 'USD') {
        var current_rate = 68.86;
        amount = parseInt(amount) * parseFloat(current_rate);
        amount = Math.ceil(amount);
        return amount;
      }
    }
  }


//==========================================================
function continuePaymentForIV() {
  isError = 0;
    /*if($('#donation_for').length > 0){
     if($('#donation_for').val() == ''){
       $('#error_donation_msg').html('Please select donate towards');
       return false;
     }else{
       $('#error_donation_msg').html();
     }
   }*/
    //var totalArr = $('.ed-title').html();

    // if($('#grand_amt').length < 0){ console.log($('#grand_amt').length);return;


    //  }


    var total_no_donations = $('#total_div_of_donation').val(); //div count upper loop
    var currentCurrency = $('#hidden_donation_currency').val(); //div count upper loop
    var usd_divs_count = parseInt($('#usd_divs_count').val());
    var inr_divs_count = parseInt($('#india_divs_count').val());
    var inr_chk_divs_count = parseInt($('#inr_chkbox_div_count').val());

    /* var grandTotal = $('#all_grand_total').val();*/
    var amountObj = [];
    if (currentCurrency == "INR") { //console.log("INRRRR");
        //=============For first 4 blocks start==================

        for (var i = 1; i <= inr_divs_count; i++) {
          sub_amount = $('#main-amount-div').find(".total-amount .sub_total_" + i).html();
          noOfChildren = $('#main-amount-div').find(".no-children .no_of_children_" + i).html();
          donate_amount = $('#main-amount-div').find(".ed-block.currency_INR .donation_amount_" + i).val();
          sub_title = $('#main-amount-div').find(".donation_title_" + i).html();
          donate_purpose_id = $('#main-amount-div').find(".donation_title_" + i).attr('inr-titie');
          donate_for = $('#main-amount-div').find(".donation_title_" + i).attr("donate-for");


          if (noOfChildren > 0) {
                /*amountObj.push({
                    "donatePurpose": donate_purpose_id,
                    "fields": [{
                        "amount": donate_amount,
                        "noofChildren": noOfChildren
                    }]
                  });*/

                  amountObj.push({
                    "donatePurpose": donate_purpose_id,
                    "donatePurposeName": donate_for,
                    "amount": donate_amount,
                    "noofChildren": noOfChildren
                  });
                }

              }
        //==========For first 4 blocks End=====================

        //**************For checkbox logic start****************
        for (var k = 0; k <= inr_chk_divs_count; k++) {
          sub_amount1 = $('.newClass_' + k).find('input.active').val();
          if (sub_amount1 == undefined) {
            sub_amount1 = "0";
          }
          sub_title1 = $('#main-amount-div').find(".chk_box_title_" + k).html();
          donate_purpose_id1 = $('#main-amount-div').find(".chk_box_title_" + k).attr('chk-box-attr');
          donate_for_name = $('#main-amount-div').find(".chk_box_title_" + k).attr('chk-donatefor-attr');
          amountObj[donate_purpose_id1] = sub_amount1;
          sub_amount1 = getAmount(sub_amount1);
          custom_amount = $('.custom_amt_'+k).find('input.active').val();

          if(sub_amount1=='' && (custom_amount!==undefined || custom_amount !='')){
            sub_amount1 = custom_amount;
          }

          if (sub_amount1 > 0) {
                /*amountObj.push({ code working
                    "donatePurpose": donate_purpose_id1,
                    "fields": [{
                        "amount": sub_amount1
                    }]
                  });*/

                  amountObj.push({
                    "donatePurpose": donate_purpose_id1,
                    "donatePurposeName": donate_for_name,
                    "amount": sub_amount1
                  });
                }
            //amountObj.push({donate_purpose_id : we_are_fav , fields : [{ amount : sub_amount1}]);
            //amountObj = JSON.stringify(amountObj);
          }

        //**************For checkbox logic end******************

      } else if (currentCurrency == "USD") {

        //for usd logic
        var totalDivs = usd_divs_count + inr_divs_count;
        var startDivs = inr_divs_count + 1;

        for (var i = startDivs; i <= totalDivs; i++) {
          sub_amount = $('#main-amount-div').find(".total-amount .sub_total_" + i).html();
          noOfChildren = $('#main-amount-div').find(".no-children .no_of_children_" + i).html();
          donate_amount = $('#main-amount-div').find(".ed-block.currency_USD .donation_amount_" + i).val();
          donate_purpose_id = $('#main-amount-div').find(".donation_title_" + i).attr('usd-titie');
          sub_title = $('#main-amount-div').find(".donation_title_" + i).html();
          donate_for = $('#main-amount-div').find(".donation_title_" + i).attr("donate-for");

          amountObj[donate_purpose_id] = donate_amount;

            /*amountObj.push( {
                amount: donate_amount,
                noofChildren: noOfChildren,
                donate_purpose_id: donate_purpose_id
              });*/


              if (noOfChildren > 0) {
                /*amountObj.push({ //code working
                    "donatePurpose": donate_purpose_id,
                    "fields": [{
                        "amount": donate_amount,
                        "noofChildren": noOfChildren
                    }]
                  });*/

                  amountObj.push({
                    "donatePurpose": donate_purpose_id,
                    "donatePurposeName": donate_for,
                    "amount": donate_amount,
                    "noofChildren": noOfChildren
                  });
                }
            //amountObj[donate_purpose_id] = sub_amount;
            //amountObj[sub_title] = sub_amount;
          }

        //**************For checkbox logic start****************
        for (var k = 0; k <= inr_chk_divs_count; k++) {
          sub_amount1 = $('.newClass_' + k).find('input.active').val();
          if (sub_amount1 == undefined) {
            sub_amount1 = "0";
          }
          sub_title1 = $('#main-amount-div').find(".chk_box_title_" + k).html();
          donate_for_name1 = $('#main-amount-div').find(".chk_box_title_" + k).attr('chk-donatefor-attr');
          donate_purpose_id1 = $('#main-amount-div').find(".chk_box_title_" + k).attr('chk-box-attr');
          amountObj[donate_purpose_id1] = sub_amount1;
          sub_amount1 = getAmount(sub_amount1);
          custom_amount = $('.custom_amt_'+k).find('input.active').val();

          if(sub_amount1=='' && (custom_amount!==undefined || custom_amount !='')){
            sub_amount1 = custom_amount;
          }

          if (sub_amount1 > 0) {
                /*amountObj.push({
                    "donatePurpose": donate_purpose_id1,
                    "fields": [{
                        "amount": sub_amount1
                    }]
                  });*/

                  amountObj.push({
                    "donatePurpose": donate_purpose_id1,
                    "donatePurposeName": donate_for_name1,
                    "amount": sub_amount1
                  });
                }
              }


        /* amountObj.push( {
             donatePurpose : donate_purpose_id1,
             fields : [{ amount: sub_amount1,}]
           });*/
         }



         $('#hidden_donation_field_arr').val(JSON.stringify(amountObj));


         if ($('#hidden_final_amount').val() == 0 || $('#hidden_final_amount').val() == '' || $('#hidden_final_amount').val() == undefined || $('#hidden_final_amount').val() == 'NaN') {
          $('.access-point').addClass("error");
          $('#error_donation_grand_total').html('Please Enter Some Amount');
          return false;
        } else {
          $('#error_donation_grand_total').html('');
          $('.access-point').removeClass("error");
        //isError = 0;
        // return false;//remove after array print
      }


      var donationId = document.getElementById('donation_id').value;
      var amountType = $("input[name='amount']:checked");
      var currency = document.getElementById('donation_currency').value;
      var grandAmount = parseInt(document.getElementById('grand_amt').innerHTML);

      console.log(grandAmount);
      if ($(amountType).hasClass("radio_custom_amount") || $('.currency_' + currency).length <= 0) {
        var amountValue = $('#custom_amount_' + donationId + '_0').val();

        if (amountValue.length > 0 && amountValue == 0) {
          document.getElementById('invalidAmount_' + donationId).innerHTML = "Amount cannot be 0";
          return false;
        }
        //return false;

        var regExAmtMessage = "Numbers allowed";
        validateField('#custom_amount_' + donationId + '_0', '', '#invalidAmount_' + donationId, regexCustomAmount, 'Enter Amount', regExAmtMessage);
        if (isError == 1) {
          return false;
        }
      }
      var donationFor = document.getElementById('donation_for');
      var selectedDonationFor = '';

    /*if(donationFor != null || donationFor != ''){
        //var selectedDonationFor = document.getElementById("donation_for").options[document.getElementById("donation_for").selectedIndex].text;
      var selectedDonationFor = '';
    }*/

    // var donateRedirecturl = document.getElementById("donate_redirect_url_"+donationId).value;
    /* if(donateRedirecturl!=''){
       window.location.href= donateRedirecturl;
     }else{*/
    // console.log(document.getElementById("hidden_donation_field_arr").value); return;

    var donationType = $("#donation_type").val();

    if(donationType == 3){
      var lang = document.getElementById("lang").value;
      var campaignAlias = document.getElementById("campaign_alias").value;
      var donateUrl = '/'+lang+campaignAlias+'/personal-details';
    }else{
      var donateUrl = window.location.href + '/personal-details';
    }
    
    var donateForm = '<form class="hide" method="post" id="donate_form" name="donate_form" action="' + donateUrl + '">' +
    '<input type="text" name="hidden_donation_amount" value="' + grandAmount + '">' +
    '<input type="text" name="hidden_donation_currency" value="' + document.getElementById('hidden_donation_currency').value + '">' +
        //'<input type="text" name="hidden_donation_msg" value="'+document.getElementById('hidden_donation_msg').value+'">' +
        '<input type="text" name="hidden_donation_for" value="' + selectedDonationFor + '">' +
        '<input type="text" name="hidden_donation_title" value="' + document.getElementById('donation_title').innerHTML + '">' +
        '<input type="text" name="hidden_donate_purpose_id" value="' + document.getElementById("hidden_donate_purpose_id").value + '">' +
        '<input type="text" name="hidden_initiative_short_code" value="' + document.getElementById("initiative_short_code").value + '">' +
        '<input type="text" name="donation_id" value="' + document.getElementById("donation_id").value + '">' +
        //'<input type="text" name="default_amount" value="'+document.getElementById("default_amount").value+'">' +
        '<input type="text" name="hidden_donation_type" value="' + document.getElementById("donation_type").value + '">' +
        "<input type='text' name='hidden_donation_field_arr' id='hidden_donation_field_arr' value='" + document.getElementById("hidden_donation_field_arr").value + "'>" +
        "<input type='text' name='donate-for' value='"+document.getElementById("donate_for").value+"'>";
    if(donationType == 3){ //if campaign donation, 3 - campaign donation
      donateForm += "<input type='text' name='campaign_id' value='"+document.getElementById("hidden_campaign_id").value+"'>" +
      "<input type='text' name='campiagn_name' value='"+document.getElementById("hidden_campaign_name").value+"'>" +
      "<input type='text' name='parent_campaign_id' value='"+document.getElementById("parent_campaign_id").value+"'>";
    }

    donateForm += '</form>';

    donateFormCookie = encodeURI(donateForm);
    storeCookie('donation_post_data='+donateFormCookie);

    $('#main-amount-div').append(donateForm);
    $('#donate_form').submit();
    //}

  }


  function getAmount(amount){
    var url = amount;
    var n = url.lastIndexOf(".");
    url = url.substring(0,n);
    return url;
  }

  $(document).ready(function(){
   $(".allownumericwithoutdecimalIV").on("keypress keyup",function (e) {

    if (this.value.length == 0 && e.which == 48 ){
      return false;
    }
    $(this).val($(this).val().replace(/[^\d].+/, ""));
    if ((e.which < 48 || e.which > 57 )) {

      e.preventDefault();
    }else{
              //if($('#donation_id').length > 0){
               // var donationId = document.getElementById("donation_id").value;
                //document.getElementById('invalidAmount_'+donationId).innerHTML='';
              //}else{
                //document.getElementById('invalidAmount').innerHTML='';
              //}
            }
            /*if($(this).val() === '0'){
                $(this).val('');
           document.getElementById("display_donation_msg").innerHTML='';
                 document.getElementById("hidden_donation_msg").value = '';
               }*/
             });
 });

  function validateTransactionId(){
    var transactionId = $("#transaction_id").val();
    var $lang = $("#lang").val();
    if($lang == 'kn'){
      errorMsg1 = 'ದಯವಿಟ್ಟು ವಹಿವಾಟು ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ';
      errorMsg2 = 'ಸರಿಯಾದ ವಹಿವಾಟು ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ';
      errorMsg3 = 'ಸರಿಯಾದ ವಹಿವಾಟು ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ';
    }else{
      errorMsg1 = 'Please enter your Transaction Ref. No.';
      errorMsg2 = 'Please enter valid Transaction Ref. No.';
      errorMsg3 = 'Enter valid Transaction Ref. No. format';
    }
    if(transactionId == undefined || transactionId == ''){
      $('#transaction_input').addClass('error');
      $("#error_msg").html(errorMsg1);
      return false;
    }else if(transactionId <= 0){
      $('#transaction_input').addClass('error');
      $("#error_msg").html(errorMsg2);
      return false;
    }else if(regexTransactionId.test(transactionId) == false){
      $('#transaction_input').addClass('error');
      $("#error_msg").html(errorMsg3);
      return false;
    }
  }

  function clearErrorMsg(){
    $('#transaction_input').removeClass('error');
    $("#error_msg").html("");
  }

  function submitDonorData(){
    validateTreeCertificateFields();
    if(isSuccessM == false){
      isSuccessM = true;
      return false;
    }
    var fullName = $('#full_name').val();
    var email = $('#email').val();
    var data = {full_name:fullName, email:email}
    var lang = $('#lang').val();
    var initiativeName = $('#initiative').val();
    var url = '/'+lang+'/'+initiativeName+'/donor-certificate-data';
    $.ajax({
     type:'post',
     data: data,
     dataType:'json',
     url: url,
     success:function(resp)
     {
      if(resp=='ok') {
        closeHelpPopup();
        showSuccessPopup();
      }else{
        $('#email_input').addClass('error');
        $("#email_error_msg").html("Something went wrong. please try again!");
      }
    }

  });
  }

  function validateTreeCertificateFields(){
    newFullNameBlur();
    emailBlur();
  }

  function closeHelpPopup(){
    $('#email').val('');
    $('#full_name').val('');
    $('#email_error_msg').html('');
    $('#full_name_error_msg').html('');
    $('#email_input').removeClass('error');
    $('#full_name_input').removeClass('error');
    $('.track-popup').fadeOut();
    $('.black-transparent').fadeOut();
    $('body').css({overflow: 'auto'});
  }

  function newFullNameBlur() {
       if($("#full_name").val() == ''){ //console.log('false fname');
       $('#full_name_input').addClass('error');
       $('#full_name_error_msg').html('Please enter full name');
       isSuccessM = false;
       }else if(regexFullName.test($("#full_name").val()) == false){ //console.log('false fname');
       $('#full_name_input').addClass('error');
       $('#full_name_error_msg').html('Please enter valid name');
       isSuccessM = false;
     }else{
      $('#full_name_error_msg').empty();
      $('#full_name_input').removeClass('error');
    }
  }

  function closeSuccessPopup(){
    $('.black-transparent').fadeOut();
    $('body').css({overflow: 'auto'});
    $('#success_popup').hide();
  }

  function showSuccessPopup(){
    $('#success_popup').show();
    $('.black-transparent').fadeIn();
    $('body').css({overflow: 'hidden'});
  }

  function hideGTLocationDiv(){
    $('#us_canada_country').hide();
  }

  function setErrorStep(step){
    if(errorStepID == ''){
      errorStepID = step;
    }
  }

  $('.citizen-check.agree .citizens-option .citizns-amt .option').click(function(){
    if($(this).hasClass('active')){

    }
    else{
      $('.citizen-check.agree .citizens-option .citizns-amt .option').removeClass('active')
      $(this).addClass('active')
    }
  });

  $('.tax-benefit.agree .citizens-option .citizns-amt .option').click(function(){
    if($(this).hasClass('active')){

    }
    else{
      $('.tax-benefit.agree .citizens-option .citizns-amt .option').removeClass('active')
      $(this).addClass('active')

    }
  });


 $('.tax-benefit.agree .citizens-option .citizns-amt .option, .tax .tax-block .tax-option .tax-amt .option').click(function(){

      if($(this).hasClass('active')){
        //$(this).removeClass('active');

      }
      else{
        $('.tax-benefit.agree .citizens-option .citizns-amt .option, .tax .tax-block .tax-option .tax-amt .option').removeClass('active')
        $(this).addClass('active')
      }
    });

  $('.amount.amt-block.currency-blocks').click(function(){
    $('#amount-span').empty();
  });


  function changePaymentType(){
    var isChecked = $("input[name='freq']:checked").val();
    var currency = $('#donation_currency').val();
    $('#amount-inwords-id').html('');
    $('#hidden_donation_amount').val('');
    $('#error_donation_amt_msg').html('');
    $('#recurring_amount_error_msg').html('');
    var donatePurposeId = $('#hidden_donate_purpose_id').val();
    var isActiveRecurring = $('#is_active_recurring').val();
    var donate_for = $('#donate_for').val();

    if($('#initiative').length > 0){
      var initiativeName = $('#initiative').val();
    }
    var i = 0;
    $('.currency_'+currency).removeClass('active');
    $('#payment_type_error_msg').html('');
    $('#custom_amount').val('');
    $('#custom_installments').val('');
    $("#is_recurring").val(isChecked);
    if(isChecked == 1){
      if(initiativeName == 'contribute'){
        $("#donation_currency").val(currency).change();
        $('#recurring_donation_patch').show();
        $('.currency_'+currency).show();
        $('.recurring-custom-amount').show();
        $('#one_time_amount_block').hide();
        $("input[name=amount]").prop("checked",false);
        //$('.onetime-amount').hide();
      }else{
        $("#donation_currency").val('INR').change();
        changeCurrency();
        $("#donation_currency").css('pointer-events', 'none');
        $('.donation_trees').each(function(){
          var treestr = $(this).val();
          trees = treestr.match(/(\d+)/);
          if(parseInt(trees[0]) > 2380){
            $('.'+i+'_trees').hide();
          }
          i = parseInt(i) + parseInt(1);
        });

        $(".tick-mark.gift").hide();
        $("#gift_details").hide();
        $(".donation_trees").prop("checked", false);
        $('#select_currency').hide();
      }

      $(".donate-monthly.monthly-recurry.recurring").show();
      $("#display_donation_msg").hide();
      $('#installment_donation_msg').html('');
      $(".monthly input[type=radio]").prop("checked", false);
      $('.caca-one-time').hide();
      $('.caca-recurring').show();

      var today = new Date();
      var dd = today.getDate();
      $("#dayOfMonth").val(dd).change();
      $("#day_of_month").val(dd);

      if(donatePurposeId == 'Program'){
        $("#donation_currency").val('INR').change();
        changeCurrency();
        //$("#donation_currency").css('pointer-events', 'none');
        $("#no_of_months").val(12);
        $('#income').val('');
        $('#income_precent').html('');
        $('#select_reminder_months').hide();
        $('#hidden_reminder_months').val(0);
        $('#monthly').addClass('current');
        $('#onetime').removeClass('current');
        $('#custom_setup_title').hide();
        $('#recurring_setup_title').show();

        if(isActiveRecurring == 1){
          $('#select_currency').hide();
          $('#recurring_donation_patch').hide();
          $('#recurring_details_patch').show();
          $('#cal_block').hide();
          $('#continue').hide();
        }
      }else{
        $("#no_of_months").val('');
      }
    }else{
      if(initiativeName == 'cauvery-calling'){
        $('#select_currency').show();
        $('#recurring_currency').hide();
      }

      $("#donation_currency").val('INR').change();
      changeCurrency();

      if(initiativeName == 'contribute'){
        $("#donation_currency").val('INR').change();
        changeCurrency();
        $('#recurring_donation_patch').hide();
        $('.recurring-amount').hide();
        $('.recurring-custom-amount').hide();
        $('#one_time_amount_block').show();
        if(donatePurposeId == 'Program'){
          $("#donation_currency").css('pointer-events', 'auto');
          $('#income').val('');
          $('#income_precent').html('');
          $('#select_currency').show();
          $('#recurring_details_patch').hide();
          $('#cal_block').show();
          $('#continue').show();
          $('#select_reminder_months').show();
          changeReminderMonths();
          $('#onetime').addClass('current');
          $('#monthly').removeClass('current');
          $('#custom_setup_title').show();
          $('#recurring_setup_title').hide();
        }
      }else{
        $('.personal-gifts .error-msg').html('');
        $('.personal-gifts').removeClass('error');
        $('#full_name').val('');
        $('#donor_name').val('');
        $('#txt_question').val('');
        $('#certi_email').val('');
        $('#gift_details').hide();
        document.getElementById("gift_check").checked = false;
        $(".tick-mark.gift").show();
        $(".donation_trees"). prop("checked", false);
        $("#donation_currency").css('pointer-events', 'auto');
      }

      $(".donate-monthly.monthly-recurry.recurring").hide();
      $("#display_donation_msg").show();
      $("#display_donation_msg").html('');
      $('.caca-one-time').show();
      $('.caca-recurring').hide();
    }
  }

  function validateRecurringPaymentDetails(){
    validateNumberOfMonthsForRecurring();
    validateDayOfMonthForRecurring();
  }


  function calcDateDiffrence(date1,date2) {
    var diff = Math.floor(date1.getTime() - date2.getTime());
    var day = 1000 * 60 * 60 * 24;
    var days = Math.floor(diff/day);
    var months = Math.floor(days/31);
    var years = Math.floor(months/12);
    months = Math.abs(months);
    return months;
  }

  function getRemainingMonthsForCaCa(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(mm < 10){
     mm = "0"+mm;
   }
   var today = new Date(yyyy+","+mm);
   past = new Date(cauveryCallingProjectEndDate);
   a = calcDateDiffrence(today,past)+2;
   return a;
 }


 function validateNumberOfMonthsForRecurring(){

  var availMonths = parseInt($("#remaining_months_for_recurring").val());
  var noOfMonths = $("#no_of_months").val();
  if(noOfMonths == ''){
    $('.total-amount').addClass('error');
    document.getElementById('installment_donation_msg').innerHTML = 'Please choose the number of months';
    
    if($('.donate-monthly.monthly-recurry').length > 0){
      $('html, body').animate({
        scrollTop: $('.donate-monthly.monthly-recurry').offset().top
      }, 500);
    }

    setError();
    return false;
  }else if(noOfMonths > availMonths || noOfMonths <= 1){
    $('.total-amount').addClass('error');
    if($('.donate-monthly.monthly-recurry').length > 0){
      $('html, body').animate({
        scrollTop: $('.donate-monthly.monthly-recurry').offset().top
      }, 500);
    }
    document.getElementById('installment_donation_msg').innerHTML = 'Months can be from 2 to '+availMonths;
    setError();
    return false;
  }
}

function validateDayOfMonthForRecurring(){
  var dayOfMonth = $("#day_of_month").val();
  if(dayOfMonth == '' || dayOfMonth == undefined){
    $('#day_of_month_error_msg').html('Please select day of month');
    $('#day_of_month_input').addClass('error');
    setError();
    return false;
  }else{
    $('#day_of_month_error_msg').empty();
    $('#day_of_month_input').removeClass('error');
  }
}

function createPayURecurringOrder(){
  $('#hidden_gateway').val(5);   // 5 - PayU Gateway
  $('#hidden_auth_type').val('');
  createRecurringPaymentOrder();  
}

function createRecurringPaymentOrder(){
  isError = 0;
  var authType = $('#hidden_auth_type').val();
  var hiddenGateway = $('#hidden_gateway').val();

  isError = setRazorpayFormValues();

  if(isError == 1){
    if(authType == 'netbanking'){
      $('html, body').animate({
        scrollTop: $('.form-input.error').offset().top
      }, 1000);
    }
    return false;
  }else{
    showLoader();
    var data = $("#recurringPayment").serialize();

    var url = $("#create_order_url").val();
    $.ajax({
      url:url,
      data:data,
      type:'post',
      dataType:'json',
      success:function(resp){
        if(hiddenGateway == 4){
          if(resp.error == 1){
            hideLoader();
            $('html, body').animate({
              scrollTop: $('#donate_process').offset().top
            }, 500);
            $('#error_donation_msg').html(resp.error_msg);
            return false;
          }else if(resp.id != ''){
            $('#hidden_order_id').val(resp.id);
            $('#hidden_initiative_id').val(resp.initiative_id);
            $('#hidden_customer_id').val(resp.customer_id);
            $('#hidden_amount').val(resp.amount);
            $('#hidden_currency').val(resp.currency);
            $('#hidden_auth_type').val(resp.auth_type);
            $('#hidden_payment_method').val(resp.is_emandate);
            getRazorpayPopup(resp);
          }
        }else if(hiddenGateway == 5){
          $('#payment-5').append(resp.post_request_form);
          $('#payu_request').submit();
        }

      }
    });
  }
}

function setRazorpayFormValues()
{
  var authType = $('#hidden_auth_type').val();

  if(authType == 'debitcard')
  {
   // console.log("************************");
   $('#hidden_card_type').val('');
   $("#hidden_account_no").val('');
   $("#hidden_beneficiary_name").val('');
   $("#hidden_ifsc_code").val('');
   setDebitCardBankCode();

 }else if(authType == 'netbanking')
 {
  $('#hidden_card_type').val('');
  $("#hidden_account_no").val($("#account_no").val());
  $("#hidden_beneficiary_name").val($("#beneficiary_name").val());
  $("#hidden_ifsc_code").val($("#ifsc_code").val());
  validateNetbankingDetails();

}else if(authType == 'creditcard')
{
  $("#hidden_account_no").val('');
  $("#hidden_beneficiary_name").val('');
  $("#hidden_ifsc_code").val('');

}
if(isError == 1){
  return 1;
}
}

function validateNetbankingDetails()
{
  valiadteNetbakingBankCode();
  validateAccountNumber();
  validateIfscCode();
  validateAccnountHolderName();
  setAccountType();
}


function valiadteNetbakingBankCode(){
  var bankCode = $("#hidden_bank_code").val();
  if(bankCode == ''){
    $('#netbanking_bank_code_input').addClass('error');
    $('#netbanking_bank_code_error').html('Please select bank');
    setError();
   // return false;
 }else{
  $('#netbanking_bank_code_input').removeClass('error');
  $('#netbanking_bank_code_error').html('');
}
}

function setCreditCardType(){
  var carType = $("input[id=credit_card_type]:checked").val();
  $('#hidden_card_type').val(carType);
}

function setDebitCardBankCode(){
  var bankCode = $("#debit_bank_code").val();
  if(bankCode == ''){
    $('#hidden_bank_code').val('');
    $('#debit_bank_code_input').addClass('error');
    $('#debit_bank_code_error').html('Please select payment mode');
    setError();
    //return false;
  }else{
    $('#debit_bank_code_input').removeClass('error');
    $('#debit_bank_code_error').html('');
    $('#hidden_bank_code').val(bankCode);
  }
}


function setNetbakingBankCode(){
  var bankCode = $("#netbanking_bank_code").val();
  $("input:radio[name='netbanking_default_bank_code']").prop("checked", false);
  if(bankCode == ''){
    $('#hidden_bank_code').val('');
    $('#netbanking_bank_code_input').addClass('error');
    $('#netbanking_bank_code_error').html('Please select payment mode');
    setError();
   // return false;
 }else{
  $('#netbanking_bank_code_input').removeClass('error');
  $('#netbanking_bank_code_error').html('');
  $('#hidden_bank_code').val(bankCode);
}
}

function setNetbakingDefaultBankCode(){
  $('#netbanking_bank_code_input').removeClass('error');
  $('#netbanking_bank_code_error').html('');
  var bankCode = $("input[id=netbanking_default_bank_code]:checked").val();
  $("select#netbanking_bank_code").val(bankCode);
  //$("select#netbanking_bank_code").prop('selectedIndex', 0);
  $('#hidden_bank_code').val(bankCode);
}


function getRazorpayPopup(resp){
  hideLoader();
  donationUrl = $('#donation_url').val();
  if($('#initiative').length > 0){
    initiative = $('#initiative').val();
  }else{
    initiative = $('#initiative_name').val();
  }

  if(initiative == 'cauvery-calling'){
    //RAZORPAY_API_KEY = RAZORPAY_API_KEY_CACA;
    color = '#F37254';
    name = 'Cauvery Calling';
  }else if(initiative == 'contribute'){
    donationUrl = ISO_DOMAIN_URL+donationUrl;
    //RAZORPAY_API_KEY = RAZORPAY_API_KEY_CONTRIBUTE;
    color = '#cf4520';
    name = 'Isha Foundation Donation';
  }

  description = 'Monthly Recurring';
  var dayOfMonth = $('#day_of_month').val();
  var authType = $('#hidden_auth_type').val();
  var d = new Date();
  var today = d.getDate();

  if(dayOfMonth != today && (authType == 'creditcard' || authType == 'debitcard' || authType == 'upi'))
  {
    if(authType == 'upi'){
      amt = 5;
    }else{
      amt = 1;
    }
     description = 'Rs '+amt+' Authorization charge will be refunded';
  }

  // var lang = $('#lang').val();
  // var subscriptionId = $('#subscription_id').val();
  // RAZORPAY_API_KEY = getRazorpayAPIKeyByAjax(initiative, subscriptionId, lang);

  var options = {
    "key": resp.api_key,
    "order_id": resp.id,
    "name": name,
    "description": description,
        // "order_id": 'order_EHkZAaO2ObNYZk',
        "customer_id": resp.customer_id,
        // "customer_id": 'cust_E9T6FOxm0nVQw9',
        "recurring": "1",
        "retry": false,
        "callback_url": donationUrl+'/recurring-payment-thank-you',
        "redirect": true,
        "handler": function (response) {
          //submitRazorpayCheckoutForm(response);
        },
        "modal": {
          ondismiss: function(){
            console.log('on dismiss');
            submitRazoropayPaymentCancelForm(resp.id);
          },
        },
        "notes": resp.notes,
        "theme": {
          "color": color
        }
      };
      console.log("RazorPay options",options);
      var rzp1 = new Razorpay(options);
      rzp1.open();
    }

    function submitRazoropayPaymentCancelForm(orderId){
      showLoader();
      var donationUrl = $('#donation_url').val();
      donationUrl = donationUrl+'/recurring-payment-thank-you';
      $('#checkoutCancelForm').attr('action', donationUrl);
      $('#order_id').val(orderId);
      $('#error_msg').val('Payment Cancelled By User');
      $('#checkoutCancelForm').submit();
    }


    function validatePaymentType(){
      var paymentType = $("#auth_type").val();
      if(paymentType == '' || paymentType == undefined){
        $('#auth_type_input').addClass('error');
        $('#auth_type_error_msg').html('Please select payment mode');
        setError();
        return false;
      }else{
        $('#auth_type_error_msg').empty();
        $('#auth_type_input').removeClass('error');
      }
    }


    function changeRecurringPaymentInstallments(NoOfInstallment){
      $('.total-amount').removeClass('error');
      document.getElementById('installment_donation_msg').innerHTML='';
      if($('#invalidAmount').length > 0){
        document.getElementById('invalidAmount').innerHTML='';
      }

      if($('#initiative').length > 0){
        initiative = $('#initiative').val();
      }else{
        initiative = $('#initiative_name').val();
      }

      if(initiative == 'contribute' && NoOfInstallment == -1){
        var untilCancelledFlag = 1;
        $('#until_cancelled_flag').val(untilCancelledFlag);
        NoOfInstallment = 12;
      }else{
        var untilCancelledFlag = 0;
        $('#until_cancelled_flag').val(untilCancelledFlag);
      }

      if(initiative == 'cauvery-calling'){
        var availMonths = parseInt($("#remaining_months_for_recurring").val());
        if(NoOfInstallment > availMonths){
          NoOfInstallment = availMonths;
        }
      }

      document.getElementById('no_of_months').value = NoOfInstallment;

      var amount = document.getElementById('hidden_donation_amount').value;
      var dayOfMonth = document.getElementById('dayOfMonth').value;
      var currency = document.getElementById('donation_currency').value;
      if(amount > 0 && (NoOfInstallment > 0 || untilCancelledFlag == 1) && dayOfMonth > 0)
    {
      if(currency == 'INR'){
          var num = amount.toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR'
          });
          num = num.replace(".00", " ");
          num = num.replace("₹", " ");
           currencyAmount ='₹ '+num;
        }else if(currency == 'USD'){
          var nf = new Intl.NumberFormat();
          var num = nf.format(amount);
           currencyAmount = currency+" "+num;
        }
      var day = getGetOrdinal(dayOfMonth);

      if(untilCancelledFlag == 1){
        donationMsg = diaplayDonationMsg = "Donate "+currencyAmount+" monthly on the "+day+" of each month until cancelled by you";
      }else{
       var lastInstallment = getLastInstallmentMonth(NoOfInstallment, dayOfMonth);
       donationMsg = diaplayDonationMsg = "Donate "+currencyAmount+" monthly on the "+day+" of each month until "+lastInstallment+".";
     }
     $('#recurring_donation_msg').html(donationMsg);
     $('#hidden_donation_msg').val(donationMsg);
     $('#display_donation_msg').html(donationMsg);
   }else{
      $('#recurring_donation_msg').html('');
      $('#hidden_donation_msg').val('');
      $('#display_donation_msg').html('');
    }

  }

  function setCustomInstallments(){
    var untilCancelledFlag = 0;
    $('#until_cancelled_flag').val(untilCancelledFlag);
    document.getElementById('display_donation_msg').innerHTML='';
    document.getElementById('installment_donation_msg').innerHTML='';
    $('#no_of_months').val('');
    $('.total-installments').removeClass('error');
    document.getElementById("custom_installments").focus();
    var radioValue = $("input[id=custom_installments]:checked").val();
    $('#recurring_donation_msg').html('');
    $('#hidden_donation_msg').val('');
    if(radioValue){
      $('#custom_installments').val('');
      //$('#display_donation_msg').hide();
      //$('#display_donation_msg').html('');
      $('#hidden_donation_msg').val('');
      $('#no_of_months').val('');
    }else{
     // $('#display_donation_msg').show();
   }
 }



 $('#custom_installments').on('keyup', function () {
  var initiativeAlias = document.getElementById('initiative').value;
  var customInstallments = $('#custom_installments').val();
  document.getElementById('no_of_months').value = customInstallments;
  document.getElementById('installment_donation_msg').innerHTML = '';
  var amount = document.getElementById('hidden_donation_amount').value;
  var dayOfMonth = document.getElementById('dayOfMonth').value;
  var currency = document.getElementById('donation_currency').value;

  if(amount > 0 && customInstallments > 1 && dayOfMonth > 0)
  {
    if(currency == 'INR'){
        var num = amount.toLocaleString('en-IN', {
          style: 'currency',
          currency: 'INR'
        });
        num = num.replace(".00", " ");
        num = num.replace("₹", " ");
        currencyAmount ='₹ '+num;
      }else if(currency == 'USD'){
        currencySymbol ='$';
        var nf = new Intl.NumberFormat();
        var num = nf.format(amount);
        currencyAmount = currency+" "+num;
      }
    var day = getGetOrdinal(dayOfMonth);
    var lastInstallment = getLastInstallmentMonth(customInstallments, dayOfMonth);

    untilCancelledFlag = $('#until_cancelled_flag').val();
    if(untilCancelledFlag == 1){
      donationMsg = "Donate "+currencyAmount+" monthly on the "+day+" of each month until cancelled by you";
    }else{
      donationMsg = displayDonationMsg = "Donate "+currencyAmount+" monthly on the "+day+" of each month until "+lastInstallment+".";
    }
    $('#recurring_donation_msg').html(donationMsg);
    $('#hidden_donation_msg').val(donationMsg);
    $('#display_donation_msg').html(donationMsg);
  }else{
    $('#recurring_donation_msg').html('');
    $('#hidden_donation_msg').val('');
    $('#display_donation_msg').html('');
  }

});

 function getLastInstallmentMonth(NoOfInstallments, dayOfMonth)
 {
  var theMonths = new Array("January", "February", "March", "April", "May", "Jun", "July", "August", "September", "October", "November", "December ");
  var now = new Date();

  if (now.getMonth() == 11) {
    var current = new Date(now.getFullYear() + 1, 0, dayOfMonth);
  } else {
    var current = new Date(now.getFullYear(), now.getMonth() + 1, dayOfMonth);
  }

  // To calculate the time difference of two dates
  var Difference_In_Time = Math.abs(current.getTime() - now.getTime());

  // To calculate the no. of days between two dates
  var Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));

  var today = now.getDate();

  if(today > dayOfMonth)
  {
    NoOfInstallments = parseInt(NoOfInstallments) + parseInt(1);
  }

  // if(Math.abs(Difference_In_Days) <= 25){
  //   NoOfInstallments = parseInt(NoOfInstallments) + parseInt(1);
  // }

  for (var i = 1; i < NoOfInstallments; i++) {
    var future = new Date(now.getFullYear(), now.getMonth() + i, 1);
    var month = theMonths[future.getMonth()];
    var year = future.getFullYear();
  }
  return month+' '+year;
}


function changeDayOfMonth(){
  var dayOfMonth = document.getElementById('dayOfMonth').value;
  document.getElementById('day_of_month').value = dayOfMonth;
  var initiativeAlias = document.getElementById('initiative').value;
  var currency = document.getElementById('donation_currency').value;
  var amount = document.getElementById('hidden_donation_amount').value;
  var NoOfInstallment = document.getElementById('no_of_months').value;

  if(amount > 0 && NoOfInstallment > 0 && dayOfMonth > 0)
  {
    if(currency == 'INR'){
      currencySymbol = '₹';
      var num = amount.toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR'
      });
      num = num.replace(".00", " ");
      num = num.replace("₹", " ");
      currencyAmount ='₹ '+num;
    }else if(currency == 'USD'){
      currencySymbol ='$';
      var nf = new Intl.NumberFormat();
      var num = nf.format(amount);
      currencyAmount = currency+" "+num;
    }
    var day = getGetOrdinal(dayOfMonth);
    untilCancelledFlag = $('#until_cancelled_flag').val();
    if(untilCancelledFlag == 1){
      donationMsg = "Donate "+currencyAmount+" monthly on the "+day+" of each month until cancelled by you";
    }else{
      var lastInstallment = getLastInstallmentMonth(NoOfInstallment, dayOfMonth);
      donationMsg = diaplayDonationMsg = "Donate "+currencyAmount+" monthly on the "+day+" of each month until "+lastInstallment+".";
    }
    $('#recurring_donation_msg').html(donationMsg);
    $('#hidden_donation_msg').val(donationMsg);
    $('#display_donation_msg').html(donationMsg);
  }else{
    $('#recurring_donation_msg').html('');
    $('#hidden_donation_msg').val('');
    $('#display_donation_msg').html('');
  }

}

function getGetOrdinal(n){
  var s=["th","st","nd","rd"];
  v=n%100;
  return n+(s[(v-20)%10]||s[v]||s[0]);
}

function validateAccountNumber(){
  var accountNo = $('#account_no').val();
  if(accountNo == ''){
    $('#account_number_input').addClass('error');
    $('#account_number_error_msg').html('Please enter account number');
    setError();
    return false;
  }else if(regexAccountNumber.test(accountNo) == false){
    $('#account_number_input').addClass('error');
    $('#account_number_error_msg').html('Please enter valid Account number');
    setError();
    return false;
  }else{
    $('#account_number_input').removeClass('error');
    $('#account_number_error_msg').html('');
  }
}

function validateIfscCode(){
  var ifscCode = $('#ifsc_code').val();
  if(ifscCode == ''){
    $('#ifsc_code_input').addClass('error');
    $('#ifsc_code_error_msg').html('Please enter IFSC code');
    setError();
    return false;
  }else if(regexIFSCCode.test(ifscCode) == false){
    $('#ifsc_code_input').addClass('error');
    $('#ifsc_code_error_msg').html('Please enter valid IFSC code');
    setError();
    return false;
  }else{
    $('#ifsc_code_input').removeClass('error');
    $('#ifsc_code_error_msg').html('');
  }
}

function validateAccnountHolderName(){
  $('#beneficiary_name_error_msg').removeClass('eror');
  var textId = 'beneficiary_name';
  var divId = 'beneficiary_name_input';
  var errorId = 'beneficiary_name_error_msg';
  var name = $('#beneficiary_name').val();
  validateField('#'+textId, '#'+divId, '#'+errorId, regexFullName, 'Please enter account holder name.', 'Please enter alphabets only.');
  if(name != '' && (name.length > 22 || name.length < 4)){
   $('#beneficiary_name_input').addClass('error');
   $('#beneficiary_name_error_msg').addClass('eror');
   $('#beneficiary_name_error_msg').html('Please enter account holder name between 4 to 22 characters.');
   setError();
 }
}

function setAccountType(){
  var accountType = $("#account_type").val();
  if(accountType == ''){
    $('#hidden_account_type').val('');
    $('#account_type_input').addClass('error');
    $('#account_type_error').html('Please select account type');
    setError();
    return false;
  }else{
    $('#account_type_input').removeClass('error');
    $('#account_type_error').html('');
    $('#hidden_account_type').val(accountType);
  }
}


$('.left-block .payment-option .option').click(function(){
  var payment = $(this).attr("date-payment");
  var auth = $(this).attr("data-value");
  $('#hidden_auth_type').val(auth);

      // clears hidden fields if auth type changes
      $('#hidden_bank_code').val('');
      $('#hidden_card_type').val('');
      $('#hidden_account_no').val('');
      $('#hidden_beneficiary_name').val('');
      $('#hidden_ifsc_code').val('');
      $('#hidden_account_type').val('');

      $('input[type="text"]').val('');
      $('.error-msg').html('');
      $('.form-input').removeClass('error');

      $("#netbanking_bank_code").prop("selectedIndex", 0);
      $("#debit_bank_code").prop("selectedIndex", 0);

      if(auth == 'netbanking')
      {
        var defaultBank = $('#default_netbanking_bank').val();
        $("input[name=netbanking_default_bank_code][value="+defaultBank+"]").prop("checked",true);
        $("select#netbanking_bank_code").val(defaultBank);
        $('#hidden_bank_code').val(defaultBank);
        $("#account_type").prop("selectedIndex", 0);
      }else if(auth == 'creditcard')
      {
        $("input[name=card_type][value='Visa']").prop("checked",true);
        $('#hidden_bank_type').val('Visa');
      }


      $('.left-block .payment-option .option').removeClass('active');
      $(this).addClass('active');
      $('.right-block .card-slot').removeClass('active');
      $('#'+payment).addClass('active');
    });







    //================verify OTP start=======================
    var lang = $("#language").val();
    var userId = $("#user_id").val();
    $("#payment").prop('disabled',true);
    $("#payment").addClass("off-white-btn");


    $("#verify-otp").keyup(function(){
      $("#otp-error-msg").text('');
      $('#otp-error-msg').removeClass('green-error-msg');
      //$("#personal-pays").removeClass('error');
      $('.verify-color').find('img').remove();
      $(".verify-color").removeClass('red-tick');
    });

    function validateGetOtpFields(){
      var initiativeAlias = $('#initiative_name').val();
      if(initiativeAlias != 'rudraksha-diksha'){
        validateEmail();
      }
      validateOTPPhoneNo();

    }



    function validateOTPPhoneNo(){
      var phoneNumber = $("#contact_no").val();
      var country = document.getElementById('country_code');
      var countryCode = country.options[country.selectedIndex].value;
      var regexINPhone = /^[0-9]{10,10}$/;
      var regexOtherPhone = /^[0-9]{6,15}$/;

      if(countryCode == 91){
        $('#contact_no').attr('maxlength','10');
        $('#contact_no').attr('minlength','10');
      }else{
        $('#contact_no').attr('maxlength','15');
        $('#contact_no').attr('minlength','6');
      }

      if(phoneNumber == '')
      {
        $("#number_error_msg").text('Please enter phone number.');
        $("#contact_no_input").addClass('error');
        setError();
      }else if(regexContactNo.test(phoneNumber) == false){
        $("#number_error_msg").text('Please enter valid phone number.');
        $("#contact_no_input").addClass('error');
        setError();
      }else if(countryCode == 91 && regexINPhone.test(phoneNumber) == false){
        $("#number_error_msg").text('Please enter valid phone number.');
        $("#contact_no_input").addClass('error');
        setError();
      }else if(countryCode != 91 && regexOtherPhone.test(phoneNumber) == false){
        $("#number_error_msg").text('Please enter valid phone number.');
        $("#contact_no_input").addClass('error');
        setError();
      }else{
        console.log("All is well.");
        $("#contact_no_input").removeClass('error');
        return true;
      }

    }


    function validateRegistrationPhoneNoThroughAjax(otp_flag){
      $('#otp-error-msg').html('');
      $('#error-msg').html('');
      showLoader();
      var email = $("#email").val();
      var phoneNumber = $("#contact_no").val();
      var countryCode = $("#country_code").val();
      var otpUniqueId = $('#otp_unique_id').val();

      var flag = 0;
      var phoneregex  = /^(\+[0-9]{1,3}(\s)?|\([0]\)(\s)?)?(\([0]\)\s?|[0])?[0-9\s-]{10,15}$/;
      $('#otp-error-msg').removeClass('green-error-msg');

            isError = 0; // set no errors
            validateGetOtpFields(); // validate  all fields
           // alert(isError);
           if(isError == 1){
            return false;
          }else if(isError == 0){

          }else{
            return false;
          }

          var number = $('#contact_no').val();
          var initiative = $('#initiative_name').val();
          var lang =  $('#lang').val();
          var url =  '/'+lang+'/'+initiative+'/register-for-rudraksha/validate-mobile-number'
          $.ajax({
           url: url,
           type:'post',
           data: {'contact_no' : number,'is_ajax':'0'},
           dataType:'json',
           success:function(resp){
             hideLoader();
            if(resp != ''){
              $('#contact_no_input').addClass('error');
              $('#number_error_msg').html(resp);
              setError();
              return false;
            } else{
             $("#contact_no_input").removeClass('error');
             $('#number_error_msg').html('');
             if(otp_flag == 0){
              verifyOtp();
            }else if(otp_flag == 1){
              getAnotherOtp();
            }

           }

         }
       });

        }

    function getOtp()
    {
      var email = $("#email").val();
      var phoneNumber = $("#contact_no").val();
      var countryCode = $("#country_code").val();
      var otpUniqueId = $('#otp_unique_id').val();
      var flag = 0;
      var phoneregex  = /^(\+[0-9]{1,3}(\s)?|\([0]\)(\s)?)?(\([0]\)\s?|[0])?[0-9\s-]{10,15}$/;
      $('#otp-error-msg').removeClass('green-error-msg');

        isError = 0; // set no errors
        validateGetOtpFields(); // validate  all fields
        if(isError == 1){
          return false;
        }else if(isError == 0){

        }else{
          return false;
        }





        var donatePurpose = $('#hidden_donate_purpose_id').val();
        var initiativeAlias = $('#initiative').val();

        if(donatePurpose == 'Isha'){
          var url = '/'+lang+'/contribute/isha-foundation-general-corpus-fund/donate/send-otp';
        }else if(donatePurpose == 'Isha-Biksha'){
          var url = '/'+lang+'/contribute/isha-biksha/donate/send-otp';
        }else if(donatePurpose == 'SGMT'){
          var url = '/'+lang+'/contribute/sanghamitra/donate/send-otp';
        }else if(donatePurpose == 'BGLDON'){
        var url = '/'+lang+'/contribute/ishayogacenterinfra/donate/send-otp';
        }else if(donatePurpose == 'Program'){
        var url = '/'+lang+'/contribute/ishanga/donate/send-otp';
        }else if(donatePurpose == 'LUKDON'){
        var url = '/'+lang+'/contribute/isha-foundation-general-corpus-fund-2/donate/send-otp';
        }

        $.ajax({
          url: url,
          type: 'post',
          data:{'otp_email': email, 'phone_number': phoneNumber,'country_code':countryCode, 'otpUniqueId': otpUniqueId, 'donatePurpose': donatePurpose,'initiativeAlias':initiativeAlias},
          dataType: 'json',
            //async:false,
            beforeSend: function () {
             showLoader();
           },
           success: function(resp){
            hideLoader();
            console.log(resp);

            if(resp.error_code == 0){
              $('#otp-error-msg').text('OTP sent on SMS and email');
              $('#personal-pays').addClass('error');
              $('#otp-error-msg').addClass('green-error-msg');
              $("#get-otp-btn").hide();
              $("#verify-otp-btn").show();

              setTimeout(function(){
                expireOtp();
              }, 900000);

            }else{
              $('#otp-error-msg').text('Please try again.');
              $('#personal-pays').addClass('error');
            }
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
            hideLoader();
            alert("Server connection error. Please Try again later.");

          }

        });

      }


      function verifyOtp(){
        $('#error-msg').text('');

        var initiativeAlias = $('#initiative').val();

        if(initiativeAlias == 'rudraksha-diksha'){
          var verifyOtp = $('.opt_boxes').map(function() {
          return this.value;
          }).get().join('');
        }else{
          var verifyOtp = $("#verify-otp").val();
        }

        $('#otp-error-msg').text('');
        $('#otp-error-msg').removeClass('green-error-msg');
        var Id = $("#otp_unique_id").val();
        var numberRegex = /^[0-9]*$/;
        var imagePath= $("#image_path").val();
        $('#error-msg').text('');

        if(!verifyOtp){
         $('#error-msg').text('Please enter the OTP');
         $('.sub-title').addClass('red-error');
         return false;
       }else if(numberRegex.test(verifyOtp) == false){
        $('#otp-error-msg').text('Invalid OTP');
        $('#personal-pays').addClass('error');
        return false;
      }else if(verifyOtp){
        $('#otp-error-msg').text('');
      }

      var donatePurpose = $('#hidden_donate_purpose_id').val();

      if(donatePurpose == 'Isha'){
        var url = '/'+lang+'/contribute/isha-foundation-general-corpus-fund/donate/verify-valid-otp';
      }else if(donatePurpose == 'Isha-Biksha'){
        var url = '/'+lang+'/contribute/isha-biksha/donate/verify-valid-otp';
      }else if(donatePurpose == 'SGMT'){
        var url = '/'+lang+'/contribute/sanghamitra/donate/verify-valid-otp';
      }else if(donatePurpose == 'BGLDON'){
        var url = '/'+lang+'/contribute/ishayogacenterinfra/donate/verify-valid-otp';
      }else if(donatePurpose == 'Program'){
        var url = '/'+lang+'/contribute/ishanga/donate/verify-valid-otp';
      }else if(donatePurpose == 'LUKDON'){
        var url = '/'+lang+'/contribute/isha-foundation-general-corpus-fund-2/donate/verify-valid-otp';
      }else{
        var url = '/'+lang+'/'+initiativeAlias+'/donate/verify-valid-otp';
      }

      $.ajax({
        url: url,
        type: 'post',
        data:{'verify_otp': verifyOtp, 'otp_unique_id': Id,'donatePurpose': donatePurpose,'initiativeAlias': initiativeAlias},
        dataType: 'json',
            //async:false,
            beforeSend: function () {
             showLoader();
           },
           success: function(resp){
            hideLoader();
            console.log(resp);
            $('.verify-color').find('img').remove();
            if(resp.error_code == 0)
            {
              if(resp.otpVerified == 1){
                        //$("#verify-otp-form").submit();
                        $(".verify-color").append(`<img src="${ imagePath }check-mark.svg" class="check-mark">`);
                        $(".verify-color").removeClass('red-tick');
                        $(".verify-color").addClass('green-tick');
                        $(".vertify-btn").attr("disabled", true);
                        $(".vertify-btn").addClass('vertify-default');
                        $("#verify-otp").prop("disabled", true);
                        $("#payment").prop('disabled',false);
                        $("#payment").removeClass('off-white-btn');
                        $("#otp-text").hide();

                        if($('#subsequent_year_pdf').length > 0){
                          var isSubsequentFlow = $('#subsequent_year_pdf').val();
                          if(isSubsequentFlow == 1){
                            showLoader();
                            $('#subsequent_payment_form').submit();
                          }
                        }else if($('#registration_form').length > 0){
                          showLoader();
                          $('#registration_form').submit();
                        }
                        
                      }
                    }else if(resp.error_code == 1){

                      if(resp.otpVerified == 0)
                      {
                        $("#otp-error-msg").text(resp.message);
                        $('#personal-pays').addClass('error');
                        $(".verify-color").append(`<img src="${ imagePath }red-cancel.svg" class="cancel-mark">`);
                        $(".verify-color").removeClass('green-tick');
                        $(".verify-color").addClass('red-tick');
                      }
                    }else{
                      alert('something went wrong');
                    }
                  }

                });
    }

    function getAnotherOtp(){
      $("#verify-otp").val('');
      var Id = $('#otp_unique_id').val();
      var email = $("#email").val();
      var phoneNumber = $("#contact_no").val();
      var expireOtp = $("#expire_otp").val();
      var countryCode = $("#country_code").val();

      var reg_id = 0;
      var donatePurpose = $('#hidden_donate_purpose_id').val();
      var initiativeAlias = $('#initiative').val();
      if($('#registration_real_id').length > 0){
       reg_id = $('#registration_real_id').val();
      }

      if(expireOtp == 1){
        var resendOtp = 0;
      }else{
        var resendOtp = 1;
      }

      if(donatePurpose == 'Isha'){
        var url = '/'+lang+'/contribute/isha-foundation-general-corpus-fund/donate/resend-otp';
      }else if(donatePurpose == 'Isha-Biksha'){
        var url = '/'+lang+'/contribute/isha-biksha/donate/resend-otp';
      }else if(donatePurpose == 'SGMT'){
        var url = '/'+lang+'/contribute/sanghamitra/donate/resend-otp';
      }else if(donatePurpose == 'BGLDON'){
        var url = '/'+lang+'/contribute/ishayogacenterinfra/donate/resend-otp';
      }else if(donatePurpose == 'Program'){
        var url = '/'+lang+'/contribute/ishanga/donate/resend-otp';
      }else if(donatePurpose == 'LUKDON'){
        var url = '/'+lang+'/contribute/isha-foundation-general-corpus-fund-2/donate/resend-otp';
      }else{
        var url = '/'+lang+'/'+initiativeAlias+'/donate/resend-otp';
      }

      $('#otp-error-msg').text('');
      $('#otp-error-msg').removeClass('green-error-msg');
      $("#personal-pays").removeClass('error');

      $.ajax({
        url: url,
        type: 'post',
        data:{'otpUniqueId': Id,'otp_email':email,'phone_number':phoneNumber,'resend_otp': resendOtp,'donatePurpose': donatePurpose,'initiativeAlias': initiativeAlias, 'country_code':countryCode,'reg_id':reg_id},
        dataType: 'json',
            //async:false,
            beforeSend: function () {
             showLoader();
           },
           success: function(resp){
            hideLoader();
            if(resp.message == "success"){
              if(initiativeAlias == 'rudraksha-diksha'){
                $('#otp-error-msg').text('OTP sent on SMS');
              }else{
                $('#otp-error-msg').text('OTP sent on SMS and email');
              }
              $("#personal-pays").addClass('error');
              $('#otp-error-msg').addClass('green-error-msg');
              $('.verify-color').find('img').remove();
              $(".verify-color").removeClass('red-tick');
              $(".verify-color").removeClass('green-tick');
              $(".vertify-btn").attr("disabled", false);
              $(".vertify-btn").removeClass('vertify-default');
              $("#verify-otp").prop("disabled", false);
              $("#payment").prop('disabled',true);
              $("#payment").addClass("off-white-btn");

              setTimeout(function(){
                expireOtp();
              }, 900000);
            }else{
              if(resp.no_of_attempts >= 4)
              {
                $('#otp-error-msg').text('Attempt exceeded.');
                $("#personal-pays").addClass("error");
                return false;
              }
            }

          }

        });
    }


    function expireOtp(){
      $('#otp-error-msg').removeClass('green-error-msg');
      var Id = $('#otp_unique_id').val();
      var donatePurpose = $('#hidden_donate_purpose_id').val();
      var initiativeAlias = $('#initiative').val();

      if(donatePurpose == 'Isha'){
        var url = '/'+lang+'/contribute/isha-foundation-general-corpus-fund/donate/expire-otp';
      }else if(donatePurpose == 'Isha-Biksha'){
        var url = '/'+lang+'/contribute/isha-biksha/donate/expire-otp';
      }else if(donatePurpose == 'SGMT'){
        var url = '/'+lang+'/contribute/sanghamitra/donate/expire-otp';
      }else if(donatePurpose == 'BGLDON'){
        var url = '/'+lang+'/contribute/ishayogacenterinfra/donate/expire-otp';
      }else if(donatePurpose == 'Program'){
        var url = '/'+lang+'/contribute/ishanga/donate/expire-otp';
      }else if(donatePurpose == 'LUKDON'){
        var url = '/'+lang+'/contribute/isha-foundation-general-corpus-fund-2/donate/expire-otp';
      }else{
        var url = '/'+lang+'/'+initiativeAlias+'/donate/expire-otp';
      }

      $.ajax({
        url: url,
        type: 'post',
        data:{'otpUniqueId': Id,'donatePurpose': donatePurpose,'initiativeAlias': initiativeAlias},
        dataType: 'json',
            //async:false,
            beforeSend: function () {
             showLoader();
           },
           success: function(resp){
            hideLoader();
            console.log(resp);
            if(resp.message == "success"){
              $('#otp-error-msg').text('OTP Expired.');
              $('#personal-pays').addClass('error');
              $('#expire_otp').val(1);
            }

          }

        });

    }
  //================verify OTP end=======================


//================Rudraksha Diksha OTP=======================

   function getCodeBoxElement(index) {
    return document.getElementById('codeBox' + index);
  }
  function onKeyUpEvent(index, event) {
    const eventCode = event.which || event.keyCode;

    if (getCodeBoxElement(index).value.length !== 1) {
      event.target.value = Math.max(0, parseInt(event.target.value) ).toString().slice(0,1);
    }

    if (index !== 6) {
      getCodeBoxElement(index+ 1).focus();
    } else {
      getCodeBoxElement(index).blur();
    }

    // if (eventCode === 8 && index !== 1) {
    //   getCodeBoxElement(index - 1).focus();
    // }
  }
  
  function onFocusEvent(index) {
    for (item = 1; item < index; item++) {
      const currentElement = getCodeBoxElement(item);
      if (!currentElement.value) {
        currentElement.focus();
        break;
      }
    }
  }

  function clearErrorMsg(){
    $('#number_error_msg').html('');
    removeErrorClass("#contact_no_input");
  }

  function check80GTax(){
    $("#want_80G_error_msg").html("");
    var isChecked = $("input[name='want_80G']:checked").val();
    var citizenship = $("input[name='nationality']:checked").val();
     var donationVal = $("#hidden_donation_amount").val();
     var donatePurposeId = document.getElementById('hidden_donate_purpose_id').value;
     var currency = $('#hidden_donation_currency').val();
     var isRecurring = $('#is_recurring').val();

     if(isRecurring == '1'){
        if(currency == 'INR'){
          var NoOfInstallments = $("#no_of_months").val();
          var finalAmount = parseInt(donationVal) * parseInt(12);
        }else{
          var convertedAmount = $('#converted_amount').val();
          var finalAmount = parseInt(convertedAmount) * parseInt(12);
        }
      }else{
        if(currency == 'INR'){
          var finalAmount = donationVal;
        }else{
          var finalAmount = $('#converted_amount').val();
        }
      }

    if(isChecked == "yes" ){
      $("#no_80G_consent").prop("checked", false);
      //document.getElementById('want_80g_exemtion_msg').style.display = "block";
      document.getElementById('pancard_input').style.display = "block";

      if(finalAmount < 50000 || citizenship == 'no'){
        document.getElementById('aadhar_checkbox').style.display = "block";
      }
        $("input[name=show_aadhar]").attr('checked', false);
       document.getElementById('aadhar_input').style.display = "none";
      document.getElementById('agree_80g_tax_div').style.display = "none";
    }else if(isChecked == "no"){
      //document.getElementById('want_80g_exemtion_msg').style.display = "none";
      $('#adharcard').val('');
      $('#adharcard_error_msg').html("");

      // if((citizenship == 'yes' && finalAmount >= 50000) || donatePurposeId == 'SGMT'){
      //   $('#no_80G_consent_msg').html('I hereby declare that I do not wish to avail 80G donation');
      // }else{
      //   $('#no_80G_consent_msg').html('I hereby declare that I do not wish to avail 80G donation and hence I am not providing my PAN / Aadhar');
      // }

      if((finalAmount < 50000 && donatePurposeId != 'SGMT') || citizenship != 'yes'){
        $('#pancard').val('');
        $('#pancard_error_msg').html("");
        document.getElementById('pancard_input').style.display = "none";
      }else if((donatePurposeId == 'SGMT') && $('#pancard').val() == ''){
        $('#pancard_input').removeClass('error');
      }
      document.getElementById('aadhar_input').style.display = "none";
      $("input[name=show_aadhar]").attr('checked', false);
      document.getElementById('aadhar_checkbox').style.display = "none";

      //if(citizenship == 'yes'){
        document.getElementById('agree_80g_tax_div').style.display = "block";
      //}

    }
       
  }


  function showAadhar(){
    var isChecked = $("input[name='show_aadhar']:checked").val();
    $('#pancard_input').removeClass('error');
    $('#pancard_error_msg').html("");
    if(isChecked == 'on'){
      $('#aadhar_input').show();
    }else{
      $('#aadhar_input').removeClass('error');
      $('#adharcard_error_msg').html("");
      $('#aadhar_card').val('');
      $('#aadhar_input').hide();
    }
  }

  function calculate7PercentIncome(){
    var amount = $('#income').val();
    donationId = $('#donation_id').val();
    if(amount != ''){
      var percentEarnings = Math.round((amount*7)/100);
      var selectedDonationCurrency = document.getElementById('hidden_donation_currency').value;
      if(selectedDonationCurrency == 'INR'){
        var currencySymbol = '₹';
      }else if(selectedDonationCurrency == 'USD'){
        var currencySymbol = '$';
      }
      $('#income_precent').html(currencySymbol+' '+percentEarnings);
      $('#custom_amount_'+donationId+'_0').val(percentEarnings);
      $('#custom_amount_'+donationId+'_1').val(percentEarnings);
    }else{
      $('#income_precent').html('');
      $('#custom_amount_'+donationId+'_0').val('');
      $('#custom_amount_'+donationId+'_1').val('');
    }
    changeCustomAmount(donationId);
  }

  function validateIndianCitizenAgreeCheck(){
    var isChecked = $("input[name='agree_citizenship']:checked").length;
    if(isChecked == 0){
      isCheckboxError = 1;
      setErrMsg("#agree_citizenship_error_msg", 'Please select declaration');
      //setError();
    }else{
      $('#agree_citizenship_error_msg').html('');
      return true;
    }
  }

  function changeRegion(){
   $('#error_region_msg').html('');
   var region = document.getElementById('region').value;
   var abc=document.getElementById('hidden_donation_region').value=document.getElementById('region').value;
  }

  function changeReminderMonths(){
  var reminder_months = $('#reminder_months').val();
  $('#hidden_reminder_months').val(reminder_months);
}


function inWords (amount,currency,isRecurring) {
  
  if(currency == 'INR'){
    var a = ['','One ','Two ','Three ','Four ', 'Five ','Six ','Seven ','Eight ','Nine ','Ten ','Eleven ','Twelve ','Thirteen ','Fourteen ','Fifteen ','Sixteen ','Seventeen ','Eighteen ','Nineteen '];
    var b = ['', '', 'Twenty','Thirty','Forty','Fifty', 'Sixty','Seventy','Eighty','Ninety'];
      if ((amount = amount.toString()).length > 9) return 'overflow';
      n = ('000000000' + amount).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
      if (!n) return; var str = '';
      if(amount != 0){
      str += 'Rupees ';
      }
      str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'Crore ' : '';
      str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Lakh ' : '';
      str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'Thousand ' : '';
      str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'Hundred ' : '';
      if(isRecurring == 1){
       
        if(amount=="" || amount==0){
          str +='';
        }else{
        str +=  (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'each month';
        }
      }else{
       
       if(amount=="" || amount==0){
          str +='';
        }else{
          str += (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'Only'; 
        }
      }

   }
    else{
      var words = new Array();
      words[0] = 'zero';words[1] = 'One';words[2] = 'Two';words[3] = 'Three';words[4] = 'Four';words[5] = 'Five';words[6] = 'Six';words[7] = 'Seven';words[8] = 'Eight';words[9] = 'Nine';words[10] = 'Ten';words[11] = 'Eleven';words[12] = 'Twelve';words[13] = 'Thirteen';words[14] = 'Fourteen';words[15] = 'Fifteen';words[16] = 'Sixteen';words[17] = 'Seventeen';words[18] = 'Eighteen';words[19] = 'Nineteen';words[20] = 'Twenty';words[30] = 'Thirty';words[40] = 'Forty';words[50] = 'Fifty';words[60] = 'Sixty';words[70] = 'Seventy';words[80] = 'Eighty';words[90] = 'Ninety'; words[100] = 'One Hundred'; words[200] = 'Two Hundred'; words[300] = 'Three Hundred'; words[400] = 'Four Hundred'; words[500] = 'Five Hundred'; words[600] = 'Six Hundred'; words[700] = 'Seven Hundred'; words[800] = 'Eight Hundred'; words[900] = 'Nine Hundred';var op;
      amount = amount.toString();
      var atemp = amount.split('.');
      var number = atemp[0].split(',').join('');
      var n_length = number.length;
      var str = '';
      if(n_length <= 11){
      var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      var received_n_array = new Array();
      for (var i = 0; i < n_length; i++){
      received_n_array[i] = number.substr(i, 1);}
      for (var i = 11 - n_length, j = 0; i < 11; i++, j++){
      n_array[i] = received_n_array[j];}
      str += 'Dollars ';
      for (var i = 0, j = 1; i < 11; i++, j++){
      if(i == 0 || i == 3 || i == 6 || i == 9){
      if(n_array[i] == 1){
      n_array[j] = 10 + parseInt(n_array[j]);
      n_array[i] = 0;}
      }}
      value = '';
      for (var i = 0; i < 11; i++){
      if(i == 0 || i == 3 || i == 6 || i == 9){
      value = n_array[i] * 10;}
      else if( i == 2 || i == 5 || i == 8){
      value = n_array[i] * 100;} else {
      value = n_array[i];}
      
      if(value != 0){
        //alert("wwwww");
      str += words[value] + ' ' ;}


      if((i == 1 && value != 0) && (n_array[i - 1] > 0)){
      str += 'Billion ';}else if(( i == 1) && value != 0){
      str += 'Biillion ';}
      if((i == 4) && value == 0 && (n_array[i - 1] > 0 || n_array[i - 2] > 0)){
      str += 'Million ';} else if(( i == 4) && value != 0){
      str += 'Million ';}
      if((i == 7) && value == 0 && (n_array[i - 1] > 0 || n_array[i - 2] > 0)){
      str += 'Thousand ';} else if(( i == 7) && value != 0){
      str += 'Thousand ';}}
      if(isRecurring == 1){
      str +=  'each month';
      }else{
      str +=  'Only';
      }
      str = str.split(' ').join(' ');
     }
    }
    return str;
}