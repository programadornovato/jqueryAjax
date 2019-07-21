$(document).ready(function () {
    $('#convertir').click(function (e) { 
        e.preventDefault();
        let opracion=$('#opracion').val();
        let texto=$('#texto').val();
        $.get("http://localhost/ajax/convertir.php",
        {'operacion':opracion,'texto':texto},
        function(data){
            console.log(data);
            $('#listaEmpleados').html(data);
        });
    });
});