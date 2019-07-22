<?php
header('Access-Control-Allow-Origin: *');
$servidor = "localhost";
$usuario = "eugenio";
$contrasena = "123456";
$basededatos = "empleados3";

$mysqli = new mysqli($servidor,$usuario,$contrasena,$basededatos);
$arreglo = array();
$consulta="SELECT id,nombre,puesto,edad FROM empleados";
if ($result = $mysqli->query($consulta)) {
    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
            $arreglo[] = $row;
    }
    echo json_encode($arreglo);
}

$result->close();
$mysqli->close();
