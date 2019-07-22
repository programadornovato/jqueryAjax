$(document).ready(function () {
    $('#leerEmpleados').click(function (e) { 
        e.preventDefault();
        $('#listaEmpleados').html('');
        $.getJSON('http://localhost/ajax/empleados.php',
        {"accion":"leer"},
        function(data){
            //console.log(data);
            $.each(data, function (index, item) { 
                 $('#listaEmpleados').html($('#listaEmpleados').html()+`
                 <li> ${item.nombre} -- ${item.puesto} -- ${item.edad} </li>
                 `);
            });
        });
    });
    $('#crearEmpleado').click(function (e) { 
        e.preventDefault();
        let nombre=$('#nombre').val();
        let puesto=$('#puesto').val();
        let edad=$('#edad').val();
        $.post('http://localhost/ajax/empleados.php',
        {"accion":"insertar","nombre":nombre,"puesto":puesto,"edad":edad},
        function(data){
            if(data==="1"){
                $('#nombre').val('');
                $('#puesto').val('');
                $('#edad').val('');        
            }
        });

    });

});