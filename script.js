//no navegador o js tem window

console.log(window.screen);

window.document.body.innerHTML="<p> OLÁ </p>"
document.body.style.backgroundColor="gray"
//div
let div=document.createElement("div");
let pnome=document.createElement("p");
pnome.innerHTML="Informe seu nome"
div.appendChild(pnome);

document.body.appendChild(div);
div.appendChild(document.createElement("input"))

//campo peso
div.appendChild(document.createElement("br"));
temp=document.createElement("label");
temp.innerHTML="peso"
div.appendChild(temp);
temp=document.createElement("input");
temp.id="inputPeso"
div.appendChild(temp)

//campo altura
div.appendChild(document.createElement("br"));
temp=document.createElement("label");
temp.innerHTML="altura"
div.appendChild(temp);
temp=document.createElement("input");
temp.id="inputAltura"
div.appendChild(temp)

//add botao
div.appendChild(document.createElement("br"))
tmp=document.createElement ("button");
tmp.id="btnCalcular"
tmp.innerHTML="calcular"
div.append(tmp)

temp.addEventlistener("click",()=>{
    inputPeso=document.getElementById("inputPeso")
        inputPeso=document.getElementById("inputAltura")
        peso=Number.parseFloat(inputPeso.value)
        altura=Number.parseFloat(inputAltura.value)
        imc=peso/(altura*altura);
        console.log(imc)
        result=document.createElement("p")
        result.innerHTML=imc
        div.appendChild(result);
});