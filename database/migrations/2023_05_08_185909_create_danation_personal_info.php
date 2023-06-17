<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('danation_personal_info', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('donation_id')->nullable();
            $table->string('firstname');
            $table->string('lastname');
            $table->string('email');
            $table->string('country_code');
            $table->string('phone_no');
            $table->boolean('citizen')->default(1);
            $table->integer('nationalaity')->nullable();
            $table->boolean('tax_benefit')->default(0);
            $table->integer('country')->nullable();
            $table->integer('state')->nullable();
            $table->string('city');
            $table->string('address')->nullable();
            $table->string('pincode')->nullable();
            $table->string('pancard')->nullable();
            $table->string('aadhaar')->nullable();
            $table->string('id_proof_image')->nullable();
            $table->string('profile_photo')->nullable();
            $table->boolean('updates_required')->default(0);
            $table->timestamps();
            $table->index('firstname');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('danation_personal_info');
    }
};
