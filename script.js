function calcularMelhorOpcao()
{
    var precoGasolina = parseFloat(document.getElementById('gasolina').value);
    var precoAlcool = parseFloat(document.getElementById('alcool').value)

    if(!isNaN(precoGasolina) && !isNaN(precoAlcool) && precoAlcool > 0 && precoAlcool > 0){  // verificação para que o usuario nao insira valores nulos
        var ratio = precoGasolina* 0.7  // o álcool tem em média 70% da energia da gasolina
        document.getElementById('resultado').innerHTML = precoAlcool < ratio ? "Álcool compensa mais!" : "Gasolina compensa mais!" 
        // portanto o valor ideal do álcool deverá ser menor que o valor obtido dessa conta
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Insira valores válidos!"
    }

    


}
