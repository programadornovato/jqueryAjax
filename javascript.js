$(document).ready(function () {
    $('form').submit(function (e) { 
        e.preventDefault();
        let nombre=$('#nombre').val();
        let puesto=$('#puesto').val();
        $.post("http://localhost/ajax/convertir.php", 
        {'nombre':nombre,'puesto':puesto},
            function (data, textStatus, jqXHR) {
                $('#res').parent().removeClass('d-none');
                $('#res').html(data);
            }
        ).done(function(){
            $('#estado').html("Exito");
            $('#estado').addClass('alert-success');
            $('#estado').removeClass('d-none');
        }).fail(function(){
            $('#estado').html("Fallo");
            $('#estado').addClass('alert-danger');
            $('#estado').removeClass('d-none');
        }).always(function(){
            console.log("finalizo");
        });
    });
});