$(document).ready(function () {
    $('form').submit(function (e) { 
        e.preventDefault();
        let nombre=$('#nombre').val();
        let puesto=$('#puesto').val();
        $.post("http://localhost/ajax/convertir.php", 
        {'nombre':nombre,'puesto':puesto},
            function (data, textStatus, jqXHR) {
                $('#res').html(data);
            }
        );
    });
});