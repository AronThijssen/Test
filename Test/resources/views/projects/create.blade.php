<!DOCTYPE html>

<html>

<head>

</head>

<body>

    <h1>Creeër een niew project</h1>

    <form method="POST" action="/projects"> <!-- dit post alle gegevens naar de route in web.php -->

        {{ csrf_field() }}

        <div>

            <input type="text" name="title" placeholder="Project title">

        </div>

        <div>

            <textarea name="description" placeholder="Project description"></textarea>

        </div>

        <div>

            <button type="submit">Create Project</button>

        </div>
    </form>

</body>

</html>
