function convertir() {
    let valore = parseInt (document.getElementById("valor").value );
    let resultado = 0;
    let dolar = 280;
    let Euro = 259;
    let Bitcoin = 256225038;
    
    if (document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("Tus ahorros en dolares: $" + resultado.toFixed(3));
    }
    else if (document.getElementById("dos").checked){
        resultado = valore / Euro;
        alert("Tus ahorros en Euros: €" + resultado.toFixed(3));
    }
    else if (document.getElementById("tres").checked){
        resultado = valore / Bitcoin;
        alert("Tus ahorros en Bitcoin: ฿" + resultado.toFixed(7));
    }
    else {
        alert ("Se debe completar todos los requirimientos")
    }


}