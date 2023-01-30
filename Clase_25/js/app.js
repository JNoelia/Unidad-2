
const parrafo = document.getElementById("demo");

//length text ="";

// for (let i = 0; i < 10; i++) {
//     text += + parrafo "<br>";
    
// }

let text = "";
const animes = [ "Cinderella Chef","Spy x family","SK8", "Nadie como Yoo" ];

for (let i = 0; i < animes.length; i++) {
    text += animes[i] + "<br>" + `<img src= "./imagenes/img${i}.jpg">`+ "<br>";
    
}

parrafo.innerHTML = text;

