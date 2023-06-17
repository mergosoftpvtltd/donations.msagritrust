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
        Schema::table('donation', function (Blueprint $table) {
            $table->text('country_ip')
                    ->after('email_gift')
                    ->nullable();
            $table->text('payment_type')
                    ->after('email_gift')
                    ->nullable();
            $table->integer('lang')
                    ->after('payment_type')
                    ->nullable();
            $table->text('session_set')
                    ->after('lang')
                    ->nullable();
            $table->text('outreach_redirect_url')
                    ->after('session_set')
                    ->nullable();
            $table->text('donate_for')
                    ->after('outreach_redirect_url')
                    ->nullable();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('donation', function (Blueprint $table) {
            $table->dropColumn(array_merge([
                'country_ip',
                'payment_type',
                'lang',
                'session_set',
                'outreach_redirect_url',
                'donate_for',
            ]));
        });
    }
};
