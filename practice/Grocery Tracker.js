let G1,G2,G3;

function CalculateAmount(G1,G2,G3){
    G1=parseFloat(document.getElementById("Grocery-1").value);
    G2=parseFloat(document.getElementById("Grocery-2").value);
    G3=parseFloat(document.getElementById("Grocery-3").value);
    let amount=G1+G2+G3;
    document.getElementById("sum").innerHTML=`The total amount is:$ ${amount}`;
}
