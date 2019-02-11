<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*
 * GET /projects = index functie, showt alle projects
 *
 * GET /projects/create =  create functie, creeërt een project
 *
 * GET /projects/1 = show functie, laat er maar 1 zien
 *
 * POST /projects = store functie, slaat de projects op
 *
 * GET /projects/1/edit = edit functie, wijzig een project met gespecificeerd ID
 *
 * PATCH /projects/1 = update functie, update de gegevens van het project met ID = 1
 *
 * DELETE /projects/1 = destroy functie, delete het project met ID = 1
 * */


Route::resource('projects','ProjectsController');

//Route::get('/', 'PagesController@home');
//
//Route::get('/about', 'PagesController@about');
//
//Route::get('/contact', 'PagesController@contact');
//
//Route::get('/projects','ProjectsController@index');
//
//Route::get('/projects/create','ProjectsController@create');
//
//Route::get('/projects/{project}', 'ProjectsController@show');
//
//Route::post('/projects','ProjectsController@store'); /* dit geeft alle data door naar de projectscontroller public function store() */
//
//Route::get('/projects/{project}/edit','ProjectsController@edit');
//
//Route::patch('/projects/{project}','ProjectsController@update');
//
//Route::delete('/projects/{project}','ProjectsController@destroy');
