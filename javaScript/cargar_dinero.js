const nuevosBilletes = document.querySelectorAll(".cargar-numeros");
const cargarDinero = document.getElementById("cargarDinero");


function valorTotalAgregado(t){
    if(t == 0){
        pantalla.innerHTML = `Valor total: $${total}`;
    }else{
        pantalla.innerHTML = `Valor total: $${t}`;
    }
}
let valorBilletes = 0;
cargarDinero.addEventListener("submit",(e)=>{
    e.preventDefault();
    let array = [];
    for (numeros of nuevosBilletes) {
        if(numeros.value == "") {
            numeros.value = "0"
        }
        if(numeros.value == "0"){
            valorBilletes = 0;
        }
        array.push(numeros.value);
        numeros.value = "";

    }
    for (let i = 0; i < billetes.length; i++) {
        billetes[i] = billetes[i] + parseInt(array[i]);
        valorBilletes += billetes[i] * valores[i];
    }
    if(valorBilletes == total){
        valorBilletes = 0;
    }
    valorTotalAgregado(valorBilletes);
})