@extends('layouts.app')
@section('content')
<nav class="navbar navbar-expand-lg navbar-light bg-light">
   <!-- Container wrapper -->
   <div class="container" style="width: 100%">
      <!-- Navbar brand -->
      <a class="navbar-brand " href="#">
         <img src="{{ asset('mobile-msat-logo.png')}}" alt="" class="d-inline-block align-text-top">
      </a>
      <!-- Toggle button -->
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
         <!-- Left links -->
         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
               <a class="nav-link" href="{{route('login')}}">Login</a>
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
   <div class="container" id="donation_summary">
   </div>
   <div class="online-contribution p-6">
      <div class="online-donation step-1" id="donate_process">
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
            <div class="title">Step 1 of 4 : <span>Donation</span></div>
         </div>
         <div class="donate-error" id="error_donation_msg">
            @if($errors->any())
            <div class="alert alert-danger">
               <ul>
                  @foreach($errors->all() as $error)
                  <li>{{ $error }}</li>
                  @endforeach
               </ul>
            </div>
            @endif
         </div>
         <div class="amount-package">
            <div class="tab-block" id="frequency-div">
               <div class="row">
                  <div class="col-sm-12 col-md-6 col-lg-6">
                     <label class="tab-1" style="width: 100%">
                        <input type="radio" name="freq" id="freq" value="0" onchange="changePaymentType()">
                        <div class="radio">
                           <div class="span">Give One-Time</div>
                        </div>
                     </label>
                  </div>
                  <div class="col-sm-12 col-md-6 col-lg-6">
                     <label class="tab-1" style="width: 100%">
                        <input type="radio" name="freq" value="1" id="freq" onchange="changePaymentType()"
                           checked="checked">
                        <div class="radio">
                           <div class="span">Give Monthly</div>
                        </div>
                     </label>
                  </div>
               </div>
            </div>
            <div class="indian-rupe" id="main_div">
               <div class="indian-rupees" id="recurring_currency" style="display:none">
                  <span class="current-amt">Currency</span>
                  <p class="selct">Indian Rupees</p>
               </div>
               <input type="hidden" class="per-tree-block" id="per_tree_msg" value="42">
               <input type="hidden" id="donation_currency" value="">
               <div class="form" id="main-amount-div">
                  <input type="hidden" id="initiative_name" value="cauvery-calling">
                  {{ Form::model($data, ['route' => $route, 'id' => 'user-form-question', 'method' => $method]) }}
                  {{ Form::hidden('country_ip', '', ['id' => 'country_ip']) }}
                  {{ Form::hidden('payment_type', 'online', ['id' => 'payment_type']) }}
                  {{ Form::hidden('lang', 'en', ['id' => 'lang']) }}
                  {{ Form::hidden('session_set', 0, ['id' => 'session_set']) }}
                  {{ Form::hidden('outreach_redirect_url', '', ['id' => 'outreach_redirect_url']) }}
                  {{ Form::hidden('donate_for', 'plant-trees', ['id' => 'donate_for']) }}
                  {{ Form::hidden('donation_msg_name', '', ['id' => 'donation_msg_id']) }}
                  {{ Form::hidden('default_donation_tree', '', ['id' => 'default_donation_tree']) }}
                  {{ Form::hidden('default_amount', '', ['id' => 'default_amount']) }}
                  <div class="ammount-block" id="amount_package" style="">
                     <div class="row shadow-sm">
                        <div class="col-sm-12 col-md-12 col-lg-6">
                           <label class="amount amt-block currency-blocks currency_INR 0_trees" id="amount_block"
                              style="width: 40%">
                              <input type="radio" class="donation_trees" name="donation_trees" id="donation_trees_0"
                                 value="100" onclick="changeAmountGiftATree()">
                              <div class="radio">
                                 <div class="span">100</div>
                              </div>
                              {{ Form::hidden('default_amount', 100, ['id' => 'gift_rupees_0','class' => 'rupees']) }}
                              {{ Form::hidden('donation_amount', 100, ['id' => 'donation_amount_0','class' =>
                              'gift_donation_amount']) }}
                              {{ Form::hidden('donation_msg', 'Your contribution of rs 100 is greatly appreciated',
                              ['id' =>
                              'donation_msg_0','class' => 'donation_msg']) }}
                              {{ Form::hidden('gift_donation_trees', '100', ['id' => 'gift_donation_trees_0','class' =>
                              'gift_donation_trees']) }}
                           </label>
                           <label class="amount amt-block currency-blocks currency_INR 1_trees" id="amount_block"
                              style="width: 40%">
                              <input type="radio" class="donation_trees" name="donation_trees" id="donation_trees_1"
                                 value="200" onclick="changeAmountGiftATree()">
                              <div class="radio">
                                 <div class="span">200</div>
                              </div>
                              {{ Form::hidden('default_amount', 200, ['id' => 'gift_rupees_1','class' => 'rupees']) }}
                              {{ Form::hidden('donation_amount', 200, ['id' => 'donation_amount_1','class' =>
                              'gift_donation_amount']) }}
                              {{ Form::hidden('donation_msg', 'Your contribution of rs 200 is greatly appreciated',
                              ['id' =>
                              'donation_msg_1','class' => 'donation_msg']) }}
                              {{ Form::hidden('gift_donation_trees', '200', ['id' => 'gift_donation_trees_1','class' =>
                              'gift_donation_trees']) }}
                           </label>
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-6">
                           <label class="amount amt-block currency-blocks currency_INR 2_trees" id="amount_block"
                              style="width: 40%">
                              <input type="radio" class="donation_trees" name="donation_trees" id="donation_trees_2"
                                 value="500" onclick="changeAmountGiftATree()">
                              <div class="radio">
                                 <div class="span">500</div>
                              </div>
                              {{ Form::hidden('default_amount', 500, ['id' => 'gift_rupees_2','class' => 'rupees']) }}
                              {{ Form::hidden('donation_amount', 500, ['id' => 'donation_amount_2','class' =>
                              'gift_donation_amount']) }}
                              {{ Form::hidden('donation_msg', 'Your contribution of rs 500 is greatly appreciated',
                              ['id' =>
                              'donation_msg_2','class' => 'donation_msg']) }}
                              {{ Form::hidden('gift_donation_trees', '500', ['id' => 'gift_donation_trees_2','class' =>
                              'gift_donation_trees']) }}
                           </label>
                           <label class="amount amt-block" id="amt-block" style="width: 40%">
                              <input type="radio" name="donation_trees" id="radio_amount" class="radio_custom_amount"
                                 onclick="setCustomGTAmount();">
                              <div class="radio radio-line">
                                 <div class="span"><span class="hido">Enter amount</span></div>
                                 {{ Form::text('custom_amount', '', ['id' => 'custom_amount','placeholder' => 'Enter #
                                 of
                                 Trees', 'class' => 'allownumericwithoutdecimal donation_custom_amount','minlength' =>
                                 "1",
                                 'maxlength' => "8", 'spellcheck' => "false", 'data-ms-editor' => "true"]) }}
                              </div>
                              <input type="hidden" class="rupees-amt" id="amount-span" value="42">
                              {{ Form::hidden('rupees_amt', 42, ['id' => 'amount-span','class' => 'rupees-amt']) }}
                              <div class="error" id="invalidAmount"></div>
                           </label>
                        </div>
                     </div>


                     <div class="final-amount total-amount" id="display_donation_msg" style="display: none;">
                     </div>
                     <div class="tick-mark gift" style="display: none;">
                        <div class="agree">
                           <label>
                              <input type="checkbox" name="gift_check" id="gift_check" onclick="showGiftForm();">
                              <div class="checkbox"></div>
                              <div class="text">This donation is a gift</div>
                           </label>
                        </div>
                     </div>
                  </div>
                  <div class="donate-monthly monthly-recurry recurring" style="">
                     <div class="donet-subtitle">Donate monthly for the next:</div>
                     <div class="monthly-block error">
                        <div class="row shadow-sm">
                           <div class="col-sm-12 col-md-16 col-lg-12">
                              <label class="monthly amt-block">
                                 <input type="radio" name="installments" id="installments"
                                    onclick="changeRecurringPaymentInstallments(12)">
                                 <div class="radio">
                                    <div class="span"><span>1</span> Year</div>
                                 </div>
                                 <!-- <div class="pay"> <div class="rupees">&#x20B9;</div> -->
                                 <!-- <span class="money">&#x20B9; &nbsp; <span>5000</span></span></span></div> -->
                              </label>
                              <label class="monthly amt-block">
                                 <input type="radio" name="installments" id="installments"
                                    onclick="changeRecurringPaymentInstallments(36)">
                                 <div class="radio">
                                    <div class="span"><span>3</span> Years</div>
                                 </div>
                                 <!-- <div class="pay"><div class="rupees">&#x20B9;</div>
                              <span class="money"> &#x20B9; &nbsp; <span>5000</span></span> </span></div>-->
                              </label>
                              <label class="monthly amt-block">
                                 <input type="radio" name="installments" id="installments"
                                    onclick="changeRecurringPaymentInstallments(72)">
                                 <div class="radio">
                                    <div class="span"><span>6</span> Years</div>
                                 </div>
                                 <!--<div class="pay"> <div class="rupees">&#x20B9;</div>
                              <span class="money">&#x20B9; &nbsp; <span>5000</span></span> </span></div>-->
                              </label>
                           </div>
                           <div class="col-sm-12 col-md-8 col-lg-12">
                              <label class="monthly amt-block">
                                 <input type="radio" name="installments" id="installments"
                                    onclick="changeRecurringPaymentInstallments(120)">
                                 <div class="radio">
                                    <div class="span"><span>10</span> Years</div>
                                 </div>
                                 <!-- <div class="pay"> <div class="rupees">&#x20B9;</div>                                             <span class="money"> &#x20B9; &nbsp; <span>5000</span></span></span></div> -->
                              </label>
                              <label class="monthly amt-block" id="installment_block">
                                 <input type="radio" name="installments" id="radio_installments"
                                    class="radio_custom_installments" onclick="setCustomInstallments()">
                                 <div class="radio">
                                    <div class="span"><span class="hido">Enter # of Months</span></div>
                                    <input type="text" class="allownumericwithoutdecimal" id="custom_installments"
                                       name="installments" placeholder="Enter # of Months" minlength="1" maxlength="3"
                                       spellcheck="false" data-ms-editor="true">
                                 </div>
                                 <!-- <div class="pay"><div class="rupees">&#x20B9;</div>
                              <span class="money-amt">&#x20B9; &nbsp; <span></span></span></div> -->
                                 <div class="error-msg" id="no_of_months_error_msg"></div>
                              </label>
                           </div>
                        </div>
                        <div class="error-msg" id="installment_donation_msg"></div>
                     </div>
                     <!--  <div class="final-amount total-amount error" id="installment_donation_msg" style=""><div class="text error"></div></div> -->
                     <div class="monthly-blog">
                        <div class="head">Please enter day of the month you would like to donate on</div>
                        <div class="month-select-form">
                           <div class="form-input month" id="day_of_month_input">
                              <div class="select">
                                 <select id="dayOfMonth" name="dayOfMonth" onchange="changeDayOfMonth();">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                 </select>
                              </div>
                              <div class="error-msg" id="day_of_month_error_msg"></div>
                           </div>
                        </div>
                     </div>
                     <!-- <div class="note"><span>Note</span>: Recurring Donation can be cancelled any time.</div> -->
                     <div class="note-monthly" id="recurring_donation_msg"></div>
                  </div>
                  <div class="donate-gift">
                     <div class="form" id="gift_details" style="display:none;">
                        <div class="block">
                           <div class="form-input personal-gifts" id="full_name_input">
                              <label>Recipient Name</label>
                              <div class="input">
                                 <input type="text" name="gift_name" id="full_name" value=""
                                    placeholder="Enter recipient’s name" onblur="validateFullName();" maxlength="30"
                                    spellcheck="false" data-ms-editor="true">
                              </div>
                              <div id="full_name_error_msg" class="error-msg"></div>
                           </div>
                           <div class="form-input personal-gifts" id="donors_name_input">
                              <label>Your name as it will appear on the certificate</label>
                              <div class="input">
                                 <input type="text" name="full_name" id="donor_name" value=""
                                    placeholder="Enter your name" onblur="validateDonorName();" maxlength="30"
                                    spellcheck="false" data-ms-editor="true">
                              </div>
                              <div id="donor_name_error_msg" class="error-msg"></div>
                           </div>
                        </div>
                        <div class="block">
                           <div class="form-input personal-gifts message" id="message_input">
                              <label>Personal Message</label>
                              <div class="textarea">
                                 <textarea id="txt_question" name="txt_question" value=""
                                    placeholder="Type your message here" spellcheck="false"
                                    data-ms-editor="true"></textarea>
                              </div>
                              <div id="message_error_msg" class="error-msg"></div>
                              <div class="sucess-msg">sucess</div>
                              <span class="content-left">This message will appear in the message to the
                                 recipient.</span>
                           </div>
                           <div class="form-input personal-gifts" id="certi_email_input">
                              <label>Email donation certificate to</label>
                              <div class="recomend">
                                 <label>
                                    <input type="radio" name="mail_me" id="mail_me" value="1"
                                       onclick="manageMailRadioCheck()">
                                    <div class="radio"></div>
                                    <div class="text">Me</div>
                                 </label>
                                 <label>
                                    <input type="radio" name="mail_me" id="mail_me" value="0"
                                       onclick="manageMailRadioCheck()">
                                    <div class="radio"></div>
                                    <div class="text">Recipient &amp; Me</div>
                                 </label>
                                 <div id="mail_check_error_msg" class="error-msg error-message"></div>
                              </div>
                              <div class="recipient" style="display:none;" id="certi_email_div">
                                 <label>Recipient Email</label>
                                 <div class="input">
                                    <input type="text" name="recepient_mail" id="certi_email" value=""
                                       placeholder="Enter the recipient’s email address"
                                       onblur="validateCertificateEmail();" spellcheck="false" data-ms-editor="true">
                                 </div>
                                 <div id="certi_email_error_msg" class="error-msg"></div>
                              </div>
                              <div class="preview-block">
                                 <a href="#" target="_blank">
                                    <div class="preview-certificate"><img src="./assets/preview-certificate.svg"
                                          class="certify-btn">Preview Sample Certificate
                                    </div>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="access-point">
                     {{ Form::submit('Submit', ['class' => 'button payment primary','id' => 'continue']) }}
                  </div>
                  <div class="notice">
                     <div class="online-notice">
                        <ul>
                           <li class="caca-recurring" style=""> Donations for Msagri trust 360 are
                              tax-deductible under Section 80G for Indian Tax Payers.
                           </li>
                           <li class="caca-one-time" style="display: none;"> Donations for Ms Agri Trust 360
                              are tax-deductible under Section 80G for Indian Tax Payers.
                           </li>
                           <li>Donations are not refundable.</li>
                           <li class="caca-recurring" style="">Monthly donations: The first donation will
                              be debited as per the mandate, for donations made using the Net-banking
                              payment method, the first donation may be a little delayed due to the bank
                              approval process. When the monthly donation date lies between 29th to 31st
                              of the month, the donation may be debited at the end of the month.
                           </li>
                           <li class="caca-recurring" style="">The recurring monthly donation can be
                              stopped at any time by <a class="click-link" href="javascript:void(0)"
                                 onclick="setRedirectURL(&quot;/en/my-account&quot;);loginSignup(0);">clicking
                                 here</a>
                           </li>
                           <!-- <li class="caca-recurring" style="display:none;">Monthly Donation option may be stopped any time.</li> -->
                           <li class="caca-recurring" style=""> Monthly donation option is not available
                              for fundraising campaigns.
                           </li>
                           <!-- <li>US Residents: All donations made online will be through Isha Foundation Inc. Funds will be internally transferred to Cauvery Calling. All donations are eligible for tax benefits under Sec 501(c)(3).</li> -->
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <input type="hidden" name="is_recurring" id="is_recurring" value="1">
         <input type="hidden" name="no_of_months" id="no_of_months" value="">
         <input type="hidden" name="day_of_month" id="day_of_month" value="30">
         <input type="hidden" name="remaining_months_for_recurring" id="remaining_months_for_recurring" value="107">
         <input type="hidden" name="hidden_donation_msg" id="hidden_donation_msg" value="">
         <input type="hidden" name="hidden_donation_amount" id="hidden_donation_amount" value="">
         <input type="hidden" name="hidden_donation_description" id="hidden_donation_description" value="1000 Trees">
         <input type="hidden" name="hidden_donation_title" id="hidden_donation_title"
            value="Make Your Contribution Online to Save Cauvery">
         <input type="hidden" name="hidden_donation_currency" id="hidden_donation_currency" value="INR">
         <input type="hidden" name="hidden_donation_step" id="hidden_donation_step" value="1">
         <input type="hidden" name="hidden_donate_purpose_id" id="hidden_donate_purpose_id" value="CVC-IOR">
         <input type="hidden" name="initiative_short_code" id="initiative_short_code" value="CVC">
         <input type="hidden" name="initiative" id="initiative" value="cauvery-calling">
         <input type="hidden" name="donation_type" id="donation_type" value="1">
         <input type="hidden" name="campaign_id" id="campaign_id" value="">
         <input type="hidden" name="campaign_name" id="campaign_name" value="">
         <input type="hidden" name="sapling_cost" id="sapling_cost" value="">
         <!-- <input type="hidden" name="sapling_cost" value=""> -->
         {{ Form::close() }}
      </div>
   </div>
</div>

<!-- Footer -->
<footer class="text-center text-white">


   <!-- Copyright -->
   <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2023 Copyright
      <a class="text-white" href="#">MS Agri Trust</a> | <a class="text-white"
         href="https://www.msagritrust.org/terms-and-conditions/" target="_blank"> Terms & Condition</a> &nbsp;|
      <a class="text-white" href="https://www.msagritrust.org/privacy-policy/" target="_blank">Privacy Policy</a>
   </div>
   <!-- Copyright -->
</footer>
<!-- Footer -->
@endsection