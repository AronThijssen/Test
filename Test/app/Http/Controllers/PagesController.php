<?php
/**
 * Created by PhpStorm.
 * User: ThA
 * Date: 2/6/2019
 * Time: 2:39 PM
 */
namespace App\Http\Controllers;


class PagesController extends Controller

{
    public function home() {

        return view('welcome', [

            'foo' => 'bar', /* Dit verstuurt data naar de home view, als je $foo gebruikt in de home view dan krijg je als result 'bar' te zien*/

            'tasks' => ['some task']  /*Dit maakt een array aan met in dit geval maar één row */

        ]);
    }

    public function contact() { /* Functie die de koppeling maakt naar de controller  */

        return view('contact');
    }

    public function about() { /* Functie die de koppeling maakt naar de controller  */

        return view('about');

    }
}
