<!DOCTYPE html>
<html>
<head> 
    <style>
    html {
        font-family: Arial, sans-serif;
        font-size: 14px;
        color: #333;
    }
    tr,th, td {
        border-color: #FF0000;
        padding: 20px;
       
    }
    tr.noBorder td {
    border: 0;
    }
    u {    
        border-bottom: 1px dotted #000;
        text-decoration: none;
        letter-spacing: 2px;
        
    }
    .amt_box {
        width: 60px;
        border: 3px solid red;
        padding: 10px;
        margin: 10px;
        }
    </style>  
</head>
<body>

<table width="100%" border="1" style="border-collapse: collapse;border-color: #FF0000;" cell-padding="10px" cell-spacing="10px">
<tr>
    <td width="25%" style="text-align: center;"><img src="{{ asset('mobile-msat-logo.png')}}"></td>
    <td width="45%" style="text-align: center;">Velliangiri Foot hills,<br>
Ishana Vihar Post,<br>
Coimbatore - 641 114</td>
    <td width="30%" style="text-align: center;">
    Date: 01-04-2023 <br>
Receipt No: io24-EAA-000051
    </td>
</tr>
<tr style=" line-height: 2rem;">
    <td colspan="3" width="80%" >
    Received with thanks from <u> &nbsp;&nbsp;&nbsp;{{$donation->firstname}} {{$donation->lastname}}, {{$donation->address}}  {{$donation->city}} - {{$donation->pincode}}, {{$donation->name}}, {{$donation->country}} &nbsp;&nbsp;&nbsp;&nbsp;</u> Email: <u>&nbsp;&nbsp;&nbsp; {{$donation->email}} &nbsp;&nbsp;&nbsp;&nbsp;</u> Mobile: <u>&nbsp;&nbsp;&nbsp;
    {{$donation->phone_no}}&nbsp;&nbsp;&nbsp;&nbsp; </u> the sum of Rupees <u> &nbsp;&nbsp;&nbsp; {{$donation->amount}} Only&nbsp;&nbsp;&nbsp;&nbsp; </u> by Online Transaction RefNo.: <u> &nbsp;&nbsp;&nbsp;IOD1680332428-8839 &nbsp;&nbsp;&nbsp;&nbsp;</u> dated <u>&nbsp;&nbsp;&nbsp; {{date("d M Y", strtotime($donation->created_at))}} &nbsp;&nbsp;&nbsp;&nbsp;</u>
 towards Donation for Cauvery Calling Project.

    </td>
</tr>
<tr class="noBorder">
    <td>
        <div class="amt_box">Rs {{$donation->amount}}</div>
    </td>
    <td colspan="2" style="text-align: right;">
        digitally signed by MS Agri Trust<br>
        Date : 2023-05-22<br>
        Reason : Digitally Signed<br>
        <b> Authorized Signatrory - MS Agri Trust </b><br>
    </td>
</tr>
</table>
<div>
    <ul>
        <li>Donation to Isha Outreach (PAN:AAATI 7085D) is exempted u/s 80-G of the Income Tax Act, 1961
vide C.No.327(666)/2010-11/CIT-III/CBE subject to furnishing of PAN by donor.</li>
 <li> This eReceipt is invalid in case of non-realization of cheque / money instrument or reversal of credit
card charge or reversal of amount for any reason.</li>
<li>For validating the digital signature, refer http://goo.gl/Yrbz4e</li>
    </ul>
</div>
   
   
</body>
</html>