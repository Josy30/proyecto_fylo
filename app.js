//funcion que carga las animaciones de las habilidades

function cargarAnimaciones(){
    $(function(){
        $('.chart1').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart2').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart3').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
    })
}

function efectoHabilidades(){
    const skills = document.getElementById("habilidades");
    const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("chart");
        habilidades(0).classList.add("chart1");
        habilidades(1).classList.add("chart2");
        habilidades(2).classList.add("chart3");

        cargarAnimaciones();
    }
}

//defecto el scrolling para aplicar la animacion de las habilidades

window.onscroll = function(){
    efectoHabilidades();
}

//funcion que muestra el menu resposive

function resposiveMenu(){
    let x= document.getElementById("nav");
    if(x.className ===""){
        x.className = "responsive";

        //creamos el elemento que cierra el menu
        let span = document.createElement("span");
        span.innerHTML = "x";
        document.getElementById("nav").appendChild(span);

        //quitamos el boton eliminar cuando se hace click sobre este
        span.onclick = function(){
            x.className = "";
            span.remove();
        }
    }else{
        x.className="";
    }
}

//este codigo es para agregar una funcion a cada liks del menu
//responsive
//cuando se presione en cualquiera de los links del menu debe deseparecer el menu
const link = document.querySelectorAll("#nav a");
for(i=0; i< links.length;i++){
    links(i).onclick = function(){
        const x = document.getElementById('nav');
        x.className = "";

        //removemos el boton eliminar
        btnEliminar = document.querySelector("#nav span");
        btnEliminar.remove();
    }
}