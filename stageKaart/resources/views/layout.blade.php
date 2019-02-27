<!DOCTYPE html>

<html>

<head>

    <title>@yield('title','Laravel')</title>

</head>

<body>


    <ul>
        <li><a href="/">Home</a></li>
        <li> <a href="/edit">edit pagina</a></li>
    </ul>

    @yield('content')

</body>

</html>
