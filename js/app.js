//investigar como cargar primero todo el HTML
//interactuar con un botón para los temas claro y oscuro

function cambio()
{
    let cuerpo=document.querySelector("body");
    if(cuerpo.classList.contains("dark"))
    {
        cuerpo.classList.remove("dark");
    }
    else{
        cuerpo.classList.add("dark");
    }
}