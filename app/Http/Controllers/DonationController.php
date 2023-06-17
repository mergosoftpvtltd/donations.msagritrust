<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cities;
use App\Models\User;
use App\Models\States;
use App\Models\Donation;
use App\Models\Personalinfo;
use App\Traits\Common;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Hash;
use Session;


class DonationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    use Common;
    public function index()
    {
        $title = 'Manage Textbook Library';
        $data = new Donation;
        $route = 'donationstore';
        $method = 'POST';
        $breadcrum = 'Add A=Donation';   
        
        return view('donation',compact('title', 'data', 'route', 'method', 'breadcrum'));
    }

    public function donationStore(Request $request)
    {
        // dd($request);
        if($request->donation_type==2)
        {
            $validatedData = $request->validate(
                [
                'donation_type'=>'required',
                'donation_trees' => 'required',
                'dayOfMonth'=>'required',
                'no_of_months' => 'required',
                'is_recurring'=>'required',
                ]
            );
        }
        else
        {
            $validatedData = $request->validate(
                [
                'donation_type'=>'required',
                'donation_trees' => 'required',
                'dayOfMonth'=>'required',
                'is_recurring'=>'required',
                ]
            );
        }

        
        
        $donation_gift = 0;
        // input forr single and monthly
        $donation_type = $request->donation_type;
        $amount = $request->donation_trees;
        Session::put('donation_type',$donation_type);
        Session::put('donation_amount',$amount);

        //Single time
        if($donation_type==1)
        {
            if($request->gift_check == "on"){
                $donation_gift = 1;
                Session::put('donation_gift',$donation_gift);
            }
            if($donation_gift==1)
                {
                    $recipient_name = $request->gift_name;
                    $certificate_name = $request->full_name;
                    $message = $request->txt_question;
                    $recipient_mail = $request->recepient_mail;
                    Session::put('recipient_name',$recipient_name);
                    Session::put('certificate_name',$certificate_name);
                    Session::put('message',$message);
                    Session::put('recipient_mail',$recipient_mail);
                }
        }

        // Monthly
        $period = $request->no_of_months;
        $emi_date = $request->dayOfMonth;
        Session::put('period',$period);
        Session::put('emi_date',$emi_date);

        // dd($period,$emi_date);
        return redirect("personal");
        return redirect()->back()->withErrors($validatedData);
    }

    /**
     * Display a listing of the resource.
     */
    public function personalDetail()
    {
        $title = 'Manage Textbook Library';
        $data = new Donation;
        $route = 'paymentgateway';
        $method = 'POST';
        $breadcrum = 'Add Personal Details';   
        
        return view('personal',compact('title', 'data', 'route', 'method', 'breadcrum'));
        
    }
    
    
    public function paymentGateway(Request $request)
    {
        
        
       
        $request->validate(
            [
            'first_name'=>'required',
            'last_name' => 'required',
            'email'=>'required',
            ]
        );
        $user_cnt = User::where('email',$request->email)->get();
        if(count($user_cnt)>0)
        {
            
            $user_id= $user_cnt[0]->id;
        }
        else
        {
            $user = new User();
            $user->name = $request->first_name." ".$request->last_name;
            $user->email = $request->email;
            $user->password = Hash::make('password');
            $user->save();
            $user_id=$user->id;
        }

        $donation = new Donation;
        $donation->donation_type = Session::get('donation_type');
        $donation->amount = Session::get('donation_amount');
        $donation->gift = Session::get('donation_gift') ? Session::get('donation_gift') : 0 ;
        // $donatio->$donation_gift = Session::get('donation_gift');
        $donation->gift_recipient_name = Session::get('recipient_name');
        $donation->gift_certificate_name = Session::get('certificate_name');
        $donation->gift_personal_message = Session::get('message');
        $donation->email_gift = Session::get('recipient_mail') ? Session::get('recipient_mail') : 0;
        $donation->period = Session::get('period');
        $donation->emi_date = Session::get('emi_date');
        $donation->user_id = $user_id;
        $donation->save();
        $donation_id = $donation->id;
        // dd(Session::get('donation_type'));
        $personal_info = new Personalinfo;
        $personal_info->donation_id = $donation_id;
        $personal_info->firstname = $request->first_name;
        $personal_info->lastname = $request->last_name;
        $personal_info->email = $request->email;
        $personal_info->country_code = $request->country_code;
        $personal_info->phone_no = $request->phone_number;
        if($request->nationality=="yes"){
            $personal_info->citizen = 1;
        }else {
            $personal_info->citizen = 0;

        }
        // $personal_info->nationalaity = $request->nationality;
        $personal_info->nationalaity = $request->fcra_nationality;
        // $personal_info->passport_number = $request->passport_number;
        if($request->want_80G=="yes"){
            $personal_info->tax_benefit = 1;
        }else {
            $personal_info->tax_benefit = 0;
        }
        $personal_info->country = $request->country;
         
        $personal_info->state = $request->state_name;
        $personal_info->city = $request->city;
        $personal_info->address = $request->addessline1;
        $personal_info->pincode = $request->pincode;
        $personal_info->pancard = $request->pancard;
        $personal_info->aadhaar = $request->aadhar_card;

        // $personal_info->id_proof_image = $request->passport_image;
        if($request->hasFile('passport_image')){
            $file = $request->file('passport_image');
            $extension = $file->getClientOriginalExtension(); // you can also use file name
            $fileName = time().'.jpg';
            $path = public_path().'\images';
            $uplaod = $file->move($path,$fileName);
            $personal_info->id_proof_image = $fileName;
        }
        // $personal_info->profile_photo = $request->profile_photo;
        $personal_info->updates_required = 0;
        $personal_info->save();

        

        


        
        // Set the required parameters
    $merchant_id = env('MERCHANT_ID');//'2361664';
    $access_code =  env('ACCESS_CODE');//'AVTG67KE15BN74GTNB';
    $working_key = env('WORKING_KEY');//'749172346F28634BC65A8070BFB84B25';
    $order_id = '12434345';
    $amount = '100';
    $currency = 'INR';
    $redirect_url = env('REDIRECT_URL');//'http://donations.msagritrust.org/ccavResponseHandler.php';

    // Create a GuzzleHttp client
    $client = new Client();

    // Set the CCAvenue API endpoint URL
    $url = env('CCAVENUE_API_ENDPOINT');//'https://secure.ccavenue.com/transaction/transaction.do';

    // Set the POST data
    $data = [
        'command' => 'initiateTransaction',
        'merchant_id' => $merchant_id,
        'access_code' => $access_code,
        'working_key ' => $working_key,
        'order_id' => $order_id,
        'amount' => $amount,
        'currency' => $currency,
        'redirect_url' => $redirect_url,
        'cancel_url' => $redirect_url,
        'language' => 'EN'
    ];

    // Send the POST request to CCAvenue
    $response = $client->post($url, ['form_params' => $data]);
    
    // Get the response body
    $body = (string) $response->getBody();
    
    // Display the payment form to the user
    return view('payment_form', ['formHtml' => $body]);

        return view("payment_form");
    }

    public function states($id = null, $type=null)
    {
        if ($id != null && $type == null) {
            return States::where('id', '==', $id)->where(['flag' => 1])->select('name', 'id')->get();
        } elseif ($id != null && $type != null) {
            return States::where('id', '==', $id)->where(['flag' => 1])->pluck('name', 'id');
        } else {
            // return States::pluck('name', 'id');
            return States::get()->toArray();
        }
    }

    public function storePersonalInfo(Request $request)
    {
        $data=Cities();
        $data->firstname = $request->first_name;
        $data->lastname = $request->last_name;
        $data->email = $request->email;
        $data->country_code = $request->country_code;
        $data->phone_no = $request->phone_no;
        $data->citizen = $request->citizen;
        $data->nationalaity = $request->nationalaity;
        $data->tax_benefit = $request->tax_benefit;
        $data->country = $request->country;
        $data->state = $request->state;
        $data->city = $request->city;
        $data->address = $request->address;
        $data->pancard = $request->pancard;
        $data->aadhaar = $request->aadhaar;
        $data->id_proof_image = $request->id_proof_image;
        $data->profile_photo = $request->profile_photo;
        $data->updates_required = $request->updates_required;
        $data->save();

        
    }


    public function makePayment(Request $request)
{

        $merchant_id = env('MERCHANT_ID');//'2361664';
    $access_code =  env('ACCESS_CODE');//'AVTG67KE15BN74GTNB';
    $working_key = env('WORKING_KEY');//'749172346F28634BC65A8070BFB84B25';
    
    $redirect_url = env('REDIRECT_URL');//'http://donations.msagritrust.org/ccavResponseHandler.php';

      
    $url = env('CCAVENUE_API_ENDPOINT');

    // Set the required parameters
    $merchant_id = env('MERCHANT_ID');;
    $access_code = env('ACCESS_CODE');
    $working_key = env('WORKING_KEY');
    $order_id = '12434345';
    $amount = '100';
    $currency = 'INR';
    $redirect_url =  env('REDIRECT_URL');

    // Create a GuzzleHttp client
    $client = new Client();

    // Set the CCAvenue API endpoint URL
    $url =env('CCAVENUE_API_ENDPOINT');

    // Set the POST data
    $data = [
        'command' => 'initiateTransaction',
        'merchant_id' => $merchant_id,
        'access_code' => $access_code,
        'working_key ' => $working_key,
        'order_id' => $order_id,
        'amount' => $amount,
        'currency' => $currency,
        'redirect_url' => $redirect_url,
        'cancel_url' => $redirect_url,
        'language' => 'EN'
    ];

    // Send the POST request to CCAvenue
    $response = $client->post($url, ['form_params' => $data]);
    
    // Get the response body
    $body = (string) $response->getBody();
    dd($body);
    // Display the payment form to the user
    return view('payment_form', ['formHtml' => $body]);
}
}
