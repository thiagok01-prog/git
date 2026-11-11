<h1> <?php echo "ola"; ?> </h1>

<?php
$valor=50;
echo "<p>" $valor "</p>";
echo "<p> $valor </p>";
echo '<p> $valor </p>';

$nome="João Marcelo";
echo $nome;

$array=""; //Declarando array como string
$array=array(); //como array
$array=["pera", "maçã","banana"]; //como a
echo "<br>";
print_r($array);

echo "<ul>";
for($i=0;$i<=count($array); $i++){
    echo "<li> $i $array [$i} </li>";
}
echo "</ul>"
?>