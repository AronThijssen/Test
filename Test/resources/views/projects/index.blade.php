<!DOCTYPE html>

<html>

<head>

</head>

<body>

    <h1>Hallo daar</h1>


    @foreach ($projects as $project) {{-- for each loop die door alle records gaat --}}

        <li>{{ $project->title }}</li> {{-- Dit haalt alle records op met de titel van een row en print deze op de pagina--}}

    @endforeach
</body>

</html>
