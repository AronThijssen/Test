<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Project; // Zorgt er voor dat je alleen Project aan hoeft te roepen op lijn 13, anders moet je het schrijven als \App\Project:all();

class ProjectsController extends Controller
{
    public function index() // Deze functie laadt een view uit het mapje resources/views/projects
    {
        $projects = Project::all(); // haalt alle bestaande projecten uit de projects tabel op. Dit is Eloquent



        return view('projects.index', ['projects' => $projects]); // dit returned de code van het bestand
    }

    public function create()
    {

        return view('projects.create'); //returned de aangemaakte view

    }

    public function show()
    {

    }

    public function edit()
    {

    }

    public function update()
    {

    }

    public function destroy()
    {

    }

    public function store()
    {

        $project = new Project();

        $project->title = request('title');

        $project->description = request('description');


        $project->save(); //slaat de requests op in een nieuw project via de project variabele

        return redirect('/projects'); //stuurt je terug naar de projects pagina wanneer je submit
        //return request()->all(); dit geeft alle requests terug op de site

    }
}
