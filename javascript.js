$(document).ready(function () {
    $("#leer").click(function (e) { 
        e.preventDefault();
        $.get("archivo.txt",function(data,textStatus,jqXHR){
            console.log(data);
            //console.log(textStatus);
            //console.log(jqXHR);
        });
    });
    $('#leerEmpleado').click(function (e) { 
        e.preventDefault();
        $.get("empleados.json",function(data){
            console.log(data);
            $('#datosEmpleado').html(`
            Nombre: ${data.nombre} <br>
            Puesto: ${data.puesto} <br>
            Edad: ${data.edad} <br>
            `);
        });
    });
    $('#leerArregloEmpleado').click(function (e) { 
        e.preventDefault();
        $('#listaEmpleados').html('');
        $.get("empleados.json",function(data){
            //console.log(data);
            $.each(data, function (index, item) { 
                 $('#listaEmpleados').html($('#listaEmpleados').html()+`
                 <li> ${item.nombre} -- ${item.puesto} </li>
                 `);
            });
        });
    });
    $('#leerGetSON').click(function (e) { 
        e.preventDefault();
        /*
        $.getJSON("empleados.txt",function(data){
            data=JSON.parse(data);
            console.log(data);
        });
        */
        $.getJSON("empleados.json",function(data){
            console.log(data.empleados);
            $('#listaEmpleados').html('');
            $.each(data.temporales, function (index, item) { 
                $('#listaEmpleados').html($('#listaEmpleados').html()+`
                <li> ${item.nombre} -- ${item.puesto} </li>
                `);
           });
        });
    });

    let empleados;
    $.getJSON("empleados.json",function(data){
        empleados=data.empleados;
    });
    $('#nombre').keyup(function (e) { 
        $('#listaEmpleados').html('');
        let nombre=$(this).val();
        $.each(empleados, function (indexInArray, item) { 
            if(item.nombre.toLowerCase().indexOf(nombre.toLowerCase())!==-1){
                $('#listaEmpleados').html($('#listaEmpleados').html()+`
                <li> ${item.nombre} -- ${item.puesto} </li>
                `);
            }
        });
    });

});