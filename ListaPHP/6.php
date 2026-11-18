<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action = "" method = "GET">
        <label for="numero">Numero:</label>
        <input type="number" name="numero" >
        <input type="submit">
</form>
<?php

if(!isset($_GET['numero'])){
    exit();
}
$numero=$_GET['numero'];

function ePar($n){
    if ($n % 2 == 0){
        echo "par";
    }else{
        echo "impar";
    }
}
ePar($numero);
?>
</body>
</html>