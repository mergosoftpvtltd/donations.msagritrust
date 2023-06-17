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
        Schema::create('donation', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('donation_type');
            $table->string('amount');
            $table->integer('period')->nullable();
            $table->integer('emi_date')->nullable();
            $table->boolean('gift')->default(0); 
            $table->string('gift_recipient_name')->nullable();
            $table->string('gift_certificate_name')->nullable();
            $table->string('gift_personal_message')->nullable();
            $table->boolean('email_gift')->default(0); 
            $table->timestamps();
            $table->index('donation_type');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('donation');
    }
};
