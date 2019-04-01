/*
The task now is to find all the laced shoes.
Output shoe names that contain“ lace” in them, and indicate which word contains“ lace”.

The output format should be structured like this: [{
    "nameWords": ["tasselled", "black", "low-top", "lace-up"],
    "targetWordIndex": 3
}, {
    "nameWords": ["tasselled", "green", "low-top", "lace-up"],
    "targetWordIndex": 3
}, {
    "nameWords": ["red", "leather", "laced", "sneakers"],
    "targetWordIndex": 2
}, {
    "nameWords": ["black", "leather", "laced", "sneakers"],
    "targetWordIndex": 2
}]
*/

var inventory = [{
    name: 'Brunello Cucinelli',
    shoes: [{
        name: 'tasselled black low-top lace-up',
        price: 1000
    }, {
        name: 'tasselled green low-top lace-up',
        price: 1100
    }, {
        name: 'plain beige suede moccasin',
        price: 950
    }, {
        name: 'plain olive suede moccasin',
        price: 1050
    }]
}, {
    name: 'Gucci',
    shoes: [{
        name: 'red leather laced sneakers',
        price: 800
    }, {
        name: 'black leather laced sneakers',
        price: 900
    }]
}];

function getLace(data) {
  let rgx = new RegExp(/(?:lace)+/g);
  let result = [];

  for (let i in data) {
    for (let j in data[i].shoes) {
      let shoeAr = data[i].shoes[j].name.split(" ");
      shoeAr.map((w, idx) => {
        if (rgx.test(w)) {
          result.push({
            nameWords: shoeAr,
            targetWordIndex: idx
          });
        }
      });
    }
  }
  return result;
}

getLace(inventory);