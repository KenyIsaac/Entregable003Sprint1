function calculateOrder(){
    var computers = parseInt(document.getElementById("computadores").value);
    var valorCompra = computers * 820000

    var descuento = 0;
	var total = 0;
	switch (true){
    case valorCompra >= 1640000 && valorCompra <= 3280000:
        total = valorCompra * ((15 + 100)/100);
        descuento = valorCompra * (15/100);
        document.getElementById("valorCompra").value = valorCompra;
        document.getElementById("valorDescuento").value = descuento;
        document.getElementById("total").value = total;
        document.getElementById("descuento_label").innerHTML += 
              "<label class='texto_descuento'>Su descuento fue del: "+15+"% </label>";
    break;
    case valorCompra > 3280000 && valorCompra <= 6560000:
        total = valorCompra * ((25 + 100)/100);
        descuento = valorCompra * (25/100);
        document.getElementById("valorCompra").value = valorCompra;
        document.getElementById("valorDescuento").value = descuento;
        document.getElementById("total").value = total;
        document.getElementById("descuento_label").innerHTML += 
              "<label class='texto_descuento'>Su descuento fue del: "+25+"% </label>";
    break;
    case valorCompra > 6560000 && valorCompra <= 9840000:
        total = valorCompra * ((35 + 100)/100);
        descuento = valorCompra * (35/100);
        document.getElementById("valorCompra").value = valorCompra;
        document.getElementById("valorDescuento").value = descuento;
        document.getElementById("total").value = total;
        document.getElementById("descuento_label").innerHTML += 
              "<label class='texto_descuento'>Su descuento fue del: "+35+"% </label>";
    break;
    default:
        document.getElementById("valorCompra").value = valorCompra;
        document.getElementById("valorDescuento").value = descuento;
        document.getElementById("total").value = valorCompra;
        document.getElementById("descuento_label").innerHTML += 
              "<label class='texto_descuento'>Su descuento fue del: "+0+"% </label>";
    break;
}	
}

