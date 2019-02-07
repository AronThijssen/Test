<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TestTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) { //creeërt een tabel met de naam projects

            /* gebruik php artisan migrate om de veranderingen door te voeren naar de database
             * gebruik php artisan migrate:rollback om de veranderingen ongedaan te maken
             * gebruik php artisan migrate:fresh om alle migrations weg te halen
             * */

            $table->increments('id'); // maakt een row aan met eigenschap ID

            $table->text('description'); // maakt een row aan met eigenschap description

            $table->string('title'); // '' title

            $table->timestamps(); // '' timestamps

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects'); // dropt de tabel als hij al bestaat
    }
}
