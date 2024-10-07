//Mějme následující objekt představující inzerát na stránkách nějaké realitní kanceláře.

// Vytvořte webovou stránku s JavaScriptem, zkopírujte si tento kód do vašeho programu a vyřešte následující úkoly.

// 1.Pomocí tečkové notace vypište do stránky dispozici bytu.
// 2.Vypište do stránky čistý nájem bez poplatků.
// 3.Vypište do stránky celý objekt představující výměru bytu.
// 4.Do separátních proměnných uložte město a městskou část. Vypište je do stránky.
// 5.Změnte stav inzerátu z 'free' na 'taken'.

const apartment = {
    type: 'rent',
    disposition: '3+1',
    area: {
      floorage: 100,
      balcony: 2,
      units: 'sqm',
    },
    city: 'Prague',
    district: 'Old Town',
    price: {
      rent: 28000,
      fees: {
        water: 1000,
        energy: 2500,
        services: 560,
      },
      currency: 'czk',
    },
    ownership: 'personal',
    condition: 'renovated',
    status: 'free',
    floor: 3,
  };

  document.body.innerHTML += "<p>Dispozice: " + apartment.disposition + "</p>"
  document.body.innerHTML += "<p>Nájem bez poplatků: " + apartment.price.rent + "</p>"

  let total = apartment.area.floorage + apartment.area.balcony;
console.log(total);
  document.body.innerHTML += "<p>Vymera bytu: apartment: "+ apartment.area.floorage + apartment.area.units +"</br> balcony: "+apartment.area.balcony + apartment.area.units+ "</p>"
  document.body.innerHTML += "<p>Celkova plocha bytu je:" + total + "sqm </p>"



//   let total = apartment.area.floorage + apartment.area.balcony;
//   console.log(total);
//   document.body.innerHTML += "<p>Vymera bytu: apartment: "+ apartment.area.floorage + apartment.area.units +"</br> balcony: "+apartment.area.balcony + apartment.area.units+ "</p>"
//   document.body.innerHTML += "<p>Celkova plocha bytu je:" + total + "sqm </p>"
//   document.body.innerHTML += apartment.area.floorage + apartment.area.balcony

let mesto = apartment.city
let mestskaCast = apartment.district

document.body.innerHTML += "<p>Město: " + mesto + "</p>"
document.body.innerHTML += "<p>Městská část: " + mestskaCast + "</p>"