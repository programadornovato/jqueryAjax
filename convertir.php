<?php
header('Access-Control-Allow-Origin: *');
if( isset($_POST['nombre']) && isset($_POST['puesto']) ){
    echo "Nombre:".$_POST['nombre']." <br> Puesto:".$_POST['puesto'];
}


?>