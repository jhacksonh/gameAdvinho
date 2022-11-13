let carta1 = [[1,3,5,7],[9,11,13,15],[17,19,21,23],[25,27,29,31],[33,35,37,39],[41,43,45,47],[49,51,53,55],[57,59,61,63]];
let carta2 = [[2,3,6,7],[10,11,14,15],[18,19,22,23],[26,27,30,31],[34,35,38,39],[42,43,46,47],[50,51,54,55],[58,59,62,63]];
let carta3 = [[4,5,6,7],[12,13,14,15],[20,21,22,23],[28,29,30,31],[36,37,38,39],[44,45,46,47],[52,53,54,55],[60,61,62,63]];
let carta4 = [[8,9,10,11],[12,13,14,15],[24,25,26,27],[28,29,30,31],[40,41,42,43],[44,45,46,47],[56,57,58,59],[60,61,62,63]];
let carta5 = [[16,17,18,19],[20,21,22,23],[24,25,26,27],[28,29,30,31],[48,49,50,51],[52,53,54,55],[56,57,58,59],[60,61,62,63]];
let carta6 = [[32,33,34,35],[36,37,38,39],[40,41,42,43],[44,45,46,47],[48,49,50,51],[52,53,54,55],[56,57,58,59],[60,61,62,63]];
let carta = document.querySelector(".carta");
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
        if(opc){//verifica se o jogador deseja jogar novamente;
            soma = 0;
            tem = false;
            cartasMostradas = [];
        }else{
            cartasMostradas.length = 7;
        }
    }
    if(opc){//inicia o jogo;
        alert("Pense em um número de 1 a 63!\nClique em ok assim que pensar ");
        Manipulacao();
    }
}

function PreencherCarta(sequencia){
    carta.innerHTML = "";
    let nums = "";
    for(let i = 0; i < 8; i++){
        nums = document.createElement("div");
        nums.classList.add("nums");
        for(let j = 0; j < 4; j++){
            nums.innerHTML += `<div><p>${sequencia[i][j]}</p></div>`
        }
        carta.appendChild(nums);
    }
}

function Manipulacao(){//está função é responsavel pela logica do jogo;
    if(tem){//verifica se o número pensado tem na carta;
        soma += num;
    }

    let numCarta = Math.floor(Math.random() * 6);//variável que retorna um número aleatório referente que será apresentada;
    while(cartasMostradas.includes(numCarta)){
        numCarta = Math.floor(Math.random() * 6);
        if(cartasMostradas.length == 6){
            alert("Seu número é : "+soma);
        }
        if(cartasMostradas.length >= 6){ //esse if responsavel pelo reinicio do jogo;
            rtrn = true;
            numCarta = 0;
            break;
        }
    }

    cartasMostradas.push(numCarta);//guarda as cartas que já foram exibidas para não se repetirem;

    //atenção, a varíavel "num junto com soma" são o segrado desse jogo;
    switch(numCarta){//alternancia entre carta dependendo do numéro recebido (exibi a carta referente ao número);
        case 0:
            PreencherCarta(carta1);
            num = 1; 
            break;
        case 1:
            PreencherCarta(carta2);
            num = 2;
            break;
        case 2:
            PreencherCarta(carta3);
            num = 4;
            break;
        case 3:
            PreencherCarta(carta4);
            num = 8;
            break;
        case 4:
            PreencherCarta(carta5);
            num = 16;
            break;
        case 5:
            PreencherCarta(carta6);
            num = 32;
            break;
    }
    if(rtrn){//retorna jogo ao inicio;
        rtrn = false;
        inicio();
    }
}


//botões de ação;
btnNao.addEventListener("click", ()=>{
    tem = false;
    Manipulacao();
});
btnSim.addEventListener("click", ()=>{
    tem = true;
    Manipulacao();
});