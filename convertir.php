<?php
header('Access-Control-Allow-Origin: *');
if( $_REQUEST['operacion']=='may' ){
    echo strtoupper( $_REQUEST['texto']);
}
else if( $_REQUEST['operacion']=='min' ){
    echo strtolower( $_REQUEST['texto']);
}
else{
    echo $_REQUEST['texto'];
}
?>