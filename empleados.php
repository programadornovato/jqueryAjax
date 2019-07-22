<?php
header('Access-Control-Allow-Origin: *');
$servidor = "localhost";
$usuario = "eugenio";
$contrasena = "123456";
$basededatos = "empleados";

$mysqli = new mysqli($servidor,$usuario,$contrasena,$basededatos);
if( $_REQUEST['accion']=="leer" ){
$arreglo = array();
$consulta="SELECT id,nombre,puesto,edad FROM empleados";
if ($result = $mysqli->query($consulta)) {
    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
            $arreglo[] = $row;
    }
    echo json_encode($arreglo);
}
$result->close();
}
else if($_REQUEST['accion']=="insertar"){
    $sql="INSERT into empleados (nombre,puesto,edad) values ('".$_POST["nombre"]."','".$_POST["puesto"]."','".$_POST["edad"]."')";
    if( $mysqli->query($sql) ===TRUE ){
        echo "1";
    }else{
        echo "0";
    }
}
else if($_REQUEST['accion']=="editar"){
    $sql="UPDATE empleados set nombre='".$_POST["nombre"]."',puesto='".$_POST["puesto"]."',edad='".$_POST["edad"]."' where id='".$_POST["id"]."';";
    if( $mysqli->query($sql) ===TRUE ){
        echo "1";
    }else{
        echo "0";
    }
}
$mysqli->close();
