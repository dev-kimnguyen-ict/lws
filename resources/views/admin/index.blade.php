<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{config('app.name')}}</title>
    <style href={{ mix('css/admin.app.css', buildPath()) }}></style>
    <script>
        window.Laravel = {!! json_encode(['csrfToken' => csrf_token()]) !!};
    </script>
</head>
<body>
<div id="app">
</div>
<script src="{{ mix('js/manifest.js', buildPath()) }}"></script>
<script src="{{ mix('js/vendor.js', buildPath()) }}"></script>
<script src="{{ mix('js/admin.app.js', buildPath()) }}"></script>
</body>
</html>
