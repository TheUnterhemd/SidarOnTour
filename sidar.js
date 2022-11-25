const readlineSync = require('readline-sync');

// Personen

let sidar = {
    name: "Sidar",
    age: 29,
    excitement: 0,
    presents: [],
    nickSidar: "Scheremin", // mein Löwe
    dice:0
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
        this.dice = 0,
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
      console.log('\nSidar kramt einen 5 Euro Schein aus seiner Jackentasche und drückt diesen dem vermeintlichen Penner in die Hand. Etwas überrascht schaut sich der Dude den Schein an, steckt ihn weg und fummelt etwas aus seinen Lumpen.');
      console.log("\nEs ist ein Beutel schwarzer Tee welchen der Penner Sidar mit heftigem nicken in die Hand drückt.");
      
    
  } else {
    console.log('\nSidar löst sich mit einem Schwung aus dem Griff des Penners und setzt seinen Weg um einige Schritte schneller zum Gleis fort,');
  }

  console.log("\nEndlich im Zug und es scheint Sidars Glückstag zu sein, denn der Zug hatte nur 2 Stunden verspätung.");
  console.log("Der typisch feine Zuggeruch – eine Mischung aus Parfüm, Bier und Scheiße erfreut direkt Sidars Nase, sein Blick schweift über die Sitplätze:");

  console.log("\nZu seiner linken ein Vierersitz, eine Mutter spielt an ihrem Handy wärend das Kind sein Gesicht die Scheibe ablutscht.");
  console.log("Zu seiner rechten drei besoffene Fußballfans mit Glatze die lautstark Fußballieder gröhlen.\n");

  pas = ['Zu der Mutter und dem Blag', 'Zu den Nichtfrisuren'];
  let sitz = readlineSync.keyInSelect(pas, 'Wohin willst du dich setzen?');
  //Popelkind
  if (sitz === 0) {
      console.log('\nSidar setzt sich zu der Mutter und ihrem Kind, die Mutter sichtlich mit einem lautstarkem Telefonat beschäftigt, das Kind jedoch schaut ihn an und streckt ihm die Zunge raus: “Du siehst scheiße aus! Du riecht nach Pups!”.');
      console.log("Der junge steckt seinen kleinen Finger tief in die Nase und lässt einen saftig schleimigen Popel zum Vorschein kommen.");
      console.log("Süffisant streckt der Junge seinen Popel Sidar entgegen.");
        let kid = ['ja', 'nein'];
        let share = readlineSync.keyInSelect(kid, 'Soll Sidar den Tausch eingehen');
        if(share === 0) {
            if(sidar.presents.length < 1){
                let noShare = dices();
                console.log(`Sidar hat leider nichts zum tauschen und das Balg trifft ihn mit einem Popel der Stärke ${noShare}.`);
                sidar.excitement += noShare;
            }
            else
           { let kidPresent = readlineSync.keyInSelect(sidar.presents, "was soll Sidar dem Kind anbieten");
            console.log(`Das Kind reibt den Popel in den Nachbarsitz und fängt an den ${sidar.presents[kidPresent]} zu lutschen. (Es sieht zufrieden aus)`);
            sidar.presents.splice(kidPresent,1);}
        }
        else if(share === 1) {
            console.log("ZEIT FÜR EIN DU-DU-DUELL");
            let dice = ['ja', 'nein'];
            let firstDice = readlineSync.keyInSelect(dice, 'Willst du würfeln?');
            if(firstDice === 0) {
                let popel = new Passenger("Popelkind", 4);
                popel.dice = popel.excitement();
                console.log(`Das ${popel.type} hat einen saftigen grünen Popel der Stärke ${popel.dice} gefunden.`);
                sidar.dice = dices();
                console.log(`Sidar wühlt hecktisch in seinen Taschen und findet ein altes Taschentuch der Stärke ${sidar.dice}`);
                if(sidar.dice > popel.dice) {
                    console.log("Zum Glück benötigt Sidar sein Tachentuch nicht, da Die Mutter das ganze noch rechtzeitig mitbekommt und die Hand des Jungen festhält.")
                    console.log("Nach einer gehörigen Standpauke entschuldigt sich die Mutter und schenkt ihm einen Tampon.");
                    sidar.presents.push("Tampon")
                    
                }
                else if(sidar.dice < popel.dice) {
                    console.log("Dein Taschentuch wird von dem kleinem Finger durchbohrt und Die Attacke des Jungen ist ein voller Erfolg, Sidar ist fast am kotzen und das saftige Grün hängt in seinem Gesicht.");
                    console.log(`Du regst dich für ${popel.dice - sidar.dice} auf.`);
                    sidar.excitement += popel.dice - sidar.dice;
                    sidar.dice = 0;
                }
                else{
                    console.log("Sidar ist so genervt und verlässt weinend den Zug");
                    console.log(" G A M E   O V E R ");
                }

            }
            else if(firstDice === 1){
                let dice = dices();
                console.log(`Das Kind schmiert Sidar den Poppel mitten ins Gesicht und du ekelst dich für ${dice}.`);
                sidar.excitement += dice;
            
            }
            else{
                console.log("Sidar ist so genervt und verlässt weinend den Zug");
                console.log(" G A M E   O V E R ");
            }

        }
        else{
            console.log("Sidar ist so genervt und verlässt weinend den Zug");
            console.log(" G A M E   O V E R ");
        }  
  } 
  //Glatzen
  else if(sitz === 1){
    console.log("Sidar setzt sich zu den Nichtfrisuren.");
    console.log("\nEiner öffnet genüsslich ein neues Bier, wärend alle für ein neues Fußballlied anstimmen.");
    console.log("Ganz tief im inneren hofft Sidar einfach nur nicht angesprochen zu werden, doch sein Gegenüber reißt von jetzt auf gleich die Augen weit auf und lehnt sich immer weiter Richtung Sidar.");
    let hool = ['ja', 'nein'];
        let help = readlineSync.keyInSelect(hool, 'Soll Sidar ihm etwas anbieten um ihm zu helfen?');
        if(help === 0){
    if(sidar.presents.length < 1){
        let noHelp = dices();
        console.log(`Sidar hat leider nichts zum helfen und der Hool trifft ihn mit einer Kotzattacke der Stärke ${noHelp}.`);
        sidar.excitement += noHelp;
    }
    else
   { let hoolHelp = readlineSync.keyInSelect(sidar.presents, "was soll Sidar dem Kind anbieten");
    console.log(`Der Hool steckt sich ${sidar.presents[hoolHelp]} schnell in den Mund und kaut darauf rum. Die Kotzattacke wurde verhindert.`);
    sidar.presents.splice(hoolHelp,1);}}

    else if(help === 1){

        console.log("ZEIT FÜR EIN DU-DU-DUELL");
        let hoolDice = ['ja', 'nein'];
        let secondDice = readlineSync.keyInSelect(hoolDice, 'Willst du würfeln?');
        if(secondDice === 0) {
            let womit = new Passenger("Glatzkopp", 38);
            womit.dice = womit.excitement();
            console.log(`Der ${womit.type} macht schon dicke Backen und es könnte eine Fontäne feinster Bierkotze mit Fruchtfleisch der Stärke ${womit.dice} über Sidar ergehen.`);
            sidar.dice = dices();
            console.log(`Sidar beugt sich hecktisch nach Rechts und Links, seine Ausweichtaktik hat eine Stärke von ${sidar.dice}`);
            if(sidar.dice > womit.dice) {
                console.log("Glück gehabt, der Hool presst mit vollem Einsatz einen Ohrenbetäubenden Rülpser raus. Mit einem: “Lmentschullije” drückt der Hool Sidar ein Bier in die Hand.")
                sidar.presents.push("Bier")
                
            }
            else if(sidar.dice < womit.dice) {
                console.log("Sidars wackeln bringt nichts und der Hool kotzt mit einer formgleichen Fontäne komplett auf Sidars Schoß. Nun ist Sidar eins mit dem stinkenden Zug.");
                console.log(`Sidar regt sich für ${womit.dice - sidar.dice} auf.`);
                sidar.excitement += womit.dice - sidar.dice;
                sidar.dice = 0;
            }
            else{
                console.log("Sidar ist so genervt und verlässt weinend den Zug");
                console.log(" G A M E   O V E R ");
            }

        }
        else if(secondDice === 1){
            let noDuellDice = dices();
            console.log(`Der Hool kotzt mit einer formgleichen Fontäne komplett auf Sidars Schoß. Nun ist Sidar eins mit dem stinkenden Zug.\nSidar regt sich für ${noDuellDice} auf.`);
            sidar.excitement += noDuellDice;
        
        }
        else{
            console.log("Sidar ist so genervt und verlässt weinend den Zug");
            console.log(" G A M E   O V E R ");
        }

    }

    }
  else{
            console.log("Sidar ist so genervt und verlässt weinend den Zug");
            console.log(" G A M E   O V E R ");
        }
