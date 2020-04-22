function myFunction() {
    var x, y, suma, text;
    valor_pactado = document.getElementById("valor_pactado").value;

    valor_boleta_liquido = parseInt(valor_pactado) / 0.8925;
    valor_boleta_bruto = parseInt(valor_pactado);
    valor_retencion_liquido = parseInt(valor_boleta_liquido) * 0.1075;
    valor_retencion_bruto = parseInt(valor_boleta_bruto) * 0.1075;

    valor_efectivo_liquido = parseInt(valor_pactado);
    valor_efectivo_bruto = parseFloat(valor_pactado) - valor_retencion_bruto;

    document.getElementById("valor_boleta_liquido").innerHTML = new Intl.NumberFormat("de-DE").format(valor_boleta_liquido.toFixed(0));
    document.getElementById("valor_boleta_bruto").innerHTML = new Intl.NumberFormat("de-DE").format(valor_boleta_bruto.toFixed(0));
    document.getElementById("valor_retencion_liquido").innerHTML = new Intl.NumberFormat("de-DE").format(valor_retencion_liquido.toFixed(0));
    document.getElementById("valor_retencion_bruto").innerHTML = new Intl.NumberFormat("de-DE").format(valor_retencion_bruto.toFixed(0));
    document.getElementById("valor_efectivo_liquido").innerHTML = new Intl.NumberFormat("de-DE").format(valor_efectivo_liquido.toFixed(0));
    document.getElementById("valor_efectivo_bruto").innerHTML = new Intl.NumberFormat("de-DE").format(valor_efectivo_bruto.toFixed(0));
}