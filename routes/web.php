<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [App\Http\Controllers\DonationController::class, 'index']);
Route::get('/optimize', function () {
    Artisan::call('optimize:clear');
});

Route::get('mode/off', function(){
    if(Auth::user()->id == 1) {
        Artisan::call('down', [
		'--message' => 'We are doing some updates, we will be back in a few minutes.',
		'--allow' => request()->ip()
	]);

	return 'Mode off';
  }

})->middleware('role');

Route::get('mode/on', function(){
    if(Auth::user()->id == 1) {
	Artisan::call('up');
	return 'Mode on';
  }
})->middleware('role');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/donation', [App\Http\Controllers\DonationController::class, 'index'])->name('donation');
Route::post('/donationstore', [App\Http\Controllers\DonationController::class, 'donationStore'])->name('donationstore');
Route::post('/paymentgateway', [App\Http\Controllers\DonationController::class, 'paymentGateway'])->name('paymentgateway');
Route::get('/personal', [App\Http\Controllers\DonationController::class, 'personalDetail'])->name('personal');
Route::get('/makepayment', [App\Http\Controllers\DonationController::class, 'makePayment'])->name('makepayment');
Route::get('/states', [App\Http\Controllers\DonationController::class, 'states'])->name('states');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::controller(App\Http\Controllers\Auth\AuthOtpController::class)->group(function(){
    Route::get('otp/login', 'login')->name('otp.login');
    Route::post('otp/generate', 'generate')->name('otp.generate');
    Route::get('otp/verification/{user_id}', 'verification')->name('otp.verification');
    Route::post('otp/login', 'loginWithOtp')->name('otp.getlogin');
});

//Route::get('generate-pdf', [PDFController::class, 'generatePDF']);

Route::get('/generate-pdf/{id}', [App\Http\Controllers\PDFController::class, 'generatePDF'])->name('generatePDF');