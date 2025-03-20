const containerE1 =document.querySelector(".container");

const careers =["Learner","Web Developer","Coder","Blogger"];
let careerIndex=0;
let characterIndex=0;

updateText()

function updateText(){
    characterIndex++;
    containerE1.innerHTML=` <h1>I am a ${careers[careerIndex].slice(0,characterIndex)}</h1>`;
   
    if(characterIndex===careers[careerIndex].length){
        careerIndex++
        characterIndex=0;
    }

    if(careerIndex==careers.length){
        careerIndex=0;
    }
    setTimeout(updateText,400);
}
