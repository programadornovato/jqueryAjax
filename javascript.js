$(document).ready(function () {
    $("#leer").click(function (e) { 
        e.preventDefault();
        $.get("archivo.txt",function(data,textStatus,jqXHR){
            console.log(data);
            console.log(textStatus);
            console.log(jqXHR);
        });
    });
});