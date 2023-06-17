<?php
 namespace App\Http\Controllers;
 use Illuminate\Http\Request;
 use App\Models\Donation;
 use App\Models\Personalinfo;
 use PDF;
  
class PDFController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function generatePDF($id)
    {
        $donation = Donation::join('danation_personal_info', 'donation.id','danation_personal_info.donation_id')
                    ->join('tbl_states','danation_personal_info.state','tbl_states.id')
                    ->where('donation.id',$id)->first();
                   // dd($donation);
        $data = [
            'title' => 'Velliangiri Foothills,
						Ishana Vihar Post,
						Coimbatore - 641 114',
            'date' => date('m/d/Y')
        ];
          
        //return view('trust_recipt', compact('data','donation'));
        $pdf = PDF::loadView('trust_recipt', compact('data','donation'));
    
        return $pdf->download('TrustRecipt.pdf');
    }
}