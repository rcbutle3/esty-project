// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
}
let avgPrice = 0;
  for (let i = 0; i < data.length; i++){
      avgPrice = avgPrice + data[i].price;
  }
  avgPrice = (avgPrice/data.length).toFixed(2);
  return console.log("The average price is $" + avgPrice);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
}let arrayOfItems = [];
  for (let i = 0; i < data.length; i++){
    if (data[i].price >= 14 && data[i].price <= 18){
      arrayOfItems.push(data[i].title)
    }
  }
  return console.log(arrayOfItems.join('\r\n'));
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
    let gbp = [];
    let price = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].currency_code === "GBP") {
            price = data[i].price;
            gbp.push(data[i].title);
        }
    } console.log(gbp + " costs " + price + " pounds.");
}


// 4: Display a list of all items who are made of wood.
function question4 () {
    let woodItem = [];
    for (let i = 0; i < data.length; i++) {
        for (let f = 0; f < data[i].materials.length; f++) {
        if (data[i].materials[f] === "wood") {
            woodItem.push(data[i].title + " is made of wood.");
            }
        }
    } console.log(woodItem.join("\r\n"));
}


// 5: Which items are made of eight or more materials? 
//    Display the name, number of items and the items it is made of.
function question5 () {
    let eightOrMore = [];
    let matList = [];
    for (let i = 0; i < data.length; i++) {
        let totalMats = data[i].materials.length;
        if (data[i].materials.length >= 8) {
            let matList = data[i].materials.join("\r\n" + "- ");
            eightOrMore.push(data[i].title + " has " + totalMats + " materials:" + "\r\n" + "- " + matList);
        }
    } console.log(eightOrMore.join("\r\n")); 
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
    let madeBySeller = [];
    let madeBySellerCount = 0;   
    for (let i = 0; i < data.length; i++) {
        if (data[i].who_made === "i_did") {
            madeBySellerCount++;
            madeBySeller = madeBySellerCount;
        }
    } console.log(madeBySeller + " items were made by their sellers.");