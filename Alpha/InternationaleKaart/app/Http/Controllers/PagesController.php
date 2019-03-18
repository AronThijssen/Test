<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function home()
    {
        return view('welcome')->with([
        'foo' => 'bar',
        'tasks' => 
            [
            'Ga naar stage',
            'Ga naar werk'
            ]
        ]);
    }
    
    public function information()
    {
        return view('information');
    }
    
    public function contact()
    {
        return view('contact');
    }
}
