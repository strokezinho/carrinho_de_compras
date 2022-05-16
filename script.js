const body       = document.querySelector('body');
const main       = document.createElement('main'); 
const section    = document.createElement('section');
const divCenter  = document.createElement('div');
const divTop     = document.createElement('div');
const infoItem   = document.createElement('p');
const infoPreco  = document.createElement('p');
const divInfo    = document.createElement('div');
const divInfo1   = document.createElement('div');
const divInfo2   = document.createElement('div');
const ul         = document.createElement('ul');
const li0        = document.createElement('li');
const li1        = document.createElement('li');
const li2        = document.createElement('li');
const li3        = document.createElement('li');
const li4        = document.createElement('li');
const li5        = document.createElement('li');
const div        = document.createElement('div');
const nomeItem0  = document.createElement('p');
const nomeItem1  = document.createElement('p');
const nomeItem2  = document.createElement('p');
const valorItem0 = document.createElement('p');
const valorItem1 = document.createElement('p');
const valorItem2 = document.createElement('p');
const divTotal   = document.createElement('div');
const totalP     = document.createElement('p');
const totalP2    = document.createElement('p');
const divButtom  = document.createElement('div');
const buttom     = document.createElement('button');
const buttomP    = document.createElement('p');


divCenter.id = 'div_center';
divTop.id = 'div_Top';
divInfo.classList.add('div_info');
divInfo1.classList.add('div_info');
divInfo2.classList.add('div_info');
divTotal.classList.add('div_total');
buttom.classList.add('btn')
buttomP.id = "btnP";
divButtom.id = 'div_buttom';
const finalizarCompra = "Finalizar"

main.appendChild(section);
section.appendChild(divCenter);
body.appendChild(main);
divCenter.appendChild(ul);
ul.appendChild(li0);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);
li0.appendChild(divTop);
li1.appendChild(divInfo);
li2.appendChild(divInfo1);
li3.appendChild(divInfo2);  
li4.appendChild(divTotal);
li5.appendChild(divButtom);    
divTop.appendChild(infoItem); 
divTop.appendChild(infoPreco);                               
divInfo.appendChild(nomeItem0);
divInfo.appendChild(valorItem0);
divInfo1.appendChild(nomeItem1);
divInfo1.appendChild(valorItem1);
divInfo2.appendChild(nomeItem2);
divInfo2.appendChild(valorItem2);
divTotal.appendChild(totalP);
divTotal.appendChild(totalP2);
divButtom.appendChild(buttom);
buttom.appendChild(buttomP);


buttom.addEventListener("click", finalizarCompraMsg)

function finalizarCompraMsg(){
    alert("Finalizou a compra")
}




let products = [
    {
        id: 0,
        name: "Camisa",
        value: 20,
    },
    {
        id: 1,
        name: "Blusa",
        value: 50,
    },
    {
        id: 2,
        name: "Calça",
        value: 30
    }
]  

let total = 0
for(let i = 0; i <products.length; i++){
    const produto = products[i]
    total += produto.value
}

const itemStr  = "Item";

const precoStr = "Preço";

const totalStr = "Total";


nomeItem0.innerHTML   = `<strong>${products[0].name}</strong>` 

nomeItem1.innerHTML   = `<strong>${products[1].name}</strong>` 

nomeItem2.innerHTML   = `<strong>${products[2].name}</strong>` 

valorItem0.innerHTML  = `R$:${products[0].value}` 

valorItem1.innerHTML  = `R$:${products[1].value}` 

valorItem2.innerHTML  = `R$:${products[2].value}` 

totalP.innerHTML      = `<strong>${totalStr}</strong>`

totalP2.innerHTML     = `<strong>R$:${total}</strong>`

infoItem.innerHTML    = `${itemStr}`

infoPreco.innerHTML   = `${precoStr}`

buttomP.innerHTML     = `Finalizar Compra`



