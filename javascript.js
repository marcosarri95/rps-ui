
function computerPlay(){
    let p = Math.floor(Math.random() * 3);
    switch (p){
        case 0:
            const res = document.querySelector('.R');
            res.classList.add("efecto");
            return "rock";
        break;
        case 1:
            const res2 = document.querySelector('.P');
            res2.classList.add("efecto");
            return "paper";
        break;
        default:
            const res3 = document.querySelector('.S');
            res3.classList.add("efecto");
            return "scissors";
    }
}

function seleccion(play, comp){
    switch(play){
        case "rock":
            if(comp == "paper"){
               const res = document.querySelector('.display');
               res.textContent = "PERDISTE! PAPEL gana a PIEDRAS!";
                return 0;
            }
            else if (comp == "scissors"){
               const res = document.querySelector('.display');
               res.textContent = "GANASTE! PIEDRA rompe a TIJERAS!";
              return 1;
            }
            else{
                const res = document.querySelector('.display');
                res.textContent = "EMPATE! PRUEBA DENUEVO!";
                return 3;
            }
        break;
        case "scissors":
            if(comp == "paper"){
               const res = document.querySelector('.display');
               res.textContent = "GANASTE! TIJERAS gana a PAPEL!";
                return 1;
            }
            else if (comp == "rock"){
               const res = document.querySelector('.display');
               res.textContent = "PERDISTE! PIEDRAS gana a TIJERAS!";
               return 0;
            }
            else{
               const res = document.querySelector('.display');
               res.textContent = "EMPATE! PRUEBA DENUEVO!";
               return 3;
            }
        break;
        default:
            if(comp == "rock"){
                const res = document.querySelector('.display');
               res.textContent = "GANASTE! PAPEL gana a PIEDRAS!";
                return 1;
            }
            else if (comp == "scissors"){
                const res = document.querySelector('.display');
               res.textContent = "PERDISTE! TIJERAS gana a PAPEL!";
                return 0;
            }
            else{
               const res = document.querySelector('.display');
               res.textContent = "EMPATE! PRUEBA DENUEVO!";
               return 3;
            }
    }
}

function finTransicion(e){
    e.target.classList.remove('efecto');
}

function eliminar(e){
    e.target.classList.remove('efecto2');
    e.target.classList.remove('cursor');
    
}

function puntaje(c){
    let i1;
    let i2;
    const result = document.querySelector('.score-c');
    const result2 = document.querySelector('.score-j');
    const res = document.querySelector('.display');
    i1 = Number(result.textContent);
    i2 = Number(result2.textContent);
   
        if(c == 0){
            i1++;
            result.textContent = String(i1);
        }
        else if(c == 1){
            i2++;
            result2.textContent = String(i2);
        }
        else{
            
        }
        if(((i1+i2 >= 5)&&(i1>i2))||(i1==3)){
            res.textContent = "PERDISTE! :( Pulse este recuadro para la revancha =D";
            //result.textContent = "0";
            //result2.textContent = "0";
            //alert("PERDISTE! D: :( Pulse el botón para la revancha");
        }
        else if(((i1+i2 >= 5)&&(i2>i1))||(i2==3)){
            res.textContent = "GANASTE! :( Pulse este recuadro para la revancha =D";
            //result.textContent = "0";
            //result2.textContent = "0";
            //alert("GANASTE! D: :( Pulse el botón para la revancha");
        }
        else{

        }
}


/// comienzo del código repetitivo

    
addEventListener('keydown', function(e) {
    
    const result = document.querySelector('.score-c');
    const result2 = document.querySelector('.score-j');
    const res = document.querySelector('.display');
    i1 = Number(result.textContent);
    i2 = Number(result2.textContent);

    if((i1+i2 >= 5)||(i1==3)||(i2==3)){

    }
    else{
    const elec = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(e.keyCode == 82){
        elec.classList.add('efecto');
        puntaje(seleccion("rock", computerPlay()));
    }
    else if(e.keyCode == 80){
        elec.classList.add('efecto');
        puntaje(seleccion("paper", computerPlay()));
    }
    else if(e.keyCode == 83){
        elec.classList.add('efecto');
        puntaje(seleccion("scissors", computerPlay()));
    }
    else{
        res.textContent = "TECLA INVÁLIDA, LAS CORRECTAS SON R, S y P!";
    }
}

});

addEventListener('transitionend',finTransicion,);
    
const mostrar = document.querySelectorAll('div');
    mostrar.forEach(div => div.addEventListener('mouseover', function(e) {
        let a = this.classList.value;
        //console.log(a);
        e.stopPropagation(); // stop bubbling!
        const result = document.querySelector('.score-c');
        const result2 = document.querySelector('.score-j');
        i1 = Number(result.textContent);
        i2 = Number(result2.textContent);

        if(a == "key-r"){
            if((i1+i2 >= 5)||(i1==3)||(i2==3)){
    
             }
            else{
                const elec1 = document.querySelector('.key-r');
                elec1.classList.add('efecto2');
                elec1.classList.add('cursor');
            }   
        }

        else if(a == "key-p"){

             if((i1+i2 >= 5)||(i1==3)||(i2==3)){
        
             }
            else{
                const elec2 = document.querySelector('.key-p');
                elec2.classList.add('efecto2');
                elec2.classList.add('cursor');
                }
        }

        else if(a == "key-s"){
            if((i1+i2 >= 5)||(i1==3)||(i2==3)){
    
            }
            else{
                const elec3 = document.querySelector('.key-s');
                elec3.classList.add('efecto2');
                elec3.classList.add('cursor');
            }
        }

        else if(a == "display"){
            if((i1+i2 >= 5)||(i1==3)||(i2==3)){
                const final = document.querySelector('.display');
                final.classList.add('efecto2');
                final.classList.add('cursor');
            }
            else{

            }   
        }

        else{

        }
    }));

    mostrar.forEach(div => div.addEventListener('click', function(e) {
        let a = this.classList.value;
        //console.log(a);
        e.stopPropagation();

        const result = document.querySelector('.score-c');
        const result2 = document.querySelector('.score-j');
        i1 = Number(result.textContent);
        i2 = Number(result2.textContent);

        if(a == "key-r efecto2 cursor"){
            if((i1+i2 >= 5)||(i1==3)||(i2==3)){
    
             }
            else{
                const elec1 = document.querySelector('.key-r');
                //elec1.classList.add('efecto');
                puntaje(seleccion("rock", computerPlay()));
            }   
        }

        else if(a == "key-p efecto2 cursor"){

             if((i1+i2 >= 5)||(i1==3)||(i2==3)){
        
             }
            else{
                const elec2 = document.querySelector('.key-p');
               // elec2.classList.add('efecto');
                puntaje(seleccion("paper", computerPlay()));
                }
        }

        else if(a == "key-s efecto2 cursor"){
            if((i1+i2 >= 5)||(i1==3)||(i2==3)){
    
            }
            else{
                const elec3 = document.querySelector('.key-s');
                //elec3.classList.add('efecto');
                puntaje(seleccion("scissors", computerPlay()));
            }
        }

        else if(a == "display efecto2 cursor"){
            if((i1+i2 >= 5)||(i1==3)||(i2==3)){
                const final = document.querySelector('.display');
                final.textContent = "Seleccione piedra, papel, o tijeras...";
                result.textContent = "0";
                result2.textContent = "0";
            }
            else{

            }   
        }

        else{

        }

    }));

    mostrar.forEach(div => div.addEventListener('mouseout', function(e) {
        this.classList.remove('efecto2');
        this.classList.remove('cursor');
    }));

    mostrar.forEach(div => div.addEventListener('transitionend', function(e) {
         this.classList.remove('efecto');       
    }));

   
