
//console.log(pizzas[]);
var chosenPizzaPrice = [];
var chosenToppingPrice = [];
var chosenSlice = 1;
var chosenSizePrice = 1;


var allPizzas = [
				{name:'margherita', price:'5.00', image:'images/PizzaMargherita.jpg'},
				{name:'marino', price:'6.50', image:'images/marinos.jpg'},
				{name:'napoletana', price:'8.99', image:'images/napoletana.jpg'},
				{name:'quattro formaggi', price:'9.95', image:'images/Quattro.jpg'},
				{name:'alle melanzane', price:'7.00', image:'images/Alle.jpg'},
				{name:'prosciutto', price:'8.00', image:'images/Prosciutto.jpg'},
				{name:'calzone', price:'9.50', image:'images/Calzone.jpg'},
				{name:'caponne', price:'5.50', image:'images/alcapone.png'},
				{name:'parma', price:'6.00', image:'images/Parma.jpg'},
				{name:'pepperoni', price:'7.95', image:'images/pepperoni-pizza.jpg'}

	 ];

var allToppings = [
				{name:'Extra kaas', price:'0.50'},
				{name:'Spek', price:'0.99'},
				{name:'Ham', price:'0.99'},
				{name:'Ui', price:'0.65'},
				{name:'Paprika', price:'0.75'},
				{name:'Champignons', price:'0.85'},
				{name:'Salami', price:'0.99'},
				{name:'Tonijn', price:'1.20'},
				{name:'Olijf', price:'0.90'},
				{name:'Ansjovis', price:'1.45'}];

var allSizes = [{name: 'normal', factor: '1'},{name: 'medium', factor: '1.2'},{name: 'large', factor: '1.4'},{name: 'kingsize', factor: '2'}];

var allSlices = [
				{name: 'één stuk', stukken: 1/12},
				{name: 'twee stukken', stukken:2/12},
				{name: 'drie stukken', stukken:3/12},
				{name: 'vier stukken', stukken:4/12},
				{name: 'vijf stukken', stukken: 5/12},
				{name: 'zes stukken', stukken:6/12},
				{name: 'zeven stukken', stukken: 7/12},
				{name: 'acht stukken', stukken: 8/12},
				{name: 'negen stukken', stukken: 9/12},
				{name: 'tien stukken', stukken:10/12},
				{name: 'elf stukken', stukken: 11/12},
				{name: 'twaalf stukken', stukken: 12/12}];


function showPizzas() {
	var pizzaText = 'Maak een keuze <br>';
	for (var i = 0; i < allPizzas.length; i++) {
		pizzaText = pizzaText + "<div class = 'pizzaTile' ' onclick='pricePizza(this.id)' id='"+allPizzas[i].price+"'> <p>" + allPizzas[i].name + "</p> <img width= '152' height = '114' src='" + allPizzas[i].image + "'> <p>" + allPizzas[i].price + "</p> </div>";

	}
	document.getElementById("pizzas").innerHTML = pizzaText;


}

/*function showToppings() {
	var toppingText = 'Kies een topping <br> <ul id = "toppingsList">';
	for (var i = 0; i < allToppings.length; i++) {
		toppingText = toppingText +  "<li id= '"+allToppings[i].price+"' onclick='priceToppings(this.id)' >" + allToppings[i].name + "(" + allToppings[i].price + ")</li>"

	}
	toppingText = toppingText + "</ul>"
	document.getElementById("toppings").innerHTML = toppingText;


}

function showSizes() {
	var sizeText = 'kies een grootte <br> <ul id = "sizeList">';
	for (var i = 0; i < allSizes.length; i++) {
		sizeText = sizeText +  "<li id= '"+allSizes[i].factor+"' onclick='priceSize(this.id)' >" + allSizes[i].name + "(" + allSizes[i].factor + ")</li>"

	}
	sizeText = sizeText + "</ul>"
	document.getElementById("sizes").innerHTML = sizeText;


}
function showSlices() {
	var sliceText = 'Kies een slice <br> <ul id = "slicesList">';
	for (var i = 0; i < allSlices.length; i++) {
		sliceText = sliceText + "<li id= '"+ allSlices[i].stukken+ "' onclick='priceSlice(this.id)' >" + allSlices[i].name + "</li>"

	}
	sliceText = sliceText + "</ul>"
	document.getElementById("slices").innerHTML = sliceText;


}*/

function showGeneral() {
	var toppingText = 'Kies een topping <br> <ul id = "toppingsList">';
	for (var i = 0; i < allToppings.length; i++) {
		toppingText = toppingText +  "<li id= '"+allToppings[i].price+"' onclick='priceToppings(this.id)' >" + allToppings[i].name + "(" + allToppings[i].price + ")</li>"

	}
	toppingText = toppingText + "</ul>"
	document.getElementById("toppings").innerHTML = toppingText;

	var sizeText = 'kies een grootte <br> <ul id = "sizeList">';
	for (var i = 0; i < allSizes.length; i++) {
		sizeText = sizeText +  "<li id= '"+allSizes[i].factor+"' onclick='priceSize(this.id)' >" + allSizes[i].name + "(" + allSizes[i].factor + ")</li>"

	}
	sizeText = sizeText + "</ul>"
	document.getElementById("sizes").innerHTML = sizeText;


	var sliceText = 'Kies een slice <br> <ul id = "slicesList">';
	for (var i = 0; i < allSlices.length; i++) {
		sliceText = sliceText + "<li id= '"+ allSlices[i].stukken+ "' onclick='priceSlice(this.id)' >" + allSlices[i].name + "</li>"

	}
	sliceText = sliceText + "</ul>"
	document.getElementById("slices").innerHTML = sliceText;


	
}



function pricePizza(clicked_id){
	var div = document.getElementById("pizzas");
	var items = div.getElementsByClassName("pizzaTileChosen");
	for (var i = 0; i < items.length; i++) {
		items[i].classList.remove("pizzaTileChosen");
	}
	var element = document.getElementById(clicked_id);
	element.classList.add("pizzaTileChosen");
	chosenPizzaPrice = clicked_id;
	showPrice();
}

function priceToppings(clicked_id){
	if (document.getElementById(clicked_id).classList.contains("chosenText")) {
		var element = document.getElementById(clicked_id);
		element.classList.remove("chosenText");
	}
	else{
		var element = document.getElementById(clicked_id);
		element.classList.add("chosenText");
	}
	var ul = document.getElementById("toppingsList");
	var items = ul.getElementsByClassName("chosenText");
	chosenToppingPrice = 0;
	for (var i = 0; i < items.length; i++){
		chosenToppingPrice += Number(items[i].id);
		//items[i].classList.remove("chosenText");
	}
	//chosenToppingPrice = clicked_id;
	showPrice();
}

function priceSize(clicked_id){
	showChosenText("sizeList", clicked_id);
	chosenSizePrice = clicked_id;
	showPrice();
}

function priceSlice(clicked_id){
	showChosenText("slicesList", clicked_id);
	chosenSlice = clicked_id;
	showPrice();
}
//
function showChosenText(listName, clicked_id){
	var ul = document.getElementById(listName);
	var items = ul.getElementsByClassName("chosenText");
	for (var i = 0; i < items.length; i++){
		items[i].classList.remove("chosenText");
	}
	var element = document.getElementById(clicked_id);
	element.classList.add("chosenText");
};

function showPrice(){
	var summedUp = ((Number(chosenPizzaPrice) + Number(chosenToppingPrice)) * Number(chosenSizePrice)) * Number(chosenSlice);

	document.getElementById("summedUp").innerHTML = "<h1> €" + summedUp.toFixed(2) + "</h1>";

}

//function showSizes(){




//}

//dingen die je aanklikt rechts + het bereken van totaal

//var pizza1s naar var array alle pizza's zelfde voor toppings en grootte

//id te onthouden van de laatste gekozen pizza, topping en grootte. 

//prijzen opzoeken in de array.