<?php

namespace App\Traits;

use App\Models\Countries;
use App\Models\Cities;
use App\Models\States;



trait Common
{
   

    public function countries($id = null, $type=null)
    {
        if ($id != null && $type == null) {
            return Countries::where('id', '==', $id)->where(['flag' => 1])->select('name', 'id')->get();
        } elseif ($id != null && $type != null) {
            return Countries::where('id', '==', $id)->where(['flag' => 1])->pluck('name', 'id');
        } else {
            return Countries::where(['flag' => 1])->pluck('name', 'id');
        }
    }

    public function states($id = null, $type=null)
    {
        if ($id != null && $type == null) {
            return States::where('id', '==', $id)->where(['flag' => 1])->select('name', 'id')->get();
        } elseif ($id != null && $type != null) {
            return States::where('id', '==', $id)->where(['flag' => 1])->pluck('name', 'id');
        } else {
            return States::where(['flag' => 1])->pluck('name', 'id');
        }
    }

    public function cities($id = null, $type=null)
    {
        if ($id != null && $type == null) {
            return Cities::where('id', '==', $id)->where(['flag' => 1])->select('name', 'id')->get();
        } elseif ($id != null && $type != null) {
            return Cities::where('id', '==', $id)->where(['flag' => 1])->pluck('name', 'id');
        } else {
            return Cities::where(['flag' => 1])->pluck('name', 'id');
        }
    }



    
}
