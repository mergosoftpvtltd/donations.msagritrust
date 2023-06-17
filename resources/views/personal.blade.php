@extends ('layouts.app')
@section('content')
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Container wrapper -->
    <div class="container"  style="width: 100%">
        <!-- Navbar brand -->
        <a class="navbar-brand " href="#">
        <img src="{{ asset('mobile-msat-logo.png')}}" alt="" class="d-inline-block align-text-top">
        </a>
        <!-- Toggle button -->
        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
        </button>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Left links -->
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="#">Login</a>
                </li>
                
            </ul>
            <!-- Left links -->

           
        </div>
        <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
</nav>
<!-- Navbar -->
<div class="wrap">
   <div class="container" id="donation_summary" style="display: none;">
      <article class="content-support"></article>
   </div>
   <div class="online-contribution p-6">
      <div class="online-donation step-2" id="donate_process">
         <div class="donate-step-gift" id="donate_steps">
            <div class="donate-block donation">
               <div class="icon"><img src="{{ asset('assets/donation.svg')}}" alt="donation"></div>
               <div class="name">Donation</div>
            </div>
            <div class="donate-block personal">
               <div class="icon"><img src="{{ asset('assets/personal-info.svg')}}" alt="personal"></div>
               <div class="name">Personal Info</div>
            </div>
            <div class="donate-block payment">
               <div class="icon"><img src="{{ asset('assets/payment.svg')}}" alt="payment"></div>
               <div class="name">Payment</div>
            </div>
            <div class="donate-block finish">
               <div class="icon"><img src="{{ asset('assets/donation-thankyou.svg')}}" alt="finish"></div>
               <div class="name">Finish</div>
            </div>
            <div class="steps-bar"><span></span></div>
         </div>
         <div class="donate-stepo">
            <div class="title">Step 2 of 4 : <span>Donation</span></div>
         </div>
         <div class="donate-error" id="error_donation_msg"></div>
         <div class="personal-payment">
            <div class="form">
               <input type="hidden" name="country_list" id="country_list" value="">
               {{ Form::model($data, ['route' => $route, 'id' => 'user-form-question', 'method' => $method]) }}
               <input type="hidden" name="lang" id="lang" value="en">
               <input type="hidden" name="initiative" id="initiative" value="cauvery-calling">
               <input type="hidden" name="hidden_donation_msg" id="hidden_donation_msg" value="Your contribution of ₹420  for 10 Trees is greatly appreciated">
               <input type="hidden" name="hidden_common_donation_msg" id="hidden_common_donation_msg" value="Your contribution of ₹420  for 10 Trees is greatly appreciated">
               <input type="hidden" name="hidden_donation_amount" id="hidden_donation_amount" value="420">
               <input type="hidden" name="occassion_reason" id="occassion_reason" value="">
               <input type="hidden" name="hidden_donation_currency" id="hidden_donation_currency" value="INR">
               <input type="hidden" name="donation_url" id="donation_url" value="#">
               <input type="hidden" name="identification_key" id="identification_key" value="isha_post">
               <input type="hidden" name="hidden_donation_title" id="hidden_donation_title" value="">
               <input type="hidden" name="hidden_donation_for" id="hidden_donation_for" value="0">
               <input type="hidden" name="hidden_donate_purpose_id" id="hidden_donate_purpose_id" value="CVC-IOR">
               <input type="hidden" name="donation_type" id="donation_type" value="1">
               <input type="hidden" name="hidden_donation_step" id="hidden_donation_step" value="3">
               <input type="hidden" name="initiative_short_code" id="initiative_short_code" value="CVC">
               <input type="hidden" name="hidden_donation_region" id="hidden_donation_region" value="">
               <input type="hidden" name="converted_amount" id="converted_amount" value="">
               <input type="hidden" name="converted_currency" id="converted_currency" value="">
               <input type="hidden" name="from_currency_value" id="from_currency_value" value="0">
               <input type="hidden" name="gift_name" id="gift_name" value="">
               <input type="hidden" name="gift_msg" id="gift_msg" value="">
               <input type="hidden" name="gift_mail" id="gift_mail" value="">
               <input type="hidden" name="mail_me" id="mail_me" value="undefined">
               <input type="hidden" name="donation_description" id="donation_description" value="10 Trees">
               <input type="hidden" name="donor_name" id="donor_name" value="">
               <input type="hidden" name="hidden_reminder_months" id="hidden_reminder_months" value="0">
               <input type="hidden" name="is_recurring" id="is_recurring" value="0">
               <input type="hidden" name="no_of_months" id="no_of_months" value="0">
               <input type="hidden" name="day_of_month" id="day_of_month" value="0">
               <input type="hidden" name="until_cancelled_flag" id="until_cancelled_flag" value="0">
               <input type="hidden" name="parent_campaign_id" id="parent_campaign_id" value="">
               <input type="hidden" name="campaign_id" id="campaign_id" value="">
               <input type="hidden" name="campaign_name" id="campaign_name" value="">
               <input type="hidden" name="donor_image" id="donor_image" value="">
               <input type="hidden" name="bid_id" id="bid_id" value="">
               <input type="hidden" name="bid_amount" id="bid_amount" value="">
               <input type="hidden" name="donate-for" value="plant-trees">
               <div class="national">
                  <div class="name">Note: All Fields are Required</div>
                  <input type="hidden" name="hidden_donation_nationality" id="hidden_donation_nationality" value="">
               </div>
               <input type="hidden" name="hidden_state" id="hidden_state" value="">
               <div class="block">
               <p>Method :: {{$method}}</p>
               <p>Method :: {{$route}}</p>
                  <div class="form-input personal-pays" id="name_input">
                     <label>First Name</label>
                     <div class="input">
                        <input type="text" name="first_name" placeholder="Enter First Name" id="first_name" value="" minlength="1" maxlength="50" onblur="validateFirstName();">
                     </div>
                     <div id="name_error_msg" class="error-msg"></div>
                  </div>
                  <div class="form-input personal-pays" id="lname_input">
                     <label>Last Name</label>
                     <div class="input">
                        <input type="text" name="last_name" placeholder="Enter Last Name" id="last_name" value="" minlength="1" maxlength="50" onblur="validateLastName();">
                     </div>
                     <div id="lname_error_msg" class="error-msg"></div>
                  </div>
               </div>
               <div class="block">
                  <div class="form-input personal-pays" id="email_input">
                     <label>Email</label>
                     <div class="input">
                        <input type="text" name="email" placeholder="Enter Email" id="email" value="" maxlength="100" onblur="validateEmail();">
                     </div>
                     <div id="email_error_msg" class="error-msg"></div>
                  </div>
                  <div class="form-input personal-pays mobile mobile-numb" id="contact_no_input">
                     <label>Country Code &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phone/WhatsApp Number</label>
                     <div class="select donate-mobile">
                        <select name="country_code" id="country_code" onchange="changeContactNoLength()">
                           @foreach(countries() as $key => $country)
                           <option @if($country->phonecode=='91') selected=selected @endif>{{ $country->phonecode}}</option>
                           @endforeach
                        </select>
                     </div>
                     <div class="input phone number">
                        <input type="text" name="phone_number" placeholder="phone number" id="contact_no" value="" minlength="10" maxlength="10" onblur="validatePhoneNo();">
                     </div>
                     <div id="number_error_msg" class="error-msg"></div>
                  </div>
               </div>
               <div class="block " id="nation_check" style="display:block">
                  <div class="citizen-check email-certificate agree" id="nation_input">
                     <div class="agre-content">
                        <div class="text"> Citizen</div>
                     </div>
                     <div class="citizens-option">
                        <label class="citizns-amt">
                           <input type="radio" name="nationality" id="nationality" value="yes" onclick="checkNationality();">
                           <div class="option">
                              <div class="span">Indian</div>
                           </div>
                        </label>
                        <label class="citizns-amt">
                           <input type="radio" name="nationality" id="nationality" value="no" onclick="checkNationality();">
                           <div class="option">
                              <div class="span">Other</div>
                           </div>
                        </label>
                     </div>
                     <div id="nation_error_msg" class="error-msg"></div>
                     <div class="recommended">
                        <div class="recomend-add" id="show_address_msg" style="display:none">Entering an
                           Indian address is recommended
                        </div>
                     </div>
                  </div>
                  <div class="whatsapp-message">
                     <div class="message-checkbox">
                        <label>
                           <input type="checkbox" name="whatsapp_consent" id="whatsapp_consent">
                           <div class="checkbox"></div>
                           <div class="text">Please send my Ms Agri Trust 360 certificate &amp; relevant messages on Whatsapp</div>
                        </label>
                     </div>
                  </div>
               </div>
               <div class="block">
                  <div class="tax-benefit email-certificate agree" id="tax_80g_input">
                     <div class="agre-content">
                        <div class="text">Do you want 80G tax benefit? </div>
                     </div>
                     <div class="citizens-option">
                        <label class="citizns-amt">
                           <input type="radio" name="want_80G" id="want_80G" value="yes" onclick="check80GTax()">
                           <div class="option">
                              <div class="span">Yes</div>
                           </div>
                        </label>
                        <label class="citizns-amt">
                           <input type="radio" name="want_80G" id="want_80G" value="no" onclick="check80GTax()">
                           <div class="option">
                              <div class="span">No</div>
                           </div>
                        </label>
                     </div>
                     <div id="want_80G_error_msg" class="error-msg"></div>
                     <div class="tax-note" id="want_80g_exemtion_msg">Please tick this box if you are a
                        taxpayer in India and would like to avail tax benefits under 80G. To avail this, you
                        need to provide your PAN/Aadhaar number
                     </div>
                  </div>
                  <div class="form-input personal-pays" style="display:none" id="fcra_nationality_input">
                     <label>Nationality</label>
                     <div class="select" id="select_country">
                        <select name="fcra_nationality" id="selected_fcra_nationality" onblur="validateFCRNationality()" onchange="validateFCRNationality()">
                            <option value="0">Select Nationality</option>
                           @foreach(countries() as $key => $country)
                           <option value="{{$country->id}}">{{ $country-> name}}</option>
                           @endforeach
                        </select>
                        <input type="hidden" name="nationality_country" id="nationality_country" value="">
                     </div>
                     <div id="fcra_nationality_error_msg" class="error-msg"></div>
                  </div>
               </div>
               <div class="block">
                  <div class="form-input personal-pays country country-option" id="country_input">
                     <label>Country</label>
                     <div class="select" id="select_country">
                        <!-- <select name="country" onchange="countryChangeDonation()" id="selected_country" onblur="validateCountryDetails();"> -->
                        <select name="country" id="selected_country">
                           <option id="default_country" value="Select Country">Select Country</option>
                           <option name="countrycode" id="country" value="IN">India</option>
                           <option name="countrycode" id="country" value="US">USA</option>
                        </select>
                     </div>
                     <div id="country_error_msg" class="error-msg"></div>
                     <div id="passport_info_msg" class="red-info-msg" style="display: none;">
                        Indian citizens providing a foreign address have to upload a scanned copy of their
                        valid Indian Passport. If you provide an Indian address, passport copy will not be
                        needed.
                     </div>
                  </div>
                  <div id="passport_image_input" style="display: none;"
                     class="form-input personal-pays passport">
                     <label>Copy of Passport</label>
                     <input type="file" onchange="validatePassportImageFileSize(this)" name="passport_image" id="passport_image">
                     <div id="choosePassportFile" class="choose-file">Choose a file</div>
                     <!-- <div id="replacePassportFile" class="replace-file">Replace</div> -->
                     <input type="text" id="passportImageName" value="" name="" class="inputs input" spellcheck="false" data-ms-editor="true">
                     <div id="passport_size_msg" class="file-format">File formats: jpeg, jpg, png, pdf (upto
                        500kb)
                     </div>
                     <div id="passport_error_msg" class="error-msg"></div>
                  </div>
                  <div class="form-input personal-pays passport" style="display: none;"
                     id="passport_number_input">
                     <label>Passport Number</label>
                     <div class="input">
                        <input type="text" name="passport_number" placeholder="Passport Number" id="passport_number" value="" minlength="5" maxlength="30" onblur="validatePassportNumber()" spellcheck="false" data-ms-editor="true">
                     </div>
                     <div id="passport_number_error_msg" class="error-msg"></div>
                  </div>
               </div>
               <input type="hidden" id="is_structured" name="is_structured">
               <div class="block">
                  <div class="form-input personal-pays states state-option" id="select_state">
                     <label>State / Province / County</label>
                     <div class="select">
                        <!-- <select name="state_name" id="selected_state" style="pointer-events:none;" onchange="validateStateDetails()" onblur="validateStateDetails()" disabled="">
                           <option id="0">Select State</option>
                        </select> -->
                        <select name="state_name" id="selected_state">
                           <option id="0">Select State</option>
                        </select>
                     </div>
                     <div id="state_error_msg" class="error-msg"></div>
                  </div>
                  <div class="form-input personal-pays hidden-states state-option" id="input_state" hidden="">
                     <label>State / Province / County</label>
                     <div class="input">
                        <input type="text" name="state_name_text" placeholder="Enter State" id="state_name_text" value="" maxlength="50" onblur="validateStateDetails()" spellcheck="false" data-ms-editor="true">
                     </div>
                     <div id="state_error_msg_text" class="error-msg"></div>
                  </div>
                  <div class="form-input personal-pays citi-name" id="city_input">
                     <label>City</label>
                     <div class="input">
                        <input type="text" name="city" placeholder="Enter city" id="city" value="" minlength="3" maxlength="30" onblur="validatecity();" spellcheck="false" data-ms-editor="true">
                     </div>
                     <div id="city_error_msg" class="error-msg"></div>
                  </div>
               </div>
               <div class="block">
                  <div class="form-input personal-pays" id="address1_input">
                     <label>Address</label>
                     <div class="input">
                        <input type="text" name="addessline1" placeholder="Street, Locality" id="addessline1" value="" minlength="10" maxlength="200" onblur="validateAddress();" spellcheck="false" data-ms-editor="true">
                     </div>
                     <div id="address1_error_msg" class="error-msg"></div>
                  </div>
                  <div class="form-input personal-pays" id="zip_code_input">
                     <label>Pin / Zip Code</label>
                     <div class="input">
                        <input type="text" name="pincode" placeholder="Enter Pin / Zip Code" id="pincode" value="" minlength="3" maxlength="10" onblur="validatePincode();" spellcheck="false" data-ms-editor="true">
                     </div>
                     <div id="zip_error_msg" class="error-msg"></div>
                  </div>
               </div>
               <!--===============coontribute============-->
               <!--===============End coontribute============-->
               <div class="block">
                  <div class="form-input personal-pays pan-card" id="pancard_input" style="display: none;">
                     <label>PAN Number</label>
                     <div class="input">
                        <input type="text" name="pancard" placeholder="PAN number" id="pancard" value="" minlength="10" maxlength="10" onblur="validatePanCard();" spellcheck="false" data-ms-editor="true">
                     </div>
                     <div id="pancard_error_msg" class="error-msg"></div>
                     <div class="pan-terms" id="aadhar_checkbox" style="display: none;">
                        <label>
                           <input type="checkbox" name="show_aadhar" id="show_aadhar" onclick="showAadhar()">
                           <div class="checkbox"></div>
                           <a class="text" style="margin-top: 0px;">Please check this box if you do not have a PAN</a>
                        </label>
                     </div>
                  </div>
                  <div class="form-input personal-pays aadhar-card" id="aadhar_input" style="display: none;">
                     <label>Aadhaar Number</label>
                     <div class="input">
                        <input type="text" name="aadhar_card" placeholder="Aadhaar number" id="aadhar_card" value="" minlength="12" maxlength="12" onblur="validatePancardAadharFor80G();" spellcheck="false" data-ms-editor="true">
                     </div>
                     <div id="adharcard_error_msg" class="error-msg adharcard-error desktop-aadhar"></div>
                     <div id="adharcard_error_msg" class="error-msg adharcard-error"></div>
                  </div>
                  <div id="pancard_adhar_error_msg" class="error-msg pancard-error"></div>
               </div>
               <div class="block">
               </div>
               <div class="terms-message">
                  <div class="terms-message-checkbox">
                     <label>
                        <input type="checkbox" name="agree_tnc" id="agree_tnc" onclick="validateAgreeCheck()" checked="">
                        <div class="checkbox"></div>
                        <div class="text">
                           I Agree and accept that Donations are not refundable under any circumstances for <a href="https://www.msagritrust.org/terms-and-conditions/" target="_blank">https://www.msagritrust.org</a>
                           <div id="agree_tnc_error_msg" class="error-msg"></div>
                        </div>
                     </label>
                  </div>
                  <div class="terms-message-checkbox" id="agree_80g_tax_div" style="display: none;">
                     <label>
                        <input type="checkbox" name="no_80G_consent" id="no_80G_consent" onclick="validateNo80GConsentCheck()">
                        <div class="checkbox"></div>
                        <div class="text">
                           <div id="no_80G_consent_msg">I confirm that I would not like to avail tax benefits under 80G in India</div>
                           <div id="agree_no80g_consent_error_msg" class="error-msg"></div>
                        </div>
                     </label>
                  </div>
               </div>
               <div class="title" id="donation_message" style="display:none;"></div>
               <div class="contribution-rupees">
                  <p id="conversion_msg" class="text"></p>
                  <p class="text" id="conversion_amount_msg"></p>
               </div>
               <div class="access-point">
                  <!-- && $dataArr['donation_type'] != CAMPAIGN_DONATION -->
                  <div class="back-page" ><a href="{{route('donation')}}">BACK</a></div>
                  <!-- <div class="button payment primary">CONTINUE</div> -->
                  <button name="Submit" class="button contribute payment primary" type="submit">
                  <img src="{{ asset('assets/locked.svg')}}" class="lock-btn">Pay Securely
                  </button>
               </div>
               {{ Form::close() }}  
            </div>
         </div>
      </div>
   </div>
</div>
<!-- Footer -->
<footer class="text-center text-white">
    

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        © 2023 Copyright
        <a class="text-white" href="#">MS Agri Trust</a> |  
        <a class="text-white" href="https://www.msagritrust.org/terms-and-conditions/" target="_blank"> Terms & Condition</a> &nbsp;|  
        <a class="text-white" href="https://www.msagritrust.org/privacy-policy/" target="_blank">Privacy Policy</a>
    </div>
    <!-- Copyright -->
</footer>
<!-- Footer -->
@endsection
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.4/jquery.validate.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.4/jquery.validate.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js" integrity="sha512-pumBsjNRGGqkPzKHndZMaAG+bir374sORyzM3uulLV14lN5LyykqNk8eEeUlUkB3U0M4FApyaHraT65ihJhDpQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script type="text/javascript">
  $(document).ready(function(){
      $("#selected_country").change(function() {
        let id = $(this).val();
        // console.log(id);
          let _token = "{{csrf_token()}}"
        //   let data = {
        //       id, _token
        //   }
        $.ajax({
          type : "get",
          url : "{{url('/states')}}",
          // data,
            success : function(response) {
              let options = "";   
              for (var i = 0; i < response.length; i++) {
                      options += "<option value = '" + response[i].id + " '>" + response[i].name + " </option>";
                  }
              document.getElementById("selected_state").innerHTML = options;
            },
            error : function(error){
              console.log(error);
              swal("Please try again");
            }
        })
      }); 
  })
</script>
