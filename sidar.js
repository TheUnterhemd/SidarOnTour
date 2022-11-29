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

// Clear




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
console.clear();
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
  console.clear();
  //Popelkind
  if (sitz === 0) {
      console.log('\nSidar setzt sich zu der Mutter und ihrem Kind, die Mutter sichtlich mit einem lautstarkem Telefonat beschäftigt, das Kind jedoch schaut ihn an und streckt ihm die Zunge raus: “Du siehst scheiße aus! Du riecht nach Pups!”.');
      console.log("Der junge steckt seinen kleinen Finger tief in die Nase und lässt einen saftig schleimigen Popel zum Vorschein kommen.");
      console.log("Süffisant streckt der Junge seinen Popel Sidar entgegen.");
        let kid = ['ja', 'nein'];
        let share = readlineSync.keyInSelect(kid, 'Soll Sidar den Tausch eingehen');
        console.clear();
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
            console.clear();
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
        console.clear();
        if(help === 0){
    if(sidar.presents.length < 1){
        let noHelp = dices();
        console.log(`Sidar hat leider nichts zum helfen und der Hool trifft ihn mit einer Kotzattacke der Stärke ${noHelp}.`);
        sidar.excitement += noHelp;
    }
    else
   { let hoolHelp = readlineSync.keyInSelect(sidar.presents, "was soll Sidar der Fleischkappe anbieten");
    console.log(`Der Hool steckt sich ${sidar.presents[hoolHelp]} schnell in den Mund und kaut darauf rum. Die Kotzattacke wurde verhindert.`);
    sidar.presents.splice(hoolHelp,1);}}

    else if(help === 1){

        console.log("ZEIT FÜR EIN DU-DU-DUELL");
        let hoolDice = ['ja', 'nein'];
        let secondDice = readlineSync.keyInSelect(hoolDice, 'Willst du würfeln?');
        console.clear();
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
        //2 Haltestelle
console.log(
    "\nEin neuer Schwall Menschen betritt den überfüllten Zug und reichert diesen mit Schweißgeruch an.\n");
  console.log(
    "Deine Sitznachbarn sind ausgestiegen, auf dem Viererplatz neben dir setzen sich zwei Schüler und zocken auf einer Switch, \n");
  
  console.log(
    "auf dem Platz direkt neben dir setzt sich eine, du schätzt junge Frau, wobei diese aus 98% Plastik besteht und Sie genauso gut 69 sein könnte.\n");
  
  pos = ["Bei Miss Plastic sitzen bleiben", "Zu den Schülern setzen."];
  
  sitzZweiteHaltestelle = readlineSync.keyInSelect(pos, "Was willst du tun?");
  console.clear();
  
  //Plastik püpchen
  if (sitzZweiteHaltestelle === 0) {
    console.log(
      "\nDie knapp bekleidete Dame stellt ihr Handy auf Selfiemodus, richtet noch schnell ihre Möpse und fängt an: "
    );
    console.log(
      "“Hallo ihr kleinen Zuckerschnecken, isch bims die Tschakkeline, wie ihr seht bin ich grad unterwegs im Privatjet nach Dubai. Ich sag euch ich bin mal wieder mega slay unterwegs ich sag euch das wird wild! Wer das neben mir ist? Kennt ihr natürlich nicht ihr Geringverdiener, das ist mein neuer Schaich.” Die Blondine hält Sidar aufdringlich das Handy ins Gesicht. “Sag Hallo Baby! Komm geb mir einen Kuss für die Fans!”"
    );
    console.log("Kussattacke: ");
    let püpchen = ["ja", "nein"];
    let plasticShare = readlineSync.keyInSelect(püpchen, "Item benutzen?");
    console.clear();
    if (plasticShare === 0) {
      if (sidar.presents.length < 1) {
        let noplasticShare = dices();
        console.log(
          `Du hast nichts zum Tauschen, die Unbekannte schleckt mit der Stärke ${noplasticShare} Sidars ganzes Gesicht ab, hoffentlich kriegt das seine Freundin nie mit!`
        );
        sidar.excitement += noplasticShare;
      } else {
        let missPlasticPresent = readlineSync.keyInSelect(
          sidar.presents,
          "Was soll Sidar der Miss Plastic anbieten?"
        );
        console.clear();
        console.log(
          `Die Miss Plastic bemerkt das sie ihre Tage bekommen hat und ist mit dem ${sidar.presents[missPlasticPresent]} auf die Toilette verschwunden.`
        );
        sidar.presents.splice(missPlasticPresent, 1);
      }
    } else if (plasticShare === 1) {
      console.log("ZEIT FÜR EIN DU-DU-DUELL");
      let plasticDice = ["ja", "nein"];
      let thirdDice = readlineSync.keyInSelect(plasticDice, "Willst du würfeln?");
      console.clear();
      if (thirdDice === 0) {
        let missPlastic = new Passenger("Miss Plastic", 35);
        missPlastic.dice = missPlastic.excitement();
        console.log(
          `Die ${missPlastic.type} spitzt schon ihre Lippen mit der Stärke ${missPlastic.dice}!`
        );
        sidar.dice = dices();
        console.log(
          `Sidar sieht es und versucht dem hektisch auszuweichen mit der Stärke von ${sidar.dice}.`
        );
        if (sidar.dice >= missPlastic.dice) {
          console.log(
            "Miss Plastic flutscht das Handy aus den Händen – Totalschaden. “Oh verdammte Scheiße, aber danke fürs mitspielen.” "
          );
          console.log(
            "Die Unbekannte steckt dir einen Zettel mit einem Code für ein Monatsabo für ihren Onlyfans zu."
          );
          sidar.presents.push("OnlyFans Abo");
        } else if (sidar.dice < missPlastic.dice) {
          console.log(
            "Sidars hektisches ausweichen hat nichts gebracht, Miss Plastics Attacke ist ein voller erfolg und sie schleckt sein ganzes gesicht ab, hoffentlich kriegt das seine Freundin nie mit!"
          );
          console.log(`Du regst dich für ${missPlastic.dice - sidar.dice} auf.`);
          sidar.excitement += missPlastic.dice - sidar.dice;
          sidar.dice = 0;
        } else {
          console.log("Sidar ist so genervt und verlässt weinend den Zug");
          console.log(" G A M E   O V E R ");
        }
      } else if (thirdDice === 1) {
        let kissDice = dices();
        console.log(
          `Miss Plastic schleckt Sidar mitten durchs Gesicht und du ekelst dich für ${kissDice}.`
        );
        sidar.excitement += kissDice;
      } else {
        console.log("Sidar ist so genervt und verlässt weinend den Zug");
        console.log(" G A M E   O V E R ");
      }
    } else {
      console.log("Sidar ist so genervt und verlässt weinend den Zug");
      console.log(" G A M E   O V E R ");
    }
  }
  
  //Schüler
  else if (sitzZweiteHaltestelle === 1) {
    console.log(
      "Sidar setzt sich zu den Schülern,\n beide scheinen heftig darüber zu streiten welches Pokémonspiel das beste ist."
    );
    console.log("\n Die Blagen werden immer lauter und fangen an zu rangeln.");
  
    let schülerAnfang = [
      "Verdammt das beste ist und bleibt ROT!",
      "Verdammt Blau ist und bleibt das Beste!",
    ];
    let antwortenZuSchüler = readlineSync.keyInSelect(
      schülerAnfang,
      "Was willst du sagen?\n"
    );
    console.clear();
    if (antwortenZuSchüler === 0) {
      console.log(
        "Beide Kinder gucken sich an und dann angeekelt zu Sidar: “Digga was bist denn du für’n Boomer?”"
      );
    } else if (antwortenZuSchüler === 1) {
      console.log(
        "Beide Kinder gucken sich an und dann angeekelt zu Sidar: “Diggah was bist denn du für’n Boomer?”"
      );
    } else {
      console.log(
        "Sidar sitzt schweigend da, jedoch gucken ihn beide Kinder an und sagen angeekelt: “Diggah was bist denn du für’n Boomer?”\n"
      );
    }
    console.log("Sie haben mich alt genannt Attacke: ");
    let schülerAntwort = ["ja", "nein"];
    let altHelp = readlineSync.keyInSelect(schülerAntwort, "Item benutzen?");
    console.clear();
    if (altHelp === 0) {
      if (sidar.presents.length < 1) {
        let altNoHelp = dices();
        console.log(`Sidar hat leider nichts was ihm hilft.`);
        console.log(
          "Die Kinder machen sich immer weiter über Sidar lustig und der ganze Zug beäugt das ganze Szenario sichtlich amüsiert. Mit der Stärke von ${altNoHelp}."
        );
        sidar.excitement += altNoHelp;
      } else {
        let teenHelp = readlineSync.keyInSelect(
          sidar.presents,
          "Was soll Sidar den Schülern anbieten?"
        );
        console.log(
          `Die Schüler sind vom ${sidar.presents[teenHelp]} beeindruckt und gucken sich das in Ruhe fasziniert an.`
        );
        sidar.presents.splice(teenHelp, 1);
      }
    } else if (altHelp === 1) {
      console.log("ZEIT FÜR EIN DU-DU-DUELL");
      let teenDice = ["ja", "nein"];
      let diceFour = readlineSync.keyInSelect(teenDice, "Willst du würfeln?");
      console.clear();
      if (diceFour === 0) {
        let schüler = new Passenger("Schüler", 12);
        schüler.dice = schüler.excitement();
        console.log(
          `Die ${schüler.type} machen sich immer weiter über Sidar lustig mit der Stärke von ${schüler.dice} und der ganze Zug beäugt das ganze Szenario sichtlich amüsiert.`
        );
  
        sidar.dice = dices();
        console.log(
          `Sidar entwickelt eine Aggressivität der Stärke ${sidar.dice} und möchte ihnen eine Ansage machen.`
        );
        if (sidar.dice >= schüler.dice) {
          console.log(
            "Sidar platzt vor Aggressivität und bäumt sich vor den Kindern auf. “Hört mal zu ihr kleinen Scheißer, ein bisschen mehr Respekt oder ich sorg dafür das ihr kleinen Viren die längste Zeit Videospiele gezockt habt.”"
          );
          console.log(
            "Die Kinder fangen an zu wimmern, überreichen Sidar die Switch und laufen heulend aus dem Zug. "
          );
          sidar.presents.push("Switch");
        } else if (sidar.dice < schüler.dice) {
          console.log(
            "Sidars Aggresivität ist nicht genug, er schafft es nicht den Kindern eine Ansage zu machen."
          );
          console.log(`Sidar regt sich für ${schüler.dice - sidar.dice} auf.`);
          sidar.excitement += schüler.dice - sidar.dice;
          sidar.dice = 0;
        } else {
          console.log("Sidar ist so genervt und verlässt weinend den Zug");
          console.log(" G A M E   O V E R ");
        }
      } else if (diceFour === 1) {
        let noDuellDice = dices();
        console.log(
          `Die Kinder machen sich immer weiter Lustig über ihn, Passagiere fangen es an zu Filmen.
          Sidar ist total beschämt und regt sich für ${noDuellDice} darüber auf.`
        );
        sidar.excitement += noDuellDice;
      } else {
        console.log("Sidar ist so genervt und verlässt weinend den Zug");
        console.log(" G A M E   O V E R ");
      }
    }
  } else {
    console.log("Sidar ist so genervt und verlässt weinend den Zug");
    console.log(" G A M E   O V E R ");
  }

//Haltestelle 3

        //2 Haltestelle
        console.log(
          "Der nächste rege Wechsel an der Haltestelle.");
        console.log(
          "Ein Typ in einem langen dunklen Trenchcoat setzt sich neben Sidar.\nSeine Haare glänzend vor Fett, sein Gesicht ziert ein Schnurbart, als sei er frisch einem 80er Jahre Porno entflohen.\n");
        
        console.log(
          "Auf den anderen Platz wird eine Frau mit brünetter Dauerwelle von ihren drei unerzogenen kleffenden Hunden gezerrt.\n");
        
        pos3 = ["Beim Pornobalken sitzen bleiben.", "Zur Hundelady wechseln."];
        
        sitzZweiteHaltestelle = readlineSync.keyInSelect(pos3, "Was soll Sidar tun?");
        console.clear();
        
        //Mr. Pornobalken
        if (sitzZweiteHaltestelle === 0) {
          console.log(
            "Der creepy Typ mustert Sidar mit einem lächeln auf den Lippen von unten nach oben.\nSidar räuspert sich und versucht den durchdringenden Blicken des Fremden zu entgehen,\ndoch Mr. Pornobalken leckt sich über seine Lippen, was man nicht ignorieren kann.\n");
          console.log(
            "Ekel macht sich in Sidar breit, als sich die Hände des Fremden langsam zu dem Gürtel seines Mantels bewegen.");


          console.log("Nackter Mann Attacke:");
          let porno = ["ja", "nein"];
          let pornoShare = readlineSync.keyInSelect(porno, "Item benutzen?");
          console.clear();
          if (pornoShare === 0) {
            if (sidar.presents.length < 1) {
              let noPornoShare = dices();
              console.log(
                `Sidar hat nichts in seinen Taschen.
                
                Der Perverse lässt Sidar keine Chance, mit einem schnellen Ruck spreizt er seinen Mantel und enthüllt sein ganzes Ich.
                Sidars Augen sind weit aufgerissen, er ist geschockt, verweilt Blind in der Embryonalhaltung  mit dem Wissen, was das letzte eingebrannte Bild in seinen Kopf sein wird. Die Attecke des Pornobalkenträgers ekelt Sidar mit ${noPornoShare}.`);
                sidar.excitement += noPornoShare;
                console.log("Sidars Ekelstufe ist auf: " + sidar.excitement)
            } else {
              let pornoPresent = readlineSync.keyInSelect(
                sidar.presents,
                "Was soll Sidar dem Ekeltypen anbieten?"
              );
              console.clear();
              if(sidar.presents[pornoPresent] === "OnlyFans Abo"){
                console.log("Der creepy Typ macht Auge, leichtes sabbern glitzert aus seinem Mundwinkel. Rasch schnürt er seinen Mantelürtel wieder fester, fummelt hektisch sein Smartphone heraus und begibt sich schnell zur Zugtoilette, auf welcher man die nächsten 30 Minuten nur noch seltsame Geräusche vernehmen kann.");
                sidar.presents.splice(pornoPresent, 1);
              }
              else{
                let noPresent = dices();
                console.log(`"Mr. Ich habe nichts drunter" ist wenig beeindruckt und schmeißt dein ${sidar.presents[pornoPresent]} weg. Er fackelt auch nicht lange und öffnet seinen Mantel damit sich Anblick in Sidars Hirn einbrennt. Die Attecke des Pornobalkenträgers ekelt Sidar mit ${noPresent}.`);
                sidar.presents.splice(pornoPresent, 1);
              }
            }
          } else if (pornoShare === 1) {
            console.log("ZEIT FÜR EIN DU-DU-DUELL");
            let pornoDice = ["ja", "nein"];
            let fifthDice = readlineSync.keyInSelect(pornoDice, "Willst du würfeln?");
            console.clear();
            if (fifthDice === 0) {
              let misterPorno = new Passenger("Mr. Pornobalken", 56);
              misterPorno.dice = misterPorno.excitement();
              console.log(
                `${misterPorno.type} wird immer geiler und seine Erregung wächst um: ${misterPorno.dice}!`
              );
              sidar.dice = dices();
              console.log(
                `Sidar schaut sich im ganzen Zug nach hilfe um. Die Wahrscheinlichkeit das er jemanden findet ist: ${sidar.dice}.`
              );
              if (sidar.dice >= misterPorno.dice) {
                console.log(`Sidar erblickt im Augenwinkel einen Schaffner und brüllt diesen voller inbrunst zu sich.
                “Zeigen Sie mir doch bitte mal Ihre Fahrkarte” richtet der Schaffner an den Typen.
                Dieser, wohl nicht nur unter dem Mantel nackt, kann damit nicht dienen und wird vom Schaffner wegbegleitet.`
                );

              } else if (sidar.dice < misterPorno.dice) {
                console.log(
                  `Es schein als wäre Sidar nun mit dem Peversen alleine im Abteil und die Atttacke von ${misterPorno.type} brennt sich in Sidars Kopf.`
                );
                console.log(`Du regst dich für ${misterPorno.dice - sidar.dice} auf.`);
                sidar.excitement += misterPorno.dice - sidar.dice;
                sidar.dice = 0;
              } else {
                console.log("Sidar ist so genervt und verlässt weinend den Zug");
                console.log(" G A M E   O V E R ");
              }
            } else if (fifthdDice === 1) {
              let pornoDice = dices();
              console.log(
                `Der Perverse lässt Sidar keine Chance, mit einem schnellen Ruck spreizt er seinen Mantel und enthüllt sein ganzes Ich.
                Sidars Augen sind weit aufgerissen, er ist geschockt, verweilt Blind in der Embryonalhaltung  mit dem Wissen, was das letzte eingebrannte Bild in seinen Kopf sein wird. Die Attecke des Pornobalkenträgers ekelt Sidar mit ${pornoDice}.`
              );
              sidar.excitement += pornoDice;
            } else {
              console.log("Sidar ist so genervt und verlässt weinend den Zug");
              console.log(" G A M E   O V E R ");
            }
          } else {
            console.log("Sidar ist so genervt und verlässt weinend den Zug");
            console.log(" G A M E   O V E R ");
          }
        }
        
        //Hundelady
        else if (sitzZweiteHaltestelle === 1) {
          console.log(
            "Sidar setzt sich zu den Schülern,\n beide scheinen heftig darüber zu streiten welches Pokémonspiel das beste ist."
          );
          console.log("\n Die Blagen werden immer lauter und fangen an zu rangeln.");
        
          let schülerAnfang = [
            "Verdammt das beste ist und bleibt ROT!",
            "Verdammt Blau ist und bleibt das Beste!",
          ];
          let antwortenZuSchüler = readlineSync.keyInSelect(
            schülerAnfang,
            "Was willst du sagen?\n"
          );
          console.clear();
          if (antwortenZuSchüler === 0) {
            console.log(
              "Beide Kinder gucken sich an und dann angeekelt zu Sidar: “Digga was bist denn du für’n Boomer?”"
            );
          } else if (antwortenZuSchüler === 1) {
            console.log(
              "Beide Kinder gucken sich an und dann angeekelt zu Sidar: “Diggah was bist denn du für’n Boomer?”"
            );
          } else {
            console.log(
              "Sidar sitzt schweigend da, jedoch gucken ihn beide Kinder an und sagen angeekelt: “Diggah was bist denn du für’n Boomer?”\n"
            );
          }
          console.log("Sie haben mich alt genannt Attacke: ");
          let schülerAntwort = ["ja", "nein"];
          let altHelp = readlineSync.keyInSelect(schülerAntwort, "Item benutzen?");
          console.clear();
          if (altHelp === 0) {
            if (sidar.presents.length < 1) {
              let altNoHelp = dices();
              console.log(`Sidar hat leider nichts was ihm hilft.`);
              console.log(
                "Die Kinder machen sich immer weiter über Sidar lustig und der ganze Zug beäugt das ganze Szenario sichtlich amüsiert. Mit der Stärke von ${altNoHelp}."
              );
              sidar.excitement += altNoHelp;
            } else {
              let teenHelp = readlineSync.keyInSelect(
                sidar.presents,
                "Was soll Sidar den Schülern anbieten?"
              );
              console.log(
                `Die Schüler sind vom ${sidar.presents[teenHelp]} beeindruckt und gucken sich das in Ruhe fasziniert an.`
              );
              sidar.presents.splice(teenHelp, 1);
            }
          } else if (altHelp === 1) {
            console.log("ZEIT FÜR EIN DU-DU-DUELL");
            let teenDice = ["ja", "nein"];
            let diceFour = readlineSync.keyInSelect(teenDice, "Willst du würfeln?");
            console.clear();
            if (diceFour === 0) {
              let schüler = new Passenger("Schüler", 12);
              schüler.dice = schüler.excitement();
              console.log(
                `Die ${schüler.type} machen sich immer weiter über Sidar lustig mit der Stärke von ${schüler.dice} und der ganze Zug beäugt das ganze Szenario sichtlich amüsiert.`
              );
        
              sidar.dice = dices();
              console.log(
                `Sidar entwickelt eine Aggressivität der Stärke ${sidar.dice} und möchte ihnen eine Ansage machen.`
              );
              if (sidar.dice >= schüler.dice) {
                console.log(
                  "Sidar platzt vor Aggressivität und bäumt sich vor den Kindern auf. “Hört mal zu ihr kleinen Scheißer, ein bisschen mehr Respekt oder ich sorg dafür das ihr kleinen Viren die längste Zeit Videospiele gezockt habt.”"
                );
                console.log(
                  "Die Kinder fangen an zu wimmern, überreichen Sidar die Switch und laufen heulend aus dem Zug. "
                );
                sidar.presents.push("Switch");
              } else if (sidar.dice < schüler.dice) {
                console.log(
                  "Sidars Aggresivität ist nicht genug, er schafft es nicht den Kindern eine Ansage zu machen."
                );
                console.log(`Sidar regt sich für ${schüler.dice - sidar.dice} auf.`);
                sidar.excitement += schüler.dice - sidar.dice;
                sidar.dice = 0;
              } else {
                console.log("Sidar ist so genervt und verlässt weinend den Zug");
                console.log(" G A M E   O V E R ");
              }
            } else if (diceFour === 1) {
              let noDuellDice = dices();
              console.log(
                `Die Kinder machen sich immer weiter Lustig über ihn, Passagiere fangen es an zu Filmen.
                Sidar ist total beschämt und regt sich für ${noDuellDice} darüber auf.`
              );
              sidar.excitement += noDuellDice;
            } else {
              console.log("Sidar ist so genervt und verlässt weinend den Zug");
              console.log(" G A M E   O V E R ");
            }
          }
        } else {
          console.log("Sidar ist so genervt und verlässt weinend den Zug");
          console.log(" G A M E   O V E R ");
        }
