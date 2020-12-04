const input = document.querySelector(".cajero-form-text");
const pantalla = document.querySelector(".cajero-pantalla");

let billetes = [
    de50 = 5,
    de10 = 10,
    de5 = 20,
    de1 = 50
];
const valores = [
    bill50 = 50,
    bill10 = 10,
    bill5 = 5,
    bill1 = 1
];

let total = billetes[0]*50 + billetes[1]*10 + billetes[2]*5 + billetes[3];


dineroDisponible(total);
function dineroDisponible(total){
    pantalla.innerHTML = `Dinero disponible: $${total}`;
}

const form = document.querySelector(".cajero-form");
form.addEventListener("submit",(e) =>{
    e.preventDefault();
    if(valorBilletes != 0){
        total = valorBilletes;
    }
    if(input.value <= total){
        let salidaBilletes = [
            billete50 = 0,
            billete10 = 0,
            billete5 = 0,
            billete1 = 0
        ];
        let solicitado = input.value;
        let aux;

        for (let i = 0; i < billetes.length; i++) {
            aux = Math.floor(solicitado / valores[i]);
            if(billetes[i] > aux){
            billetes[i] = billetes[i] - aux;
            solicitado = solicitado - (aux * valores[i]);
            salidaBilletes[i] = aux;
            }else{
             solicitado = solicitado - (billetes[i] * valores[i]);
             salidaBilletes[i] = billetes[i];
             billetes[i] = 0;   
            }
        }
        total = 0;
        let totalBilletes = 0;
       for (let i = 0; i < billetes.length; i++) {
        total += billetes[i]*valores[i]; 
        totalBilletes += salidaBilletes[i]*valores[i]    
       }
       
       pintar(total,salidaBilletes[0],salidaBilletes[1],salidaBilletes[2],salidaBilletes[3],totalBilletes);
    }else{
        alert("No tenemos suficiente dinero solicite un monto mas bajo.");
    }
    input.value = "";
})


const pintar = (total,d50,d10,d5,d1,tBilletes) =>{
    output = `Dinero disponible: $${total}<br>
            <br>
            <br>
            Billetes de $50: ${d50}<br>
            Billetes de $10: ${d10}<br>
            Billetes de $5: ${d5}<br>
            Billetes de $1: ${d1}<br>
            En Total es : ${tBilletes} `
    pantalla.innerHTML = output;
}; 


