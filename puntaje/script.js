const marco=document.querySelector('.puntaje');
let puntajeactual=0;
const puntajelleno =5;

const htmlmapa=Array.from(Array(puntajelleno)).map((item,i)=>{
    return`<div class="item item-${i}" data-pos="${i}"></div>`;
});
marco.innerHTML=htmlmapa.join("");

document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("mouseover", e =>{
        
        const posicion = item.getAttribute("data-pos");
        if(puntajeactual === parseInt(posicion)+1){
            return;
        }
        
        document.querySelectorAll(".item").forEach(cuadrov =>{
            if(cuadrov.classList.contains("select")){
                cuadrov.classList.remove("select");
            }
        })

        for(let i =0; i<=posicion;i++){
            const cuadro=document.querySelector(`.item-${i}`);
            if(!cuadro.classList.contains("select")){
                cuadro.classList.add("select");
            }
        }
        puntajeactual=parseInt(posicion)+1;
    });
    item.addEventListener("click",(e)=>{
        const posicion=item.getAttribute("data-pos");
        puntajeactual=parseInt(posicion)+1;
        console.log(puntajeactual);
    })
});