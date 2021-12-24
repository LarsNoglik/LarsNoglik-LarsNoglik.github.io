const text = "Hallo";
const targetElement = document getElementById("sentence");

window.onload = function (){
    letterByLetter(text,targetElement);
};

async function letterByLetter(text,targetElement){
    //1. Splitt Text in char-Array
       var arrayCharText = text.toCharArray();


       var outputstringOld = "";
       var outputstringNew = "";
    //2. For each char
       
       for (char c : arrayCharText){
           //2.1 In and Out 2 Times |
             outputstringNew += "I";
             
             for( var i = 0; i < 2 ; i++){
                 targetElement.innerHTML= outputstringNew;
                 await sleep(1000);
                 targetElement.innerHTML= outputstringOld;
             }
           //2.2 add char to displayed String in targetElement
       }
       
}