const readlineSync = require('readline-sync');

// Personen

let sidar = {
    name: "Sidar",
    age: 29,
    excitement: 0,
    presents: [],
    nickSidar: "Scheremin", // mein Löwe
}
let endBoss ={
    name: "Rewsen",
    age: 28,
    favGift: "black tea",
    nick: "Delalamin", // meine schöne
}

class Passenger {
    constructor(type, age){
        this.type = type,
        this.age = age,
        this.excitement = () => Math.floor((Math.random() * 20) + 1)
    }
}

// Dices

const dices = () => Math.floor((Math.random() * 20) + 1);

// sleep



//Start grafics
console.log("   _____    __                       ______         _    \r\n  \/ __(_)__\/ \/__ _____  ___  ___    \/_  __\/______ _(_)__ \r\n _\\ \\\/ \/ _  \/ _ `\/ __\/ \/ _ \\\/ _ \\    \/ \/ \/ __\/ _ `\/ \/ _ \\\r\n\/___\/_\/\\_,_\/\\_,_\/_\/    \\___\/_\/\/_\/   \/_\/ \/_\/  \\_,_\/_\/_\/\/_\/\r\n                                                         \r\n"                  
);
console.log("                                     (@@@)     (@@@@@)\r\n                               (@@)     (@@@@@@@)        (@@@@@@@)\r\n                         (@@@@@@@)   (@@@@@)       (@@@@@@@@@@@)\r\n                    (@@@)     (@@@@@@@)   (@@@@@@)             (@@@)\r\n               (@@@@@@)    (@@@@@@)                (@)\r\n           (@@@)  (@@@@)           (@@)\r\n        (@@)              (@@@)\r\n       .-.\r\n       ] [    .-.      _    .-----.\r\n     .\"   \"\"\"\"   \"\"\"\"\"\" \"\"\"\"| .--`\r\n    (:--:--:--:--:--:--:--:-| [___    .------------------------.\r\n     |C&O  :  :  :  :  :  : [_9_] |\'=\'|.----------------------.|\r\n    \/|.___________________________|___|\'--.___.--.___.--.___.-\'|\r\n   \/ ||_.--.______.--.______.--._ |---\\\'--\\-.-\/==\\-.-\/==\\-.-\/-\'\/--\r\n  \/__;^=(==)======(==)======(==)=^~^^^ ^^^^(-)^^^^(-)^^^^(-)^^^ jgs\r\n~~~^~~~~^~~~^~~~^~~~^~~~^~~~^~~~^~~~^~~~^~~~^~~~^~~~^~~~^~~~^~~~^~~~\r\n");




console.log("Freitag, eine lange Woche voll mit nervigen Studenten neigt sich dem Ende.\nDas einzige was jetzt noch zwischen Sidar und seiner Feundin stehen sind 5 lange Haltestellen von Leipzig bis Marburg.\n");



console.log("Bepackt mit seiner Tasche in der Rechten und seiner Laptoptasche in der Linken, betritt Sidar die große Halle des Leipziger Hauptbahnhofes. Geschäftiges treiben, der typische Feierabendverkehr, voll mit Pendlern. Das Echo der hohen Halle verstärkt noch zusätzlich den Geräuschpegel der Leute die man am liebsten ignorieren würde.\n");

console.log("Fokussiert so schnell wie möglich zu seinem Gleis zu kommen, bemerkt er plötzlich ein Ziehen an seinem Arm.\n");

console.log("Sidar beäugt erstaunt die heruntergekommene Person, die seinen Arm festhält, ihm die andere geöffnete Hand hinstreckt und etwas nicht erkennbares nuschelt.\n");

console.log(`"Wehmtzhmrrrr….”.\n`);


pos = ['dem Dude einen 5 Euro Schein in die Hand drücken', 'sich von dem Dude lösen und so schnell es geht zum Gleis gehen'];
let answer = readlineSync.keyInSelect(pos, 'Sidar räuspert sich, was soll er tun?');
  if (answer === 0) {
      sidar.presents.push("Beutel schwarzer Tee")
      console.log('Sidar kramt einen 5 Euro Schein aus seiner Jackentasche und drückt diesen dem vermeintlichen Penner in die Hand. Etwas überrascht schaut sich der Dude den Schein an, steckt ihn weg und fummelt etwas aus seinen Lumpen.');
      console.log("Es ist ein Beutel schwarzer Tee welchen der Penner Sidar mit heftigem nicken in die Hand drückt.");
      
    
  } else {
    console.log('Sidar löst sich mit einem Schwung aus dem Griff des Penners und setzt seinen Weg um einige Schritte schneller zum Gleis fort,');
  }