let cartas = document.querySelectorAll(".carta");
let btnNao = document.querySelector(".btnNao");
let btnSim = document.querySelector(".btnSim");
let cartasMostradas = [];
let num = 0, soma = 0;
let tem = false, rtrn = false;
inicio();

function inicio(){
    let opc = true;
    if(soma > 0){
        opc = confirm("Quer brincar outra vez?");
        if(opc){
            soma = 0;
            tem = false;
            cartasMostradas = [];
        }else{
            cartasMostradas.length = 7;
        }
    }
    if(opc){
        alert("Pense em um número de 1 a 63!\nClique em ok assim que pensar ");
        Manipulacao();
    }
}

function Manipulacao(){
    if(tem){
        soma += num;
    }
    let numCarta = Math.floor(Math.random() * 6);
    while(cartasMostradas.includes(numCarta)){
        numCarta = Math.floor(Math.random() * 6);
        if(cartasMostradas.length == 6){
            alert("Seu número é : "+soma);
        }
        if(cartasMostradas.length >= 6){
            rtrn = true;
            numCarta = 0;
            break;
        }
    }
    cartasMostradas.push(numCarta);
    for(let i = 0;i<6;i++){
        cartas[i].style.display = "none";
    }
    switch(numCarta){
        case 0:
            cartas[0].style.display = "flex";
            num = 1;
            break;
        case 1:
            cartas[1].style.display = "flex";
            num = 2;
            break;
        case 2:
            cartas[2].style.display = "flex";
            num = 4;
            break;
        case 3:
            cartas[3].style.display = "flex";
            num = 8;
            break;
        case 4:
            cartas[4].style.display = "flex";
            num = 16;
            break;
        case 5:
            cartas[5].style.display = "flex";
            num = 32;
            break;
    }
    if(rtrn){
        rtrn = false;
        inicio();
    }
}
btnNao.addEventListener("click", ()=>{
    tem = false;
    Manipulacao();
});
btnSim.addEventListener("click", ()=>{
    tem = true;
    Manipulacao();
});