
//console.log(pizzas[]);


var pizza1 = {name:'margherita', price:'5,00', image:'images/PizzaMargherita.jpg'};
var pizza2 =  {name:'marino', price:'6,50', image:'images/marinos.jpg'};
var pizza3 =  {name:'napoletana', price:'8,99', image:'images/napoletana.jpg'};
var pizza4 =  {name:'quattro formaggi', price:'9,95', image:'images/Quattro.jpg'};
var pizza5 =  {name:'alle melanzane', price:'7,00', image:'images/Alle.jpg'};
var pizza6 =  {name:'prosciutto', price:'8,00', image:'images/Prosciutto.jpg'};
var pizza7 =  {name:'calzone', price:'9,50', image:'images/Calzone.jpg'};
var pizza8 =  {name:'caponne', price:'5,50', image:'images/alcapone.png'};
var pizza9 =  {name:'parma', price:'6,00', image:'images/Parma.jpg'}
var pizza10 =  {name:'pepperoni', price:'7,95', image:'images/pepperoni-pizza.jpg'};


var topping1 = {name:'Extra kaas', price:'0,50'};
var topping2 =  {name:'Spek', price:'0,99'};
var topping3 =  {name:'Ham', price:'0,99'};
var topping4 =  {name:'Ui', price:'0,65'};
var topping5 =  {name:'Paprika', price:'0,75'};
var topping6 =  {name:'Champignons', price:'0,85'};
var topping7 =  {name:'Salami', price:'0,99'};
var topping8 =  {name:'Tonijn', price:'1,20'};
var topping9 =  {name:'Olijf', price:'0,90'}
var topping10 =  {name:'Ansjovis', price:'1,45'};

var slice1 = {name: 'één stuk', price:'1,00'};
var slice2 = {name: 'twee stukken', price:'1,99'};
var slice3 = {name: 'drie stukken', price:'3,50'};
var slice4 = {name: 'vier stukken', price:'4,55'};
var slice5 = {name: 'vijf stukken', price:'5,00'};
var slice6 = {name: 'zes stukken', price:'5,99'};
var slice7 = {name: 'zeven stukken', price:'7,00'};
var slice8 = {name: 'acht stukken', price:'7,99'};
var slice9 = {name: 'negen stukken', price:'9,50'};
var slice10 = {name: 'tien stukken', price:'9,99'};
var slice11 = {name: 'elf stukken', price:'11,00'};
var slice12 = {name: 'twaalf stukken', price:'12,50'};

var allepizzas = [pizza1,pizza2,pizza3,pizza4,pizza5,pizza6,pizza7,pizza8,pizza9,pizza10]

var alletoppings = [topping1,topping2,topping3,topping4,topping5,topping6,topping7,topping8,topping9,topping10]

var alleslices = [slice1,slice2,slice3,slice4,slice5,slice6,slice7,slice8,slice9,slice10,slice11,slice12]

function toonpizzas() {
	var pizzatekst = 'dit zijn de pizzas <br>';
	for (var i = 0; i < allepizzas.length; i++) {
		pizzatekst = pizzatekst + "<div><p>" + allepizzas[i].name + "</p> <img width= '304' height = '228' src='" + allepizzas[i].image + "'> <p>" + allepizzas[i].price + "</p>";

	}
	document.getElementById("pizzas").innerHTML = pizzatekst;


}

function toontoppings() {
	var toppingtekst = 'dit zijn de toppings <br>';
	for (var i = 0; i < alletoppings.length; i++) {
		toppingtekst = toppingtekst + "<div><p>" + alletoppings[i].name + "</p> <p>" + alletoppings[i].price + "</p>"

	}
	document.getElementById("toppings").innerHTML = toppingtekst;


}

function toonslices() {
	var slicestekst = 'dit zijn de slices <br>';
	for (var i = 0; i < alleslices.length; i++) {
		slicestekst = slicestekst + "<div><p>" + alleslices[i].name + "</p> <p>" + alleslices[i].price + "</p>"

	}
	document.getElementById("slices").innerHTML = slicestekst;


}