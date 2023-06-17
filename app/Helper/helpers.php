<?php
use Illuminate\Support\Facades\Redirect;
use App\Services\PayUService\Exception;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Auth;
use Illuminate\Routing\UrlGenerator;

use App\Models\Countries;
use App\Models\Cities;
use App\Models\States;




 function countries($id = null, $type=null)
    {
        if ($id != null && $type == null) {
            return Countries::where('id', '==', $id)->where(['flag' => 1])->select('name','phonecode', 'id')->get();
        } elseif ($id != null && $type != null) {
            return Countries::where('id', '==', $id)->where(['flag' => 1])->select('name','phonecode', 'id')->get();
        } else {
            return Countries::where(['flag' => 1])->select('name','phonecode','id')->get();
        }
    }

     function states($id = null, $type=null)
    {
        if ($id != null && $type == null) {
            return States::where('id', '==', $id)->where(['flag' => 1])->select('name', 'id')->get();
        } elseif ($id != null && $type != null) {
            return States::where('id', '==', $id)->where(['flag' => 1])->pluck('name', 'id');
        } else {
            return States::where(['flag' => 1])->pluck('name', 'id');
        }
    }

 function cities($id = null, $type=null)
    {
        if ($id != null && $type == null) {
            return Cities::where('id', '==', $id)->where(['flag' => 1])->select('name', 'id')->get();
        } elseif ($id != null && $type != null) {
            return Cities::where('id', '==', $id)->where(['flag' => 1])->pluck('name', 'id');
        } else {
            return Cities::where(['flag' => 1])->pluck('name', 'id');
        }
    }



    

