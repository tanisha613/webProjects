const containerE1 = document.querySelector(".container");
const traits =["Strength","Power","Fire","Storm","Peace Maker"];
let traitsChar=0;
let traitsIndex=0;

updateText();
function updateText(){
    traitsIndex++;
    containerE1.innerHTML= `<h1>Women are the ${traits[traitsChar].slice(0,traitsIndex)}</h1>`;
    if(traitsIndex===traits[traitsChar].length){
        traitsChar++;
        traitsIndex=0;
    }
    if(traitsChar===traits.length){
        traitsChar=0;
    }
    setTimeout(updateText,400)
}