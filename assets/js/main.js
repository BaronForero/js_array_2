

// // ---------------------------- Übung lev1_1: forEach()  ---------------------------- 

// const drinks = ["Coca-Cola",
//     "Apfelsaft",
//     "Pepsi",
//     "Traubensaft",
//     "Sprite",
//     "Orangensaft",
//     "Red Bull Energy Drink",
//     "Fanta"]

// drinks.sort();
// console.log(drinks);
// drinks.forEach((elt) => {
//     console.log(elt);
//     document.write(elt + "<br>")
// })

// let myDrinks = drinks.forEach((elt) => {
//     console.log(elt);
// })


// ---------------------------- Übung lev1_2: map()  ---------------------------- 

// let getraenke = ["Coca-Cola", "Apfelsaft", "Pepsi", "Traubensaft", "Sprite", "Orangensaft", "Red Bull Energy Drink", "Fanta"]

// let upperDrinks = getraenke.map((elt) => {
//     // console.log(elt.toUpperCase());
//     return elt.toUpperCase();
// })
// console.log(upperDrinks);

// ---------------------------- Übung lev1_3: map()  ---------------------------- 
// let array = [
//     18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78];

// let arrayMalZwei = array.map((elt) => {
//     return elt * 2;
// })

// let arrayMalZwei = array.map((num) => num * 2)

// console.log(arrayMalZwei.sort((a, b) => a - b));

// ---------------------------- Übung lev1_4: map()  ---------------------------- 

// let FarrZuCel = () => {


//     let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];


//     let celcius = fahrenheit.map((elt) => {
//         return ((elt - 32) / 1.8).toFixed(2)
//     })
//     console.log(celcius);
// }
// FarrZuCel()

// ---------------------------- Übung lev1_5: map()  ---------------------------- 

// let checkNumber = [18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78];

// const dividedThree = checkNumber.map((num) => {
//     if (num % 3 === 0) {
//         return num + 100
//     } else {
//         return num
//     }
// })
// console.log(dividedThree);