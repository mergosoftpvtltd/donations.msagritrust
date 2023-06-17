@extends('layouts.admin')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    @foreach($donations as $key => $don)
				
				<a href="{{ url('generate-pdf/'.$don->id) }}" class="btn btn-xs btn-info pull-right">Download PDF</a>
                @endforeach
					
					
                </div>
               
		   </div>
        </div>
		
    </div>
</div>


@endsection
